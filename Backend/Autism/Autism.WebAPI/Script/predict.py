from fastapi import FastAPI, File, UploadFile
import torch
from torchvision import transforms
from PIL import Image
import io
import torch.nn as nn
from torchvision import models

# SEBlock class
class SEBlock(nn.Module):
    def __init__(self, in_channels, reduction=16):
        super(SEBlock, self).__init__()
        self.se = nn.Sequential(
            nn.AdaptiveAvgPool2d(1),
            nn.Conv2d(in_channels, in_channels // reduction, kernel_size=1),
            nn.ReLU(),
            nn.Conv2d(in_channels // reduction, in_channels, kernel_size=1),
            nn.Sigmoid()
        )

    def forward(self, x):
        scale = self.se(x)
        return x * scale

# CustomRegNet class
class CustomRegNet(nn.Module):
    def __init__(self, num_classes=2):
        super(CustomRegNet, self).__init__()
        self.base_model = models.regnet_y_400mf(pretrained=True)
        self.base_model.stem.add_module("se", SEBlock(in_channels=32))
        
        num_ftrs = self.base_model.fc.in_features
        self.base_model.fc = nn.Sequential(
            nn.Linear(num_ftrs, 512),
            nn.BatchNorm1d(512),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(512, num_classes)
        )

    def forward(self, x):
        x = self.base_model(x)
        return x

# Define the FastAPI app
app = FastAPI()

# Load the trained model
def load_model():
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model = CustomRegNet(num_classes=2)
    model.load_state_dict(torch.load("regnet_model.pth", map_location=device))
    model.eval()
    model.to(device)
    return model

model = load_model()

# Define the image transformation
transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    """
    Endpoint to predict autism risk and return probabilities for each class.
    Args:
        file (UploadFile): Uploaded image file.
    Returns:
        dict: Prediction result including probabilities.
    """
    try:
        # Read and preprocess the image
        image = Image.open(io.BytesIO(await file.read())).convert("RGB")
        image = transform(image).unsqueeze(0)  # Add batch dimension

        # Move image to the same device as the model
        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        image = image.to(device)

        # Make prediction
        with torch.no_grad():
            outputs = model(image)
            probabilities = torch.softmax(outputs, dim=1).cpu().numpy()[0]  # Get probabilities

        # Chuyển đổi probabilities sang kiểu float của Python
        probabilities = probabilities.astype(float)

        # Map prediction to class label
        label_map = {0: "Non_Autistic", 1: "Autistic"}
        predicted_class = probabilities.argmax()
        predicted_label = label_map.get(predicted_class, "Unknown")

        # Construct result
        result = {
            "label": predicted_label,
            "probabilities": [
                {"class": class_id, "label": label_map[class_id], "probability": prob}
                for class_id, prob in enumerate(probabilities)
            ],
        }

        return result

    except Exception as e:
        return {"error": f"Failed to process image: {str(e)}"}
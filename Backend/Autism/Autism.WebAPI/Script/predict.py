import torch
from torchvision import transforms
from PIL import Image
import sys

# Load model
MODEL_PATH = "./Model/regnet_model.pth"
model = torch.load(MODEL_PATH)
model.eval()

# Process input
def predict_image(image_path):
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ])
    image = Image.open(image_path).convert("RGB")
    image = transform(image).unsqueeze(0)

    with torch.no_grad():
        output = model(image)
        _, predicted = torch.max(output, 1)
    
    # Map output to class names
    classes = ['Non-Autistic', 'Autistic']
    return classes[predicted.item()]

if __name__ == "__main__":
    image_path = sys.argv[1]
    result = predict_image(image_path)
    print(result)

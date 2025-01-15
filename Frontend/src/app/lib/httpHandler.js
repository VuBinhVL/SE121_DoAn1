let BE_ENPOINT = "https://localhost:7000";

const HEADERS = {
  "Content-Type": "application/json",
  accept: "application/json",
};

const getHeaders = () => {
  const token = localStorage.getItem("jwtToken");
  if (token === null) {
    return HEADERS;
  }
  return {
    ...HEADERS,
    Authorization: `Bearer ${token}`,
  };
};
const fetchGet = async (uri, onSuccess, onFail, onException) => {
  try {
    const res = await fetch(BE_ENPOINT + uri, {
      method: "GET",
      headers: getHeaders(),
    });
    const data = await res.json();
    if (!res.ok) {
      onFail(data);
      return;
    }
    onSuccess(data);
  } catch {
    onException();
  }
};

const fetchPost = async (uri, reqData, onSuccess, onFail, onException) => {
  try {
    const res = await fetch(BE_ENPOINT + uri, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(reqData),
    });
    const data = await res.json();
    if (!res.ok) {
      onFail(data);
      return;
    }
    onSuccess(data);
  } catch (e) {
    console.log(e);
    onException();
  }
};

const fetchDelete = async (uri, reqData, onSuccess, onFail, onException) => {
  try {
    const res = await fetch(BE_ENPOINT + uri, {
      method: "DELETE",
      headers: getHeaders(),
      body: JSON.stringify(reqData),
    });
    const data = await res.json();
    if (!res.ok) {
      onFail(data);
      return;
    }
    onSuccess(data);
  } catch {
    onException();
  }
};

const fetchPut = async (uri, reqData, onSuccess, onFail, onException) => {
  try {
    const res = await fetch(BE_ENPOINT + uri, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(reqData),
    });
    const data = await res.json();
    if (!res.ok) {
      onFail(data);
      return;
    }
    onSuccess(data);
  } catch {
    onException();
  }
};
const fetchUpload = async (uri, formData, onSuccess, onFail, onException) => {
  try {
    const res = await fetch(BE_ENPOINT + uri, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (!res.ok) {
      onFail(data);
      return;
    }
    onSuccess(data);
  } catch {
    onException();
  }
};
const fetchUploadFormData = async (uri, formData, onSuccess, onFail, onException) => {
  try {
    const res = await fetch(BE_ENPOINT + uri, {
      method: "POST",
      body: formData,
    });
    const text = await res.text();
    if (text) {
      const data = JSON.parse(text);
      if (!res.ok) {
        onFail(data);
        return;
      }
      onSuccess(data);
    } else {
      onFail({ message: "Server returned no data." });
    }
  } catch (e) {
    console.log(e);
    onException();
  }
};
const fetchPost2 = async (uri, reqData, onSuccess, onFail, onException) => {
  try {
    const headers = getHeaders();
    const isFormData = reqData instanceof FormData;
    if (isFormData) {
      // Không cần thiết lập Content-Type cho FormData, trình duyệt sẽ tự làm
      delete headers['Content-Type'];
    } else {
      reqData = JSON.stringify(reqData);
    }

    const res = await fetch(BE_ENPOINT + uri, {
      method: "POST",
      headers: headers,
      body: reqData,
    });

    const text = await res.text();
    if (text) {
      const data = JSON.parse(text);
      if (!res.ok) {
        onFail(data);
        return;
      }
      onSuccess(data);
    } else {
      onFail({ message: "Server returned no data." });
    }
  } catch (e) {
    console.log(e);
    onException();
  }
};
export { fetchGet, fetchPost, fetchDelete, fetchPut, fetchUpload,fetchUploadFormData,fetchPost2, BE_ENPOINT };

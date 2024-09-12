const url = "http://localhost:3001/";

const getUsers = async (endpoint, id = "") => {
  try {
    const response = await fetch(`${url}${endpoint}/${id}`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const getByCategory = async (endpoint = "", category = "") => {
  try {
    const response = await fetch(`${url}${endpoint}${category}`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(`${url}${endpoint}${category}`);
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const postUsers = async (endpoint, body) => {
  try {
    const response = await fetch(`${url}${endpoint}`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const put = async (endpoint, body) => {
  try {
    const response = await fetch(`${url}${endpoint}`, {
      method: "PUT",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const deleteMethod = async (endpoint, id) => {
  try {
    await fetch(`${url}${endpoint}${id}`, {
      method: "DELETE",
      mode: "cors",
      credentials: "same-origin",
    });
    console.log(`Se eliminó el producto ${id}`);
  } catch (error) {
    console.error("Error al eliminar:", error);
  }
};

export { getUsers, postUsers, put, deleteMethod, getByCategory };

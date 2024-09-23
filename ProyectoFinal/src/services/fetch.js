const url = "http://localhost:3001/users";

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
  } catch (error) {
    console.error(error);
    return null;
  }
};

const postUsers = async (obj) => {
  try {
    const response = await fetch('http://localhost:3001/users', {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al crear el usuario', error);
    throw error;
  }
};



const put = async (endpoint) => {
  try {
    const response = await fetch(`${url}${endpoint}`, {
      method: "PUT",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
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

export { postUsers, put, deleteMethod, getByCategory };

export const getUsers = async () => {
  try {
    const response = await fetch('http://localhost:3001/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener los datos', error);
    throw error;
  }
};


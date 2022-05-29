const getDocuments = async (id) => {
  return await fetch(`/.netlify/functions/api`, { method: "GET", id });
};

const createDocument = async (document) => {
  return await fetch("/.netlify/functions/api", {
    method: "POST",
    body: JSON.stringify(document),
  });
};

const updateDocument = async (id, document) => {
  return await request(`/.netlify/functions/api`, {
    method: "PUT",
    body: JSON.stringify(document),
    id,
  });
};

const deleteDocument = async (id) => {
  return await request(`/.netlify/functions/api`, {
    method: "DELETE",
    id,
  });
};

// import { request } from "./api.js";

// const getDocuments = async (id) => {
//   const url = id ? `${id}` : "";
//   return await request(`/documents/${url}`, { method: "GET" });
// };

// const createDocument = async (document) => {
//   return await request("/documents/", {
//     method: "POST",
//     body: JSON.stringify(document),
//   });
// };

// const updateDocument = async (id, document) => {
//   return await request(`/documents/${id}`, {
//     method: "PUT",
//     body: JSON.stringify(document),
//   });
// };

// const deleteDocument = async (id) => {
//   return await request(`/documents/${id}`, {
//     method: "DELETE",
//   });
// };

export { getDocuments, createDocument, updateDocument, deleteDocument };

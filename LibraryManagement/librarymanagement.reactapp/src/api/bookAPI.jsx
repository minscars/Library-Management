import API from "./API";
import APIFile from "./API.File";
const bookAPI = {
  GetAll: () => {
    return API.get("/Books");
  },
  GetById: (id) => {
    return API.get(`/Books/${id}`);
  },
  GetByCateId: (cateId) => {
    return API.get(`Books/Category/${cateId}`);
  },
  Search: (key) => {
    return API.get(`Books/Search/${key}`);
  },
  Create: (request) => {
    return APIFile.post("/Books", request);
  },
  Delete: (id) => {
    return API.delete(`/Books/${id}`);
  },
  Edit: (request) => {
    return APIFile.put("/Books", request);
  },
  GetTopFive: () => {
    return API.get("/Books/TopFive");
  },
  GetNewBook: () => {
    return API.get("/Books/NewBooks");
  },
};

export default bookAPI;

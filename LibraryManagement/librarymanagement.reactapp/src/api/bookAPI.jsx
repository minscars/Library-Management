import API from "./API";
import APIFile from "./API.File";
const bookAPI ={
    GetAll: () => {
        return API.get("/Books");
    },
    GetById: (id) => {
        return API.get(`/Books/${id}`);
    },
    Create: (request) => {
        return APIFile.post("/Books", request);
    },
    Delete: (id) => {
        return API.delete(`/Books/${id}`);
    }

}

export default bookAPI;
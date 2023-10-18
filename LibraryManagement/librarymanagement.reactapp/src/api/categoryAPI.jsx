import API from "./API";
import APIFile from "./API.File";
const categoryAPI ={
    GetAll: () => {
        return API.get("/Categories");
    },
    GetById: (id) => {
        return API.get(`/Categories/${id}`);
    },
    Create: (request) => {
        return APIFile.post("/Categories", request);
    },
    Delete: (id) => {
        return API.delete(`/Categories/${id}`);
    },
    Edit: (request) => {
        return APIFile.put("/Categories", request);
    }
}

export default categoryAPI;
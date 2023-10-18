import API from "./API";
import APIFile from "./API.File";
const bookAPI ={
    GetAll: () => {
        return API.get("/Books");
    },
    GetById: (id) => {
        return API.get(`/Books/${id}`);
    },
    GetByCateId: (cateId) => {
        return API.get(`Books/Category/${cateId}`)
    },
    Create: (request) => {
        return APIFile.post("/Books", request);
    },
    Delete: (id) => {
        return API.delete(`/Books/${id}`);
    },
    Edit: (request) => {
        return APIFile.put("/Books", request);
    }

}

export default bookAPI;
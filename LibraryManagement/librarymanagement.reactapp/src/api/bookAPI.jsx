import API from "./API";
import APIFile from "./API.File";
const bookAPI ={
    GetAll: () => {
        return API.get("/Books");
    },
    Create: (request) => {
        return APIFile.post("/Books", request);
    }
}

export default bookAPI;
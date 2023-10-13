import API from "./API";

const categoryAPI ={
    GetAll: () => {
        return API.get("/Categories");
    },
    Create: (request) => {
        return API.post("/Categories", request);
    },
    Delete: (id) => {
        return API.delete(`/Categories/${id}`);
    },
    Edit: (request) => {
        return API.put("/Categories", request);
    }
}

export default categoryAPI;
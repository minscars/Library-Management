import API from "./API";

const categoryAPI ={
    GetAll: () => {
        return API.get("/Categories");
    },
}

export default categoryAPI;
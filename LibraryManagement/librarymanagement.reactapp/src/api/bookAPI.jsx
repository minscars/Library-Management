import API from "./API";

const bookAPI ={
    GetAll: () => {
        return API.get("/Books");
    },
}

export default bookAPI;
import API from "./API";
const requestAPI ={
    GetAll: () => {
        return API.get("/Requests");
    }
}

export default requestAPI;
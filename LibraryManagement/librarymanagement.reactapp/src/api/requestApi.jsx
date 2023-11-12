import API from "./API";
const requestAPI = {
  GetSavedBooks: (userId) => {
    return API.get(`/Requests/${userId}`);
  },

  AddToRequest: (request) => {
    return API.post("/Requests", request);
  },

  DeleteItemInSave: (request) => {
    return API.put("/Requests/delete", request);
  },
};

export default requestAPI;

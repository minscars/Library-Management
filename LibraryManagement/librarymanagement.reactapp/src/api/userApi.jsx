import API from "./API";

const userAPI = {
  GetUserById: (id) => {
    return API.get(`/Users/${id}`);
  },

  RegisterAccount: (request) => {
    return API.post("/Users/Register", request);
  },
};

export default userAPI;

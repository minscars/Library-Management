import API from "./API";

const userAPI = {
  GetUserById: (id) => {
    return API.get(`/Users/${id}`);
  },
};

export default userAPI;

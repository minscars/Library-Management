import Api from "./API";

const accountApi = {
  login: (request) => {
    return Api.post("/Users/Login", request);
  },

  RegisterAccount: (request) => {
    return Api.post("/Users/Register", request);
  },
};

export default accountApi;

import Api from "./API";

const accountApi = {
  login: (request) => {
    return Api.post("/Users/Login", request);
  },
}

export default accountApi;
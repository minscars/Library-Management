import API from "./API";
import APIFile from "./API.File";
const postApi = {
  GetAll: () => {
    return API.get("/Posts");
  },
  GetById: (id) => {
    return API.get(`/Posts/Detail/${id}`);
  },
  PostNewPost: (request) => {
    return API.post("/Posts", request);
  },
};

export default postApi;

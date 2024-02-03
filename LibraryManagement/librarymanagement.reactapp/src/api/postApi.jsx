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
    return APIFile.post("/Posts", request);
  },
  GetByStatusPost: (idStatus) => {
    return API.get(`/Posts/Status/${idStatus}`);
  },
};

export default postApi;

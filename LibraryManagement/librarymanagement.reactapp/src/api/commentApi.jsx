import API from "./API";

const commentApi = {
  CreateCommnet: (request) => {
    return API.post("/Comments", request);
  },
  GetCommentPost: (postId) => {
    return API.get(`/Comments/${postId}`);
  },
};

export default commentApi;

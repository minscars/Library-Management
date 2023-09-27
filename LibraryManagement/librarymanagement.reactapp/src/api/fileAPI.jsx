import API from "./API.File";

const fileApi = {
  Upload: (content, folder) => {
    return API.post(`/Files/${folder}`,content);
  },
}

export default fileApi;
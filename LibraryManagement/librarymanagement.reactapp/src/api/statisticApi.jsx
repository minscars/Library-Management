import API from "./API";

const statisticAPI = {
  GetStatisticInfo: () => {
    return API.get("/Statistics");
  },
};

export default statisticAPI;
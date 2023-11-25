import API from "./API";
const notificaionApi = {
  GetByUser: (IdUser) => {
    return API.get(`/Notifications/${IdUser}`);
  },

  UpdateStatusNnotification: (Id) => {
    return API.put(`/Notifications/Status/${Id}`);
  },
};

export default notificaionApi;

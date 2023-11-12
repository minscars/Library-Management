import API from "./API";
const borrowApi = {
  Borrow: (IdUser) => {
    return API.post(`/BorrowBills/Borrow`, IdUser);
  },

  GetAllBorrowByUser: (IdUser) => {
    return API.get(`/BorrowBills/ByUser/${IdUser}`);
  },

  GetByBorrowId: (IdBorrow) => {
    return API.get(`/BorrowBills/BorrowBillDetail/${IdBorrow}`);
  },

  GetAllBorrowBill: () => {
    return API.get("/BorrowBills");
  },
};

export default borrowApi;

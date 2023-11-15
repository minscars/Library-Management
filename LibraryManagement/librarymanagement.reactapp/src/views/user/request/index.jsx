import { MdBackspace, MdOutlineAddCircle } from "react-icons/md";
import Card from "components/card";
import bookApi from "../../../api/bookAPI";
import requestApi from "../../../api/requestApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jwt from "jwt-decode";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkbox from "components/checkbox";
import Alert from "components/alert";
import Swal from "sweetalert2";

function Request() {
  const [booksList, setBooks] = useState([]);
  const [requestList, setRequests] = useState([]);
  var token = window.localStorage.getItem("token");
  const userLogin = jwt(token);

  useEffect(() => {
    const getAll = async () => {
      const data = await bookApi.GetAll();
      setBooks(data);
    };
    getAll();

    const getSavedRequest = async () => {
      const data = await requestApi.GetSavedBooks(userLogin.id);
      setRequests(data);
    };
    getSavedRequest();
  }, []);

  const handleClick = async (id) => {
    var bookId = id;
    var userId = userLogin.id;
    var quantity = 1;
    const request = { userId, bookId, quantity };
    console.log(request);
    await requestApi.AddToRequest(request).then(async (res) => {
      if (res.statusCode === 200) {
        toast.success(res.message);
        var data = await requestApi.GetSavedBooks(userLogin.id);
        setRequests(data);
      } else {
        toast.error(res.message);
      }
    });
  };

  const handleCheckbox = async (e) => {
    console.log(e.target.checked);
  };

  const handleDelete = async (idb) => {
    var bookId = idb;
    var userId = userLogin.id;
    const request = { userId, bookId };
    console.log(request);
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this book?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await requestApi.DeleteItemInSave(request);
        Alert.showSuccessAlert("Your book has been deleted sucessfully!");
        var data = await requestApi.GetSavedBooks(userLogin.id);
        setRequests(data);
      }
    });
  };

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-2">
        <Card extra={"w-full p-4 h-fit"}>
          <div className="nt-3 flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none">
            <h4 className="text-lg font-bold text-navy-700 dark:text-white">
              Your request
            </h4>
            {requestList != null && (
              <Link to="/user/request/open">
                <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
                  New request
                </button>
              </Link>
            )}
          </div>

          {requestList == null && (
            <div className="flex items-center justify-center">
              <p className="mt-2 text-xl text-gray-700">Reuqest is empty!</p>
            </div>
          )}
          {requestList?.map((row, key) => (
            <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <div className="flex items-center">
                <div className="mr-[15px]">
                  <Checkbox onChange={(e) => handleCheckbox(e)} />
                </div>
                <div>
                  <img
                    className="h-[83px] w-full rounded-lg"
                    src={row.bookImage}
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    {row.bookName}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Quantity: {row.quantity}
                  </p>
                </div>
              </div>
              <div className="mr-4 flex items-center justify-center text-red-600 dark:text-white">
                <MdBackspace
                  onClick={() => handleDelete(row.bookId)}
                  className="cursor-pointer"
                />
              </div>
            </div>
          ))}
        </Card>
      </div>
      <div className="col-span-1 h-full w-full xl:col-span-1 2xl:col-span-1">
        <Card extra={"w-full p-4 h-full"}>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Recommend
          </h4>
          {booksList?.map((row, key) => (
            <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <div className="flex items-center">
                <div className="">
                  <img
                    className="h-[83px] w-full rounded-lg"
                    src={row.image}
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    {row.name}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Borrowed:{" "}
                    <span className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white">
                      {row.quantity_Borrowed}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mr-4 flex items-center justify-center text-lg text-green-600 dark:text-white">
                <MdOutlineAddCircle
                  onClick={() => handleClick(row.id)}
                  className="ml-2 cursor-pointer"
                />
                <ToastContainer />
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

export default Request;

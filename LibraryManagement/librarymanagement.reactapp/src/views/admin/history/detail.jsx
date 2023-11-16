import Card from "components/card";
import borrowApi from "api/borrowApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import banner from "assets/img/profile/banner.png";
import moment from "moment";
import Alert from "components/alert";
import Swal from "sweetalert2";
function Detail() {
  const [borrowBilList, setBorrowBillList] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getbyid = async () => {
      const data = await borrowApi.GetByBorrowId(id);
      setBorrowBillList(data);
    };
    getbyid();
  }, []);

  const handleUpdateStatus = async (status) => {
    var borrowBillId = borrowBilList.id;
    const request = { borrowBillId, status };
    //console.log(request);
    Swal.fire({
      title: "Are you sure?",
      text: "You should recheck the information before update status!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I checked it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //alert(request);
        await borrowApi.UpdateStatus(request).then(async (res) => {
          console.log(request);

          if (res.statusCode === 200) {
            Alert.showSuccessAlert("Update status sucessfully!");
            const data = await borrowApi.GetByBorrowId(id);
            setBorrowBillList(data);
          } else {
            Alert.showErrorAlert("Something went worong!");
          }
        });
      }
    });
  };

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-2">
        <Card extra={"w-full p-4 h-full"}>
          <div className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none">
            <h4 className=" text-lg font-bold text-navy-700 dark:text-white">
              Borrow Bill #
              <span className="font-bold text-blue-700">
                {borrowBilList.id}{" "}
              </span>
            </h4>
            <div className="float-right">
              <button
                onClick={() => handleUpdateStatus(2)}
                class="linear ml-2 rounded-[20px] bg-lightPrimary px-4 py-2 text-sm font-medium text-blue-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
              >
                Approve
              </button>
              <button
                onClick={() => handleUpdateStatus(5)}
                class="linear ml-2 rounded-[20px] bg-lightPrimary px-4 py-2 text-sm font-medium text-orange-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
              >
                Rejected
              </button>
              <button
                onClick={() => handleUpdateStatus(3)}
                class="linear ml-2 rounded-[20px] bg-lightPrimary px-4 py-2 text-sm font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
              >
                Received
              </button>
              <button
                onClick={() => handleUpdateStatus(4)}
                class="linear ml-2 rounded-[20px] bg-lightPrimary px-4 py-2 text-sm font-medium text-lime-600 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
              >
                Returned
              </button>
            </div>
          </div>
          <div className="float-right mt-2">
            <p className="float-right font-bold text-navy-700 dark:text-white">
              Status:{" "}
              <span className="font-bold text-blue-700">
                {borrowBilList.status}
              </span>
            </p>
          </div>
          {borrowBilList.borrowedBooks?.map((row, key) => (
            <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <div className="flex items-center">
                <div>
                  <img
                    className="h-[83px] w-full rounded-lg"
                    src={row.image}
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <p className="font-medium text-navy-700 dark:text-white">
                    {row.name}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Quantity: {row.amount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Card>
      </div>
      <div className="col-span-1 w-full rounded-xl 2xl:col-span-1">
        <Card extra={"w-full p-4"}>
          {/* Background and profile */}
          <div
            className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className="absolute -bottom-12 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
              <img
                className="h-full w-full rounded-full"
                src={borrowBilList?.userAvatar}
                alt="user avatar"
              />
            </div>
          </div>

          {/* Name and position */}
          <div className="mt-16 flex flex-col items-center">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              {borrowBilList?.userName}
            </h4>
            <p className="text-base font-normal text-gray-600">Reader</p>
          </div>

          {/* Post followers */}
          <div className="mr-4 flex items-end justify-center text-red-600 dark:text-white"></div>
        </Card>
        <div>
          <div className="ml-4 mt-4 flex items-center justify-between">
            <p className="font-bold text-navy-700 dark:text-white">
              Create date:{" "}
              <span className="font-bold text-blue-700">
                {moment(borrowBilList.createDate).format("DD/MM/YYYY HH:mm A")}
              </span>
            </p>
          </div>
          <div className="ml-4 mt-4">
            <p className="font-bold text-navy-700 dark:text-white">
              Rejected date:{" "}
              <span className="font-bold text-blue-700">
                {moment(borrowBilList.rejectedDate).format(
                  "DD/MM/YYYY HH:mm A"
                )}
              </span>
            </p>
          </div>
          <div className="ml-4 mt-4">
            <p className="font-bold text-navy-700 dark:text-white">
              Approval date:{" "}
              <span className="font-bold text-blue-700">
                {moment(borrowBilList.approvalDate).format(
                  "DD/MM/YYYY HH:mm A"
                )}
              </span>
            </p>
          </div>
          <div className="ml-4 mt-4">
            <p className="font-bold text-navy-700 dark:text-white">
              Borrow date:{" "}
              <span className="font-bold text-blue-700">
                {moment(borrowBilList.borrowDate).format("DD/MM/YYYY HH:mm A")}
              </span>
            </p>
          </div>
          <div className="ml-4 mt-4">
            <p className="font-bold text-navy-700 dark:text-white">
              Received date:{" "}
              <span className="font-bold text-blue-700">
                {moment(borrowBilList.receivedDate).format(
                  "DD/MM/YYYY HH:mm A"
                )}
              </span>
            </p>
          </div>
          <div className="ml-4 mt-4">
            <p className="font-bold text-navy-700 dark:text-white">
              Due date:{" "}
              <span className="font-bold text-blue-700">
                {moment(borrowBilList.dueDate).format("DD/MM/YYYY HH:mm A")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

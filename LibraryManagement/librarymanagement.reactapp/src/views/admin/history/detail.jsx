import Card from "components/card";
import borrowApi from "api/borrowApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import banner from "assets/img/profile/banner.png";
import moment from "moment";
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
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-2">
        <Card extra={"w-full p-4 h-full"}>
          <div className="nt-3 flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none">
            <h4 className="text-lg font-bold text-navy-700 dark:text-white">
              Borrow Bill #{borrowBilList.id}
            </h4>
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
          <div>
            <div className="ml-4 mt-4 flex items-center justify-between">
              <p className="font-bold text-navy-700 dark:text-white">
                Create date:{" "}
                {moment(borrowBilList.createDate).format("DD/MM/YYYY HH:mm A")}
              </p>
              <p className="mr-20 font-bold text-navy-700 dark:text-white">
                Status: {borrowBilList.status}
              </p>
            </div>
            <div className="ml-4 mt-4">
              <p className="font-bold text-navy-700 dark:text-white">
                Rejected date:{" "}
                {moment(borrowBilList.rejectedDate).format(
                  "DD/MM/YYYY HH:mm A"
                )}
              </p>
            </div>
            <div className="ml-4 mt-4">
              <p className="font-bold text-navy-700 dark:text-white">
                Approval date:{" "}
                {moment(borrowBilList.approvalDate).format(
                  "DD/MM/YYYY HH:mm A"
                )}
              </p>
            </div>
            <div className="ml-4 mt-4">
              <p className="font-bold text-navy-700 dark:text-white">
                Borrow date:{" "}
                {moment(borrowBilList.borrowDate).format("DD/MM/YYYY HH:mm A")}
              </p>
            </div>
            <div className="ml-4 mt-4">
              <p className="font-bold text-navy-700 dark:text-white">
                Received date:{" "}
                {moment(borrowBilList.receivedDate).format(
                  "DD/MM/YYYY HH:mm A"
                )}
              </p>
            </div>
            <div className="ml-4 mt-4">
              <p className="font-bold text-navy-700 dark:text-white">
                Due date:{" "}
                {moment(borrowBilList.dueDate).format("DD/MM/YYYY HH:mm A")}
              </p>
            </div>
          </div>
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
      </div>
    </div>
  );
}

export default Detail;
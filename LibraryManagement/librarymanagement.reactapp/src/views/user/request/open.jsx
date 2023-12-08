import jwt from "jwt-decode";
import requestAPI from "../../../api/requestApi";
import { useEffect, useState } from "react";
import Card from "components/card";
import { useNavigate } from "react-router-dom";
import banner from "assets/img/profile/banner.png";
import userAPI from "api/userApi";
import borrowApi from "api/borrowApi";
import Alert from "components/alert";
import Swal from "sweetalert2";

const Index = () => {
  const [requestList, setRequests] = useState([]);
  var token = window.localStorage.getItem("token");
  const userLogin = jwt(token);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const user = await userAPI.GetUserById(userLogin.id);
      setUser(user);
    };
    getUser();
  }, []);

  useEffect(() => {
    const getSavedRequest = async () => {
      const data = await requestAPI.GetSavedBooks(userLogin.id);
      setRequests(data);
    };
    getSavedRequest();
  }, []);

  const handleBorrow = async (Id) => {
    var iduser = Id;
    Swal.fire({
      title: "Are you sure?",
      text: "You should recheck your information before open request!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I checked it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await borrowApi.Borrow(iduser).then(async (res) => {
          if (res.statusCode === 200) {
            Alert.showSuccessAlert(
              "Your request have been opened sucessfully!"
            );
            navigate(`/user/history/detail/${res.data}`);
          } else {
            Alert.showErrorAlert("Something went worong!");
          }
        });
      }
    });
  };

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-full w-full xl:col-span-1 2xl:col-span-2">
        <Card extra={"w-full p-4 h-full"}>
          <div class="mt-8 overflow-x-scroll xl:overflow-hidden">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border-b border-gray-200 pb-[10px] pr-10 text-start dark:!border-navy-700"></th>
                  <th className="border-b border-gray-200 pb-[10px] pr-10 text-start dark:!border-navy-700">
                    <p className="ml-4 text-xs tracking-wide text-gray-600">
                      TÊN SÁCH
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-10  text-start dark:!border-navy-700">
                    <p className="ml-4 text-xs tracking-wide text-gray-600">
                      NHÀ XUẤT BẢN
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-10 text-start dark:!border-navy-700">
                    <p className="text-xs tracking-wide text-gray-600">
                      THỂ LOẠI
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] text-start dark:!border-navy-700">
                    <p className="text-xs tracking-wide text-gray-600">
                      SỐ LƯỢT MƯỢN
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {requestList?.map((row, key) => {
                  return (
                    <tr>
                      <td className="pb-[18px] pt-[14px]"></td>
                      <td className="pb-[18px] pt-[14px] sm:text-[14px]">
                        <p className="ml-2 text-sm font-bold text-navy-700 dark:text-white">
                          {row.bookName}
                        </p>
                      </td>
                      <td className="pb-[18px] pt-[14px] sm:text-[14px]">
                        <p className="ml-4 text-sm font-bold text-navy-700 dark:text-white">
                          NXB Kim Đồng
                        </p>
                      </td>
                      <td className="pb-[18px] pt-[14px] sm:text-[14px]">
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {row.cateName}
                        </p>
                      </td>
                      <td className="pb-[18px] pt-[14px] sm:text-[14px]">
                        <p className=" text-sm font-bold text-navy-700 dark:text-white">
                          {row.quantity}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
                src={user?.avatar}
                alt="user avatar"
              />
            </div>
          </div>

          {/* Name and position */}
          <div className="mt-16 flex flex-col items-center">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              {user?.name}
            </h4>
            <p className="text-base font-normal text-gray-600">Reader</p>
          </div>
          <div className="mr-4 mt-4 text-gray-600 dark:text-white">
            Email:{" "}
            <span className="mr-2 text-base font-normal text-gray-800 dark:text-white">
              {user?.email} <br />
            </span>
            Phone number:{" "}
            <span className="mr-2 mt-2 text-base font-normal text-gray-800 dark:text-white">
              {user?.phoneNumber}
            </span>
          </div>

          <div className="mt-8 flex items-end justify-center text-red-600 dark:text-white">
            <button
              onClick={() => handleBorrow(user.id)}
              className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
            >
              Open request
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;

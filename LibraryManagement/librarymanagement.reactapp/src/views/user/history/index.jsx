import borrowApi from "api/borrowApi";
import Card from "components/card";
import { useEffect, useState } from "react";
import jwt from "jwt-decode";
import moment from "moment";
import { Link } from "react-router-dom";
const History = () => {
  var token = window.localStorage.getItem("token");
  const userLogin = jwt(token);
  const [borrowList, setBorrow] = useState([]);

  useEffect(() => {
    const getAllBorrow = async () => {
      const data = await borrowApi.GetAllBorrowByUser(userLogin.id);
      setBorrow(data);
    };
    getAllBorrow();
  }, []);

  return (
    <div>
      <div className="mt-5 gap-5 xl:grid-cols-2">
        <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
          <div class="relative flex items-center justify-between pt-4">
            <div class="text-xl font-bold text-navy-700 dark:text-white">
              Your request
            </div>
          </div>
          <div class="mt-8 overflow-x-scroll xl:overflow-hidden">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="items-center text-xs uppercase tracking-wide text-gray-600">
                      # id request
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="text-xs uppercase tracking-wide text-gray-600">
                      create date
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="text-xs uppercase tracking-wide text-gray-600">
                      due time
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="text-xs uppercase tracking-wide text-gray-600">
                      status
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {borrowList?.map((row, key) => (
                  <tr key={row.id}>
                    <td className="flex items-center pb-[18px] pt-[14px] sm:text-[15px]">
                      <p className="ml-4 text-sm font-bold text-navy-700 dark:text-white">
                        <Link to={`./detail/${row.id}`}>REQ-{row.id}</Link>
                      </p>
                    </td>
                    <td className=" items-center pb-[18px] pt-[14px] sm:text-[15px]">
                      <div className=" w-[240px]">
                        {row.createDate != null ? moment(row.createDate).format("DD/MM/YYYY HH:mm A") : "..."}
                      </div>
                    </td>
                    <td className="pb-[18px] pt-[14px] sm:text-[15px]">
                      <div className="w-[240px]">
                        {row.dueDate != null ? moment(row.dueDate).format("DD/MM/YYYY HH:mm A") : "..."}
                      </div>
                    </td>
                    <td className="pb-[18px] pt-[14px] sm:text-[15px]">
                      <div className="w-[40px]">
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {row.status}
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default History;

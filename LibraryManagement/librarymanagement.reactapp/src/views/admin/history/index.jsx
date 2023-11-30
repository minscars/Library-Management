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
      const data = await borrowApi.GetAllBorrowBill();
      setBorrow(data);
    };
    getAllBorrow();
  }, []);

  return (
    <div>
      <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
        <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            <li>
              <Link
                to="/admin/history"
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                >
                    Tất cả
                </Link>
            </li>
          
            <li>
              <Link
                to="/admin/history/status/1"
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
              >
                Pending
              </Link>
            </li>

            <li>
              <Link
                to="/admin/history/status/2"
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
              >
                Approved
              </Link>
            </li>

            <li>
              <Link
                to="/admin/history/status/3"
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
              >
                Borrowing
              </Link>
            </li>

            <li>
              <Link
                to="/admin/history/status/4"
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
              >
                Returned
              </Link>
            </li>

            <li>
              <Link
                to="/admin/history/status/5"
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
              >
                Rejected
              </Link>
            </li>
        </ul>
      </div>
      <div className="gap-5 xl:grid-cols-2">
        <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
          <div class="relative flex items-center justify-between pt-4">
            <div class="text-xl font-bold text-navy-700 dark:text-white">
              Requests List
            </div>
          </div>
          <div class="mt-8 overflow-x-scroll xl:overflow-hidden">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="items-center text-xs uppercase tracking-wide text-gray-600">
                      # request id
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="text-xs uppercase tracking-wide text-gray-600">
                      create date
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="text-xs uppercase tracking-wide text-gray-600">
                      due date
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="text-xs uppercase tracking-wide text-gray-600">
                      by user
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="text-xs uppercase tracking-wide text-gray-600">
                      status
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="text-xs uppercase tracking-wide text-gray-600">
                      note
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {borrowList?.map((row, key) => (
                  <tr key={row.id}>
                    <td className="flex items-center pb-[18px] pt-[14px] sm:text-[15px]">
                      <p className="ml-4 text-sm font-bold text-navy-700 dark:text-white">
                        <Link to={`./detail/${row.id}`}>
                          {"REQ-" + row.id}
                        </Link>
                      </p>
                    </td>
                    <td className=" items-center pb-[18px] pt-[14px] sm:text-[15px]">
                      <div className=" w-[200px]">
                        {row.createDate != null
                          ? moment(row.createDate).format("DD/MM/YYYY HH:mm A")
                          : "......"}
                      </div>
                    </td>
                    <td className="pb-[18px] pt-[14px] sm:text-[15px]">
                      <div className="w-[200px]">
                        {row.dueDate != null
                          ? moment(row.dueDate).format("DD/MM/YYYY")
                          : "......"}
                      </div>
                    </td>
                    <td className="pb-[18px] pt-[14px] sm:text-[15px]">
                      <div className="w-[200px]">{row.userName}</div>
                    </td>
                    <td className="pb-[18px] pt-[14px] sm:text-[15px]">
                      <div className="w-[40px]">
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {row.status}
                        </p>
                      </div>
                    </td>
                    <td className="pb-[18px] pt-[14px] sm:text-[15px]">
                      <div className="w-[40px]">
                        <p className="text-sm font-bold text-red-500 dark:text-white">
                          {moment().isAfter(moment(row.dueDate, 'YYYY-MM-DDTHH:mm:ss.SSSZ')) && (row.status == "Approve" || row.status == "Borrowing") && ("Expired")}
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

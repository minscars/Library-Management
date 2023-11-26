import { MdCancel, MdModeEditOutline } from "react-icons/md";
import Card from "components/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cateApi from "../../../api/categoryAPI";
import moment from "moment";
const Index = () => {
  const [catesList, setCates] = useState([]);

  useEffect(() => {
    const getall = async () => {
      const data = await cateApi.GetAll();
      setCates(data);
    };
    getall();
  }, []);

  return (
    <div>
      <div className="mt-5 gap-5 xl:grid-cols-2">
        <Link to="/admin/categories/create">
          <button class="linear float-right mb-4 rounded-[20px] bg-cyan-700 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-cyan-800 active:bg-cyan-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90">
            + New category
          </button>
        </Link>
        <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
          <div class="relative flex items-center justify-between pt-4">
            <div class="text-xl font-bold text-navy-700 dark:text-white">
              Categories List
            </div>
          </div>

          <div class="mt-8 overflow-x-scroll xl:overflow-hidden">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="text-xs tracking-wide text-gray-600">#</p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="text-xs tracking-wide text-gray-600">
                      CATEGORY NAME
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="text-xs tracking-wide text-gray-600">
                      CREATED TIME
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="text-xs tracking-wide text-gray-600">
                      UPDATED TIME
                    </p>
                  </th>
                  <th
                    colSpan="3"
                    className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700"
                  >
                    <p className="text-xs tracking-wide text-gray-600">
                      ACTION
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {catesList.map((row, key) => {
                  return (
                    <tr>
                      <td className="pb-[18px] pt-[14px] sm:text-[14px]">
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {key + 1}
                        </p>
                      </td>
                      <td className="pb-[18px] pt-[14px] sm:text-[14px]">
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {row.name}
                        </p>
                      </td>
                      <td className="pb-[18px] pt-[14px] sm:text-[14px]">
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {row.createdDate != null ? moment(row.createdDate).format("DD/MM/YYYY HH:mm A") : "..."}
                        </p>
                      </td>
                      <td className="pb-[18px] pt-[14px] sm:text-[14px]">
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {row.updatedDate != null ? moment(row.updatedDate).format("DD/MM/YYYY HH:mm A") : "..."}
                        </p>
                      </td>
                      <td className="flex items-center gap-2 pb-[18px] pt-[14px] sm:text-[14px]">
                        <Link to={`./edit/${row.id}`}>
                          <MdModeEditOutline className="rounded-full text-xl" />
                        </Link>
                        <Link to={`./delete/${row.id}`}>
                          <MdCancel className="ml-4 rounded-full text-xl text-red-500" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;

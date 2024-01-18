import { useEffect, useState } from "react";
import { MdCancel, MdModeEditOutline } from "react-icons/md";
import Card from "components/card";
import { Link } from "react-router-dom";
import bookApi from "../../../api/bookAPI";

const Index = () => {
  const [booksList, setBooks] = useState([]);

  useEffect(() => {
    const getall = async () => {
      const data = await bookApi.GetAll();
      setBooks(data);
    };
    getall();
  }, []);

  return (
    <div>
      <div className="gap-5 xl:grid-cols-2">
        <Card extra={"w-full px-6 pb-6  "}>
          <div class="relative  mb-2 pt-4">
            <div class="flex items-center justify-between text-xl font-bold text-navy-700 dark:text-white">
              <p className="left-0 top-0">Books List</p>
              <Link to="/admin/books/create">
                <button class="linear right-0 rounded-[20px] bg-cyan-700 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-cyan-800 active:bg-cyan-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90">
                  + New book
                </button>
              </Link>
            </div>
          </div>
          <div className="table-wrp mt-2 block h-[500px] overflow-x-scroll">
            <table className="w-full">
              <thead className="sticky top-0 mb-1 bg-white">
                <tr>
                  <th className="border-b border-gray-200 pb-[10px] pr-[70px] text-start dark:!border-navy-700">
                    <p className="ml-10 items-center text-xs tracking-wide text-gray-600">
                      #
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-[100px] text-start dark:!border-navy-700">
                    <p className="ml-10 text-xs tracking-wide text-gray-600">
                      NAME
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-[60px] text-start dark:!border-navy-700">
                    <p className="text-xs tracking-wide text-gray-600">
                      CATEGORY
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-[40px] text-start dark:!border-navy-700">
                    <p className="text-xs tracking-wide text-gray-600">
                      ON HAND
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-[40px] text-start dark:!border-navy-700">
                    <p className="text-xs tracking-wide text-gray-600">
                      BORROWED
                    </p>
                  </th>
                  <th
                    colSpa="3"
                    className="border-b border-gray-200 pb-[10px] pr-[40px] text-start dark:!border-navy-700"
                  >
                    <p className="ml-2 text-xs tracking-wide text-gray-600">
                      ACTION
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody className=" overflow-y-auto">
                {booksList?.map((row, key) => (
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="flex items-center justify-center pb-[9px] pt-[9px] sm:text-[15px]">
                      <p className="mr-8 text-sm font-bold text-navy-700 dark:text-white">
                        {key + 1}
                      </p>
                      <img
                        src={row.image}
                        alt=""
                        className="h-[90px] w-auto rounded-xl border-2 3xl:h-full 3xl:w-full"
                      />
                    </td>
                    <td className="ml-10 items-center pb-[18px] pt-[14px] sm:text-[15px]">
                      <div className="ml-10 mr-[18px] w-auto">
                        <Link to={`/admin/books/detail/${row.id}`}>
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {row.name}
                          </p>
                        </Link>
                      </div>
                    </td>
                    <td className="pb-[18px] pt-[14px] sm:text-[15px]">
                      <div className="w-auto">
                        <p className=" text-justify text-sm font-bold text-navy-700 dark:text-white">
                          {row.categoryName}
                        </p>
                      </div>
                    </td>
                    <td className="pb-[18px] pt-[14px] sm:text-[15px]">
                      <div className="w-[40px]">
                        <p className="ml-5 text-justify text-sm font-bold text-navy-700 dark:text-white">
                          {row.quantity_On_Hand}
                        </p>
                      </div>
                    </td>
                    <td className="pb-[18px] pt-[14px] sm:text-[15px]">
                      <p className="ml-8 text-justify text-sm font-bold text-navy-700 dark:text-white">
                        {row.quantity_Borrowed}
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
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;

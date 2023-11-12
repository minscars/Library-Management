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
      <div className="mt-5 gap-5 xl:grid-cols-2">
        <Link to="/admin/books/create">
          <button class="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
            Add new book
          </button>
        </Link>
        <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
          <div class="relative flex items-center justify-between pt-4">
            <div class="text-xl font-bold text-navy-700 dark:text-white">
              Books List
            </div>
          </div>
          <div class="mt-8 overflow-x-scroll xl:overflow-hidden">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="items-center text-xs tracking-wide text-gray-600">
                      #
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="ml-10 text-xs tracking-wide text-gray-600">
                      NAME
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="text-xs tracking-wide text-gray-600">
                      CATEGORY
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="text-xs tracking-wide text-gray-600">
                      ON HAND
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700">
                    <p className="text-xs tracking-wide text-gray-600">
                      BORROWED
                    </p>
                  </th>
                  <th
                    colSpa="3"
                    className="border-b border-gray-200 pb-[10px] pr-28 text-start dark:!border-navy-700"
                  >
                    <p className="text-xs tracking-wide text-gray-600">
                      ACTION
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {booksList?.map((row, key) => (
                  <tr>
                    <td className=" flex items-center justify-between pb-[18px] pt-[14px] sm:text-[15px]">
                      <p className="ml-4 mr-10 text-sm font-bold text-navy-700 dark:text-white">
                        {key + 1}
                      </p>
                      <img
                        src={row.image}
                        alt=""
                        className=" flex h-16 w-16 items-center justify-center rounded-xl"
                      />
                    </td>
                    <td className="ml-10 items-center pb-[18px] pt-[14px] sm:text-[15px]">
                      <div className="ml-10 mr-20 w-[200px]">
                        <Link to={`/admin/books/detail/${row.id}`}>
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {row.name}
                          </p>
                        </Link>
                      </div>
                    </td>
                    <td className="pb-[18px] pt-[14px] sm:text-[15px]">
                      <div className="w-[80px]">
                        <p className=" text-sm font-bold text-navy-700 dark:text-white">
                          {row.categoryName}
                        </p>
                      </div>
                    </td>
                    <td className="pb-[18px] pt-[14px] sm:text-[15px]">
                      <div className="w-[40px]">
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {row.quantity_On_Hand}
                        </p>
                      </div>
                    </td>
                    <td className="pb-[18px] pt-[14px] sm:text-[15px]">
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                        {row.quantity_Borrowed}
                      </p>
                    </td>
                    <td className="flex items-center gap-2 pb-[18px] pt-[14px] sm:text-[14px]">
                      <Link to={`./edit/${row.id}`}>
                        <MdModeEditOutline className="rounded-full text-xl" />
                      </Link>
                      <Link to={`./delete/${row.id}`}>
                        <MdCancel className="rounded-full text-xl text-red-500" />
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

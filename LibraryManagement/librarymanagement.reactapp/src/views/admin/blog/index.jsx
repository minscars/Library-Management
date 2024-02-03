import { useEffect, useState } from "react";
import Card from "components/card";
import { Link } from "react-router-dom";
import postApi from "api/postApi";
import moment from "moment";
const Index = () => {
  const [postList, setPosts] = useState([]);
  useEffect(() => {
    const getall = async () => {
      const data = await postApi.GetAll();
      setPosts(data);
    };
    getall();
  }, []);

  return (
    <div>
      <div className="gap-5 xl:grid-cols-2">
        <Card extra={"w-full px-6 pb-6  "}>
          <div class="relative  mb-2 pt-4">
            <div class="flex items-center justify-between text-xl font-bold text-navy-700 dark:text-white">
              <p className="left-0 top-0">Blogs List</p>
            </div>
          </div>
          <div className="table-wrp mt-2 block h-[500px] overflow-x-scroll">
            <table className="w-full">
              <thead className="sticky top-0 mb-1 bg-white">
                <tr>
                  <th className="border-b border-gray-200 pb-[10px] text-start dark:!border-navy-700">
                    <p className="ml-5 items-center text-xs tracking-wide text-gray-600">
                      #
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-[50px] text-start dark:!border-navy-700">
                    <p className="ml-5 items-center text-xs tracking-wide text-gray-600">
                      IMAGE
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-[100px] text-start dark:!border-navy-700">
                    <p className="ml-10 text-xs tracking-wide text-gray-600">
                      TITLE
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-[60px] text-start dark:!border-navy-700">
                    <p className="text-xs tracking-wide text-gray-600">
                      BY USER
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-[40px] text-start dark:!border-navy-700">
                    <p className="text-xs tracking-wide text-gray-600">
                      STATUS
                    </p>
                  </th>
                  <th className="border-b border-gray-200 pb-[10px] pr-[40px] text-start dark:!border-navy-700">
                    <p className="text-xs tracking-wide text-gray-600">
                      CREATED TIME
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody className=" overflow-y-auto">
                {postList?.map((row, key) => (
                  <tr className="border-b-2 hover:bg-gray-100">
                    <td className="flex items-center justify-center pb-[9px] pt-[9px] sm:text-[15px]">
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                        {key + 1}
                      </p>
                    </td>
                    <td className="pb-[18px] pt-[14px] sm:text-[15px]">
                      {row.image == null && "none"}
                      <div className=" pl-4">
                        <img
                          src={row.image}
                          alt=""
                          className="h-[60px] w-auto rounded-xl border-2 3xl:h-full 3xl:w-full"
                        />
                      </div>
                    </td>
                    <td className="ml-10 items-center pb-[18px] pt-[14px] sm:text-[15px]">
                      <div className="ml-10 mr-[18px] w-auto">
                        <Link to={`/admin/books/detail/${row.id}`}>
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {row.title}
                          </p>
                        </Link>
                      </div>
                    </td>
                    <td className="pb-[18px] pt-[14px] sm:text-[15px]">
                      <div className="w-auto">
                        <p className=" text-justify text-sm font-bold text-navy-700 dark:text-white">
                          {row.userName}
                        </p>
                      </div>
                    </td>
                    <td className="pb-[18px] pt-[14px] sm:text-[15px]">
                      <div className="w-[40px]">
                        <p className=" text-justify text-sm font-bold text-navy-700 dark:text-white">
                          {row.status}
                        </p>
                      </div>
                    </td>
                    <td className="pb-[18px] pt-[14px] sm:text-[15px]">
                      <p className=" text-justify text-sm font-bold text-navy-700 dark:text-white">
                        {moment(row.createdDate).format("DD/MM/YYYY HH:mm A")}
                      </p>
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

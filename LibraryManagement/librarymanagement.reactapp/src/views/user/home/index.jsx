import Banner from "./components/Banner";
import { Link } from "react-router-dom";
import BookCard from "components/card/BookCard";
import { useEffect, useState } from "react";
import bookApi from "../../../api/bookAPI";
import Card from "components/card";

const Marketplace = () => {
  const [booksList, setBooks] = useState([]);
  const [topFiveList, setTopFive] = useState([]);
  useEffect(() => {
    const getall = async () => {
      const data = await bookApi.GetAll();
      setBooks(data);
    };
    getall();

    const getTopFive = async () => {
      const data = await bookApi.GetTopFive();
      setTopFive(data);
    };
    getTopFive();
  }, []);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFt Banner */}
        <Banner />

        {/* NFt Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white"></h4>
        </div>

        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          {booksList?.map((row, key) => (
            <Link to={`/user/books/detail/${row.id}`}>
              <BookCard
                title={row.name}
                author="Esthera Jackson"
                cate={row.categoryName}
                image={row.image}
                id={row.id}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* right side section */}

      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <Card extra={"w-full p-4"}>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Top books
          </h4>
          {topFiveList?.map((row, key) => (
            <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <Link to={`/user/books/detail/${row.id}`}>
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
                      Borrowed: {row.quantity_Borrowed}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default Marketplace;

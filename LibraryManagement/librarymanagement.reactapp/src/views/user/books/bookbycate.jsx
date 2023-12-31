import BookCard from "components/card/BookCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import bookApi from "../../../api/bookAPI";
import cateApi from "../../../api/categoryAPI";
import { Link } from "react-router-dom";

const Marketplace = () => {
  const { id } = useParams();
  const [booksList, setBooks] = useState([]);
  const [catesList, setCate] = useState([]);
  useEffect(() => {
    const getbyidcate = async () => {
      const data = await bookApi.GetByCateId(id);
      setBooks(data);
    };
    const getallCate = async () => {
      const data = await cateApi.GetAll();
      setCate(data);
    };
    getallCate();
    getbyidcate();
  }, [id]);

  return (
    //<div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
    <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
      <div className="mb-4 flex flex-col justify-between px-4 md:flex-row md:items-center">
        <ul className="flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
          <Link
            to={`/user/books`}
            className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
          >
            Tất cả
          </Link>
          {catesList.map((row) => (
            <li>
              <Link
                to={`/user/books/bookbycate/${row.id}`}
                className={`text-base font-medium text-brand-500 hover:text-brand-800 dark:text-white ${
                  id == row.id ? "text-brand-600" : "text-brand-500"
                }`}
              >
                {row.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-5">
        {booksList?.map((row, key) => (
          <Link to={`/user/books/detail/${row.id}`}>
            <BookCard
              title={row.name}
              author="Esthera Jackson"
              cate={row.categoryName}
              image={row.image}
              link={"/user/home"}
            />
          </Link>
        ))}
      </div>
    </div>
    //</div>
  );
};

export default Marketplace;

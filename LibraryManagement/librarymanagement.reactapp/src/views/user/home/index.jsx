import Banner from "./components/Banner";
import { Link } from "react-router-dom";
import BookCard from "components/card/BookCard";
import tableDataTopCreators from "views/admin/home/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/home/variables/tableColumnsTopCreators";
import HistoryCard from "./components/HistoryCard";
import TopCreatorTable from "./components/TableTopCreators";
import { useEffect, useState } from "react";
import bookApi from "../../../api/bookAPI"

const Marketplace = () => {
  const [booksList, setBooks] = useState([]);
  
  useEffect(()=>{
    const getall = async ()=>{
      const data = await bookApi.GetAll();
      setBooks(data);
  }
    getall();
  },[])

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFt Banner */}
        <Banner />

        {/* NFt Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            
          </h4>
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
              link={"/user/home"}
            />
          </Link>
          ))};
        </div>
      </div>

      {/* right side section */}

      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <TopCreatorTable
          extra="mb-5"
          tableData={tableDataTopCreators}
          columnsData={tableColumnsTopCreators}
        />
        <HistoryCard />
      </div>
    </div>
  );
};

export default Marketplace;

import Banner from "./components/Banner";
import NFt4 from "assets/img/nfts/book3.jpg";
import NFt5 from "assets/img/nfts/book2.jpg";
import NFt6 from "assets/img/nfts/book3.jpg";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";

import tableDataTopCreators from "views/admin/home/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/home/variables/tableColumnsTopCreators";
import HistoryCard from "./components/HistoryCard";
import TopCreatorTable from "./components/TableTopCreators";
import NftCard from "components/card/NftCard";
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
            <NftCard
              bidders={[avatar1, avatar2, avatar3]}
              title={row.name}
              author="Esthera Jackson"
              price="0.91"
              image={row.image}
            />
          ))};
        </div>


        {/* Recenlty Added setion */}
        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Recently Added
          </h4>
        </div>

        {/* Recently Add NFTs */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Abstract Colors"
            author="Esthera Jackson"
            price="0.91"
            image={NFt4}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="ETH AI Brain"
            author="Nick Wilson"
            price="0.7"
            image={NFt5}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Mesh Gradients"
            author="Will Smith"
            price="2.91"
            image={NFt6}
          />
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

import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import bookApi from "../../api/bookAPI";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

export default function App() {
  const [newBooks, setNewBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getNewBooks = async () => {
      const data = await bookApi.GetNewBook();
      setNewBooks(data);
    };
    getNewBooks();
  }, []);
  const handleClick = async (id) => {
    navigate(`/user/books/detail/${id}`);
  };
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper rounded-[20px] text-white"
      >
        {newBooks?.map((row) => (
          <SwiperSlide>
            <div className="ml-[100px] flex items-center justify-center">
              <div>
                <img
                  className="mb-3 h-[100px] w-auto rounded-xl 3xl:h-full 3xl:w-full"
                  src={row.image}
                />
              </div>
              <div className="ml-[30px] flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]">
                <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:text-3xl">
                  New books
                </h4>
                <p className="mb-[14px] max-w-full text-xl text-[#E3DAFF] md:text-3xl ">
                  {row.name}
                </p>
                <button
                  onClick={() => handleClick(row.id)}
                  className="linear rounded-[20px] bg-cyan-700 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-cyan-800 active:bg-cyan-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
                >
                  Detail
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

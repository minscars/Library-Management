import React from "react";
import image1 from "assets/img/profile/image1.png";
import { Link } from "react-router-dom";
import { MdModeEditOutline, MdArrowForward } from "react-icons/md";
const post = ({ title, avatar, username, createDate, comment, id, image }) => {
  return (
    <div
      className={` mb-1 mt-1 flex w-full items-center justify-between rounded-xl border-2 bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none`}
    >
      <div className="flex items-center">
        <div className="">
          <img className="h-auto w-[83px] rounded-lg" src={image} alt="" />
        </div>
        <div className="ml-4">
          <p className={`text-l font-bold text-navy-700 dark:text-white`}>
            {title}
          </p>
          <div className="mt-1 flex items-center gap-2">
            <img src={avatar} className={` h-[35px] w-[35px] rounded-full`} />

            <div className="ml-2">
              <p
                className={` text-m font-medium text-navy-700 dark:text-white`}
              >
                {username}
              </p>
              <p className="text-sm font-medium text-navy-700 dark:text-white">
                {createDate}
              </p>
            </div>
            <div className="ml-[100px]">
              <p className="text-sm font-medium text-navy-700 dark:text-white">
                {comment} comments
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
        <Link to={`/user/forum/detail/${id}`}>
          <MdArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default post;

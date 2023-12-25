import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import image1 from "assets/img/profile/image1.png";
const post = () => {
  return (
    <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
      <div className="flex items-center">
        <div className="">
          <img className="h-[120px] w-[120px] rounded-lg" src={image1} alt="" />
        </div>
        <div className="ml-4">
          <p className="text-xl font-bold text-navy-700 dark:text-white">
            Title for a post with image
          </p>
          <p className="mt-2 text-sm text-gray-600">
            May be categories is here
          </p>
          <div className="mt-5 flex items-center gap-2">
            <div className="h-[35px] w-[35px] rounded-full">
              <img src={image1} className="h-full w-full rounded-full" alt="" />
            </div>
            <div className="ml-2">
              <p className="text-m font-medium text-navy-700 dark:text-white">
                Le Minh Kha
              </p>
              <p className="text-sm font-medium text-navy-700 dark:text-white">
                3 days
              </p>
            </div>
            <div className="ml-[100px]">
              <p className="text-sm font-medium text-navy-700 dark:text-white">
                56 comments
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
        <MdModeEditOutline />
      </div>
    </div>
  );
};

export default post;

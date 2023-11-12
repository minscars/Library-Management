import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import Card from "components/card";
import 'react-toastify/dist/ReactToastify.css';
const NftCard = ({ title, author, cate, image, extra, id }) => {
const notify = () => toast.success("Add to request sucessfully!");

  const [heart, setHeart] = useState(true);
  return (
    <Card extra={`flex items-center flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}>
      <div className="h-full w-full ">
        <div className="relative w-full">
          <img
            src={image}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />
          <button
            onClick={() => setHeart(!heart)}
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50 dark:text-navy-900">
              {heart ? (
                <IoHeartOutline />
              ) : (
                <IoHeart className="text-brand-500" />
              )}
            </div>
          </button>
        </div>

        <div className="mb-3 flex items-center justify-center px-1">
          <div className="mb-2">
            <p className="text-center text-lg font-bold text-navy-700 dark:text-white">
              {" "}
              {title}{" "}
            </p>
            <p className="text-center mt-1 text-sm font-medium text-gray-600 md:mt-2">
              By {author}{" "}
            </p>
          </div>
        </div>
      </div>
      <p className="text-center mb-2 text-sm font-bold text-brand-500 dark:text-white">
        {cate}
      </p>
      <ToastContainer />
    </Card>
  );
};

export default NftCard;

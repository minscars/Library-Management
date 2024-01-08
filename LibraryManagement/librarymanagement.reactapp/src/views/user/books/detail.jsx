import Card from "components/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import bookApi from "../../../api/bookAPI";
import { useParams } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import requestApi from "../../../api/requestApi";
import jwt from "jwt-decode";
import image1 from "assets/img/profile/image1.png";
import Rating from "@mui/material/Rating";
import * as React from "react";
export function Detail() {
  const [book, setBook] = useState([]);
  const { id } = useParams();
  const [requestList, setRequests] = useState([]);
  var token = window.localStorage.getItem("token");
  const userLogin = jwt(token);
  const [value, setValue] = useState(null);

  useEffect(() => {
    const getbyid = async () => {
      const data = await bookApi.GetById(id);
      setBook(data);
    };
    getbyid();
  }, []);
  console.log(value);
  const handleClick = async (id) => {
    var bookId = id;
    var userId = userLogin.id;
    var quantity = 1;
    const request = { userId, bookId, quantity };

    await requestApi.AddToRequest(request).then(async (res) => {
      if (res.statusCode === 200) {
        toast.success(res.message);
        var data = await requestApi.GetSavedBooks(userLogin.id);
        setRequests(data);
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <div className="gap-5 xl:grid-cols-2">
      <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
        <div className="mb-5 mt-10 flex h-full w-full overflow-x-scroll xl:overflow-hidden">
          <Link to={"/user/books"}>
            <MdArrowBackIos className="mr-2 rounded-full text-[20px]" />
          </Link>
          <img
            src={book.image}
            className="mr-6 flex h-[360px] w-auto rounded-xl border-2"
          />
          <div className="">
            <p className="text-[24px] font-bold  text-indigo-700">
              {book.name}
            </p>
            <p className=" mt-2 text-[18px] font-bold text-cyan-500">
              {" "}
              {book.categoryName}
            </p>
            <p className="mt-2 text-[18px] font-bold text-cyan-500">
              {" "}
              <span className="mb-10 text-[18px] font-bold  text-navy-700">
                {" "}
                Borrowed:{"  "}
              </span>
              {book.quantity_Borrowed}
            </p>
            <p className="mr-4 mt-2 text-justify text-base text-gray-600">
              <span className="mb-10 text-[18px] font-bold  text-navy-700">
                Description:{"  "}
              </span>
              Khi ngợi khen một người trẻ độc lập mạnh mẽ, có thể chúng ta không
              biết họ lớn lên trong môi trường phải làm bố mẹ của bố mẹ mình ra
              sao, cô đơn khắc khoải thế nào. Khi ngưỡng một một người trẻ học
              giỏi, có thể chúng ta không biết họ đã bị ngạt thở bởi kỳ vọng của
              cha mẹ. Khi phán xét một người trẻ hời hợt thiếu động lực sống, có
              thể chúng ta không biết từ bé đến lớn họ đã được "đút sẵn" đến nỗi
              không còn biết mình là ai. Khi kêu ca một người trẻ thiếu nghị lực
              muốn kết thúc cuộc sống, có thể chúng ta không biết họ đã oằn mình
              mang gánh nặng mà gia đình ấn xuống quá lâu, khiến cánh giải thoát
              duy nhất là cái chết…
            </p>
            <div className="mt-[50px]">
              <button
                onClick={() => handleClick(book.id)}
                className="linear rounded-[15px] bg-cyan-700 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-cyan-800 active:bg-cyan-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
              >
                Borrow
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
        <div class="mb-4 h-px bg-gray-300 dark:bg-white/30" />
        <div className="flex flex-col items-center justify-center">
          <span className="align-center mb-3 text-[20px] font-bold text-customcolor-500">
            Feedback & Vote
          </span>
          <div>
            <div className="flex items-center justify-center rounded-[10px] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <img
                src={image1}
                className="ml-3 mr-3 h-[35px] w-[35px] rounded-full"
                alt=""
              />
              <input
                className="autofocus placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 focus:border-1 linear mb-2 mr-3 mt-2 w-[500px] resize-none rounded-[10px] rounded-[7px] bg-lightPrimary px-3 px-4 py-2 py-2.5 font-sans text-sm font-medium font-normal outline-0 transition transition-all duration-200 hover:bg-gray-100 focus:outline-0 active:bg-gray-200 disabled:resize-none disabled:border-0 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
                type="text"
                placeholder="Let's share about this book!"
              />
            </div>
            <div className="row ml-[65px] mt-2 flex items-center">
              <span className="mr-4 text-base text-gray-600">
                How would you rate this book?
              </span>

              <Rating
                className="items-center"
                name="half-rating"
                value={value}
                defaultValue={0}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <input
                type="submit"
                value="Send"
                className="linear ml-20 cursor-pointer rounded-[10px] bg-cyan-700 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-cyan-800 active:bg-cyan-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
              />
            </div>
            <div className="mb-4 ml-4 mt-6 text-[18px] font-bold  text-navy-700">
              <span>All feadbacks (1) 5/5 </span>
            </div>
            <div>
              <div
                className={`mb-2 mt-2 flex w-full items-center justify-between rounded-2xl border-2 bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none`}
              >
                <div className="row flex items-center">
                  <div className="ml-4">
                    <p
                      className={`text-m font-bold text-navy-700 dark:text-white`}
                    >
                      Content feedback is here
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <img
                        src={image1}
                        className={` h-[35px] w-[35px] rounded-full`}
                      />

                      <div className="ml-2">
                        <p
                          className={`text-m font-medium text-navy-700 dark:text-white`}
                        >
                          Username
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-[200px]">
                    <span className="mr-4 text-base text-gray-600">
                      12/12/2023 11:11
                    </span>
                    <div>
                      <Rating
                        className="items-center"
                        name="half-rating"
                        value={3.5}
                        defaultValue={0}
                        precision={0.5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Detail;

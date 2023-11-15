import Card from "components/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import bookApi from "../../../api/bookAPI";
import { useParams } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import requestApi from "../../../api/requestApi";
import jwt from "jwt-decode";

export function Detail() {
  const [book, setBook] = useState([]);
  const { id } = useParams();
  const [requestList, setRequests] = useState([]);
  var token = window.localStorage.getItem("token");
  const userLogin = jwt(token);

  useEffect(() => {
    const getbyid = async () => {
      const data = await bookApi.GetById(id);
      setBook(data);
    };
    getbyid();
  }, []);

  const handleClick = async (id) => {
    var bookId = id;
    var userId = userLogin.id;
    var quantity = 1;
    const request = { userId, bookId, quantity };
    console.log(request);
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
    <div className="mt-6 gap-5 xl:grid-cols-2">
      <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
        <div className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            <Link to={"/user/books"}>
              <MdArrowBackIos className="rounded-full text-[20px]" />
            </Link>
          </div>
        </div>
        <div className="mb-10 flex h-full w-full overflow-x-scroll xl:overflow-hidden">
          <img
            src={book.image}
            className="mr-6 mt-5 flex h-[400px] w-auto rounded-xl"
          />
          <div className="mt-6">
            <p className="text-[24px] font-bold  text-indigo-700">
              {book.name}
            </p>
            <p className="mb-10 mt-2 text-[20px] font-bold text-cyan-500">
              {" "}
              {book.categoryName}
            </p>
            <p className="mt-2 text-[20px] font-bold text-cyan-500">
              {" "}
              <span className="mb-10 text-xl font-bold  text-navy-700">
                {" "}
                Borrowed:{"  "}
              </span>
              {book.quantity_Borrowed}
            </p>
            <p>
              <span className="mb-10 text-xl font-bold  text-navy-700">
                Description: <br></br>
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
                className="linear rounded-[20px] bg-cyan-700 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-cyan-800 active:bg-cyan-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
              >
                Borrow
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Detail;

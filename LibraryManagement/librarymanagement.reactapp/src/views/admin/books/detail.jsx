import Card from "components/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import bookApi from "../../../api/bookAPI";
import { useParams } from "react-router-dom";
import moment from "moment";
import { MdCancel, MdModeEditOutline, MdArrowBackIos } from "react-icons/md";
import Alert from "components/alert";
import Swal from "sweetalert2";

export function Detail() {
  const [book, setBook] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getbyid = async () => {
      const data = await bookApi.GetById(id);
      setBook(data);
    };
    getbyid();
  }, []);

  const handleClick = async (idb) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this book?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await bookApi.Delete(idb);
        Alert.showSuccessAlert("Your book has been deleted sucessfully!");
      }
    });
  };

  return (
    <div className="gap-5 xl:grid-cols-2">
      <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
        <div className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            <Link to={"/admin/books"}>
              <MdArrowBackIos className="rounded-full text-[20px]" />
            </Link>
          </div>
          <div className=" flex">
            <Link to={`/admin/books/edit/${book.id}`}>
              <MdModeEditOutline className="rounded-full text-[30px]" />
            </Link>
            <MdCancel
              onClick={() => handleClick(book.id)}
              className="ml-4 rounded-full text-[30px] text-red-500"
            />
          </div>
        </div>
        <div className="mb-10 ml-10 flex h-full w-auto items-center">
          <img
            src={book.image}
            className="mr-6 flex h-[360px] w-auto rounded-xl border-2"
          />
          <div>
            <p className="text-[24px] font-bold  text-indigo-700">
              {book.name}
            </p>
            <p className="mt-2 text-[24px] font-bold text-cyan-500">
              {" "}
              {book.categoryName}
            </p>
            <p className="mt-1 text-xl ">
              {" "}
              <span className="mb-10 text-[18px] font-bold  text-navy-700">
                Book ID:
              </span>{" "}
              {book.id}
            </p>
            <p className="mt-1 text-xl ">
              {" "}
              <span className="mb-10 text-[18px] font-bold  text-navy-700">
                Import:
              </span>{" "}
              {book.quantity_Import}
            </p>
            <p className="mt-1 text-xl ">
              {" "}
              <span className="mb-10 text-[18px] font-bold  text-navy-700">
                Export:
              </span>{" "}
              {book.quantity_Export}
            </p>
            <p className="mt-1 text-xl ">
              {" "}
              <span className="mb-10 text-[18px] font-bold  text-navy-700">
                On hand:
              </span>{" "}
              {book.quantity_On_Hand}
            </p>
            <p className="mt-1 text-xl ">
              {" "}
              <span className="mb-10 text-[18px] font-bold  text-navy-700">
                Borrowed:
              </span>{" "}
              {book.quantity_Borrowed}
            </p>
            <p className="mt-1 text-xl ">
              {" "}
              <span className="mb-10 text-[18px] font-bold  text-navy-700">
                Create time:
              </span>{" "}
              {moment(book.createdTime).format("MMMM Do YYYY, h:mm:ss a")}
            </p>
            <p className="mt-1 text-xl ">
              {" "}
              <span className="mb-10 text-[18px] font-bold  text-navy-700">
                Update time:
              </span>{" "}
              {moment(book.updateTime).format("MMMM Do YYYY, h:mm:ss a")}
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
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Detail;

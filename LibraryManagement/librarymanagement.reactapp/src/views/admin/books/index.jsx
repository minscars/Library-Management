import { useEffect, useState } from "react";
import { MdCancel, MdModeEditOutline } from "react-icons/md";
import Card from "components/card";
import { Link } from "react-router-dom";
import bookApi from "../../../api/bookAPI"

const Index = () => {
  const [booksList, setBooks] = useState([]);
  
  

  useEffect(()=>{
    const getall = async ()=>{
      const data = await bookApi.GetAll();
      setBooks(data);
    }
    getall();
  },[])
  
  // useEffect(async () => {
  //   const data = await bookApi.GetAll();
  //   setBooks(data);
  //   console.log(data)
  // }, []);
  //var data = [
  //  {
  //    "id": 1,
  //    "name": "Đắc nhân tâm",
  //    "publisher": "NXB Hoa Hồng",
  //    "category": "Sách tâm lý",
  //    "progress": 50,
  //  },
  //  {
  //    "id": 2,
  //    "name": "Dế Mèn phiêu lưu ký",
  //    "publisher": "NXB Kim Đồng",
  //    "category": "Truyện dài",
  //    "progress": 80,
  //  },
  //  {
  //    "id": 3,
  //    "name": "Tôi thấy hoa vàng trên cỏ xanh",
  //    "publisher": "NXB Sự Thật",
  //    "category": "Truyện dài",
  //    "progress": 20,
  //  },
  //]

  return (
    <div>
      <div className="mt-5 gap-5 xl:grid-cols-2">
        <Link to="/admin/books/create">
          <button class="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">Add new book</button>
        </Link>
        <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
          <div class="relative flex items-center justify-between pt-4">
            <div class="text-xl font-bold text-navy-700 dark:text-white">
              Books List
            </div>
          </div>
          <div class="mt-8 overflow-x-scroll xl:overflow-hidden">
            <table className="w-full">
              <thead>
                  <tr>
                      <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                        <p className="text-xs tracking-wide text-gray-600">#</p>
                      </th>
                      <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                        <p className="text-xs tracking-wide text-gray-600">NAME</p>
                      </th>
                      <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                        <p className="text-xs tracking-wide text-gray-600">DESCRIPTION</p>
                      </th>
                      <th colSpan="3" className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                        <p className="text-xs tracking-wide text-gray-600">ACTION</p>
                      </th>
                  </tr>
              </thead>
              <tbody>
                {booksList?.map((row, key) => (
                    <tr key={row.id}>
                      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <p className="text-sm font-bold text-navy-700 dark:text-white">{key}</p>
                      </td>
                      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <p className="text-sm font-bold text-navy-700 dark:text-white">{row.name}</p>
                      </td>
                      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <p className="text-sm font-bold text-navy-700 dark:text-white">{row.discription}</p>
                      </td>
                      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <Link to="/admin/categories">
                          <MdModeEditOutline />
                        </Link>
                      </td>
                      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <MdCancel className="text-red-500" /> 
                      </td>
                      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <MdCancel className="text-red-500" /> 
                      </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;

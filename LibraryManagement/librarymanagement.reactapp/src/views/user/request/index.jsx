import { MdBackspace, MdOutlineAddCircle } from "react-icons/md";
import image1 from "assets/img/profile/image1.png";
import Card from "components/card";
import bookApi from "../../../api/bookAPI";
import requestApi from "../../../api/requestApi";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Request(){
    const [booksList, setBooks] = useState([]);
    const [requestList, setRequests] = useState([]);

    useEffect(()=>{
        const getall = async ()=>{
          const data = await bookApi.GetAll();
          setBooks(data);
        }
        const getallRequest = async () =>{
            const data = await requestApi.GetAll();
            setRequests(data)
        }
        getallRequest();
        getall();
      },[])
    return (
        <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
            <div className="col-span-1 h-full w-full xl:col-span-1 2xl:col-span-2">
                <Card extra={"w-full p-4 h-full"}>
                    {booksList?.map((row, key) =>(
                        <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                            <div className="flex items-center">
                            <div className="">
                                <img className="h-[83px] w-[83px] rounded-lg" src={row.image} alt="" />
                            </div>
                            <div className="ml-4">
                                <p className="text-base font-medium text-navy-700 dark:text-white">
                                {row.name}
                                </p>
                                <p className="mt-2 text-sm text-gray-600">
                                #1
                                <a
                                    className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                                    href=" "
                                >
                                    Remove
                                </a>
                                </p>
                            </div>
                            </div>
                            <div className="mr-4 text-lg flex items-center justify-center text-green-600 dark:text-white">
                                <MdOutlineAddCircle />
                            </div>
                        </div>                  
                    ))}
                </Card>
            </div>
            <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
                <Card extra={"w-full p-4 h-full"}>
                    <div className="nt-3 flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pt-4 pb-[20px] shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none">
                        <h4 className="text-lg font-bold text-navy-700 dark:text-white">
                        Call card
                        </h4>
                        <Link to="/user/request/open">
                            <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
                                Borrow
                            </button>
                        </Link>
                    </div>
                    {requestList?.map((row, key) =>(

                        <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                            <div className="flex items-center">
                                <div className="">
                                    <img className="h-[83px] w-[83px] rounded-lg" src={row.bookImage} alt="" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-base font-medium text-navy-700 dark:text-white">
                                    {row.bookName}
                                    </p>
                                    <p className="mt-2 text-sm text-gray-600">
                                    Quantity: {row.quantity}
                                    </p>
                                </div>
                            </div>
                            <div className="mr-4 flex items-center justify-center text-red-600 dark:text-white">
                                <MdBackspace />
                            </div>
                        </div>
                    ))}


                </Card>
            </div>
        </div>
    );
}

export default Request;
import { MdBackspace, MdOutlineAddCircle } from "react-icons/md";
import image1 from "assets/img/profile/image1.png";
import image2 from "assets/img/profile/image2.png";
import image3 from "assets/img/profile/image3.png";
import Card from "components/card";
//import { FiSearch } from "react-icons/fi";
import { useSearchParams, Link } from 'react-router-dom';

function Request(){
    const [searchParams, setSearchParams] = useSearchParams();
    //searchParams.get('key')
    return (
        <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
            <div className="col-span-1 h-full w-full xl:col-span-1 2xl:col-span-2">
                {/* Search */}
                {/* <div className="mb-2 w-full">
                    <div className="relative mt-[3px] flex h-[61px] w-full flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-full md:flex-grow-0 md:gap-1 xl:w-full xl:gap-2">
                        <div className="relative flex h-full w-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-full">
                            <p className="pl-3 pr-2 text-xl">
                                <FiSearch className="h-4 w-full text-gray-400 dark:text-white" />
                            </p>
                            <input
                                type="text"
                                placeholder="Search..."
                                class="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-full"
                            />
                        </div>
                    </div>
                </div> */}
                <Card extra={"w-full p-4 h-full"}>
                    {/* Project 1 */}
                    <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <div className="flex items-center">
                        <div className="">
                            <img className="h-[83px] w-[83px] rounded-lg" src={image1} alt="" />
                        </div>
                        <div className="ml-4">
                            <p className="text-base font-medium text-navy-700 dark:text-white">
                            Technology behind the Blockchain
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
                    {/* Project 1 */}
                    <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <div className="flex items-center">
                        <div className="">
                            <img className="h-[83px] w-[83px] rounded-lg" src={image3} alt="" />
                        </div>
                        <div className="ml-4">
                            <p className="text-base font-medium text-navy-700 dark:text-white">
                            Technology behind the Blockchain
                            </p>
                            <p className="mt-2 text-sm text-gray-600">
                            #3
                            <a
                                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                                href=" "
                            >
                                Remove
                            </a>
                            </p>
                        </div>
                        </div>
                        <div className="mr-4 flex text-lg items-center justify-center text-green-600 dark:text-white">
                            <MdOutlineAddCircle />
                        </div>
                    </div>
                    {/* Project 1 */}
                    <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <div className="flex items-center">
                        <div className="">
                            <img className="h-[83px] w-[83px] rounded-lg" src={image2} alt="" />
                        </div>
                        <div className="ml-4">
                            <p className="text-base font-medium text-navy-700 dark:text-white">
                            Technology behind the Blockchain
                            </p>
                            <p className="mt-2 text-sm text-gray-600">
                            Project #1 .
                            <a
                                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                                href=" "
                            >
                                See product details
                            </a>
                            </p>
                        </div>
                        </div>
                        <div className="mr-4 flex text-lg items-center justify-center text-green-600 dark:text-white">
                            <MdOutlineAddCircle />
                        </div>
                    </div>
                    {/* Project 1 */}
                    <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <div className="flex items-center">
                        <div className="">
                            <img className="h-[83px] w-[83px] rounded-lg" src={image1} alt="" />
                        </div>
                        <div className="ml-4">
                            <p className="text-base font-medium text-navy-700 dark:text-white">
                            Technology behind the Blockchain
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
                    {/* Project 1 */}
                    <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <div className="flex items-center">
                            <div className="">
                                <img className="h-[83px] w-[83px] rounded-lg" src={image1} alt="" />
                            </div>
                            <div className="ml-4">
                                <p className="text-base font-medium text-navy-700 dark:text-white">
                                Technology behind the Blockchain
                                </p>
                                <p className="mt-2 text-sm text-gray-600">
                                #B-000001
                                </p>
                            </div>
                        </div>
                        <div className="mr-4 flex items-center justify-center text-red-600 dark:text-white">
                            <MdBackspace />
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <div className="flex items-center">
                            <div className="">
                                <img className="h-[83px] w-[83px] rounded-lg" src={image2} alt="" />
                            </div>
                            <div className="ml-4">
                                <p className="text-base font-medium text-navy-700 dark:text-white">
                                Technology behind the Blockchain
                                </p>
                                <p className="mt-2 text-sm text-gray-600">
                                #B-000002
                                </p>
                            </div>
                        </div>
                        <div className="mr-4 flex items-center justify-center text-red-600 dark:text-white">
                            <MdBackspace />
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <div className="flex items-center">
                            <div className="">
                                <img className="h-[83px] w-[83px] rounded-lg" src={image3} alt="" />
                            </div>
                            <div className="ml-4">
                                <p className="text-base font-medium text-navy-700 dark:text-white">
                                Technology behind the Blockchain
                                </p>
                                <p className="mt-2 text-sm text-gray-600">
                                #S-000003
                                </p>
                            </div>
                        </div>
                        <div className="mr-4 flex items-center justify-center text-red-600 dark:text-white">
                            <MdBackspace />
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <div className="flex items-center">
                            <div className="">
                                <img className="h-[83px] w-[83px] rounded-lg" src={image3} alt="" />
                            </div>
                            <div className="ml-4">
                                <p className="text-base font-medium text-navy-700 dark:text-white">
                                Technology behind the Blockchain
                                </p>
                                <p className="mt-2 text-sm text-gray-600">
                                #3
                                <a
                                    className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                                    href=" "
                                >
                                    Remove
                                </a>
                                </p>
                            </div>
                        </div>
                        <div className="mr-4 flex items-center justify-center text-red-600 dark:text-white">
                            <MdBackspace />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Request;
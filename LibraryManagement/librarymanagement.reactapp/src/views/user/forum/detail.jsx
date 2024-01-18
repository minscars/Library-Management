import Card from "components/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import postApi from "api/postApi";
import { useParams } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import image1 from "assets/img/profile/image1.png";
import moment from "moment";
export function Detail() {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getbyid = async () => {
      const data = await postApi.GetById(id);
      setPost(data);
    };
    getbyid();
  }, []);

  return (
    <div className="gap-5 xl:grid-cols-2">
      <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
        <div className="mb-5 mt-5 flex h-full w-full overflow-x-scroll xl:overflow-hidden">
          <Link to={"/user/forum"}>
            <MdArrowBackIos className="mr-2 rounded-full text-[20px]" />
          </Link>
          {/* <img
            src={book.image}
            className="mr-6 flex h-[360px] w-auto rounded-xl border-2"
          /> */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src={post?.userAvatar}
                className={` h-[42px] w-[42px] rounded-full`}
              />

              <div className="ml-2">
                <p
                  className={` text-m font-bold text-navy-700 dark:text-white`}
                >
                  {post?.userName}
                </p>
                <p className="text-sm font-medium text-navy-700 dark:text-white">
                  {moment(post?.createdDate).format("DD/MM/YYYY")}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-[22px] font-bold text-navy-700">
                {post?.title}
              </p>
              <p className="mr-4 mt-2 text-justify text-base text-gray-900">
                <div dangerouslySetInnerHTML={{ __html: post?.content }} />
              </p>
            </div>
            <ToastContainer />
          </div>
        </div>
        <div class="mb-4 h-px bg-gray-300 dark:bg-white/30" />
        <div className="flex flex-col items-center justify-center">
          <span className="align-center mb-3 text-[20px] font-bold text-customcolor-500">
            Comments
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
                    <div></div>
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

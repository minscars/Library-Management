import Card from "components/card";
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import image1 from "assets/img/profile/image1.png";
import Alert from "components/alert";
import moment from "moment";
import postApi from "api/postApi";
import userAPI from "api/userApi";
import commentApi from "api/commentApi";
import jwt from "jwt-decode";
export function Detail() {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  //get current user login
  const [user, setUser] = useState(null);
  const userLogin = jwt(window.localStorage.getItem("token"));

  const [commentList, setComments] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const formRef = useRef(null);
  useEffect(() => {
    const getbyid = async () => {
      const data = await postApi.GetById(id);
      setPost(data);
    };
    getbyid();

    const getUser = async () => {
      const user = await userAPI.GetUserById(userLogin.id);
      setUser(user);
    };
    getUser();

    const getCommnet = async () => {
      const data = await commentApi.GetCommentPost(id);
      setComments(data);
    };
    getCommnet();
  }, []);

  const addComment = async (content) => {
    const formData = new FormData();
    formData.append("PostId", id);
    formData.append("UserId", userLogin.id);
    formData.append("Content", content.content);
    await commentApi.CreateCommnet(formData).then(async (res) => {
      if (res.statusCode === 200) {
        Alert.showSuccessAlert("Your post have been posted sucessfully!");

        if (formRef.current) {
          formRef.current.reset();
        }
      }
    });
  };

  return (
    <div className="gap-5 xl:grid-cols-2">
      <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
        <div className="mb-5 mt-5 flex h-full w-full overflow-x-scroll xl:overflow-hidden">
          <Link to={"/user/forum"}>
            <MdArrowBackIos className="mr-2 rounded-full text-[20px]" />
          </Link>
          <div className="">
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
            <div className="flex w-full justify-center">
              <img src={image1} className="border-1 h-[260px] w-auto " />
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
                src={user?.avatar}
                className="ml-3 mr-3 h-[35px] w-[35px] rounded-full"
                alt=""
              />
              <form ref={formRef} onSubmit={handleSubmit(addComment)}>
                <input
                  className="autofocus placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 focus:border-1 linear mb-2 mr-3 mt-2 w-[500px] resize-none rounded-[10px] rounded-[7px] bg-lightPrimary px-3 px-4 py-2 py-2.5 font-sans text-sm font-medium font-normal outline-0 transition transition-all duration-200 hover:bg-gray-100 focus:outline-0 active:bg-gray-200 disabled:resize-none disabled:border-0 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
                  type="text"
                  placeholder="Let's share about this blog!"
                  autoFocus
                  {...register("content")}
                />
                <button
                  type="submit"
                  className="linear ml-2 cursor-pointer rounded-[10px] bg-cyan-700 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-cyan-800 active:bg-cyan-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="mb-4 ml-4 mt-2 text-[18px] font-bold  text-navy-700">
              <span>All commnents (1)</span>
            </div>
            <div className="table-wrp mt-2 block h-[300px] overflow-x-scroll">
              {commentList == null && (
                <div className="flex flex-col items-center justify-center">
                  <p className="mb-48 mt-5 font-medium text-gray-700">
                    Do not have comment yet!
                  </p>
                </div>
              )}
              {commentList?.map((row, key) => (
                <div
                //className={`mb-1 mt-1 flex w-full items-center justify-between bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none`}
                >
                  <div className="row ml-20 mt-1 flex items-center">
                    <div className="flex  gap-2">
                      <img
                        src={row.userAvatar}
                        className={`mt-2 h-[36px] w-[36px] rounded-full`}
                      />

                      <div className="ml-1 rounded-2xl border-2 bg-white p-2 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p
                          className={`text-m font-bold text-navy-700 dark:text-white`}
                        >
                          {row.userName}{" "}
                          <span className="mr-4 text-sm text-gray-600">
                            {" "}
                            {moment(row.createdDate).format(
                              "DD/MM/YYYY HH:mm A"
                            )}
                          </span>
                        </p>
                        <p className="text-m font-medium text-navy-700 dark:text-white">
                          {row.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Detail;

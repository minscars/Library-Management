import Post from "components/post";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";
import { useNavigate } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import React, { useState, useEffect, useRef } from "react";
import { MdHome, MdImage, MdArrowForward } from "react-icons/md";
import postApi from "api/postApi";
import userAPI from "api/userApi";
import jwt from "jwt-decode";
import moment from "moment";
import RichTextEditor from "components/textEditor";
import { useForm } from "react-hook-form";
import Alert from "components/alert";
import Swal from "sweetalert2";
const Forum = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [postList, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const userLogin = jwt(window.localStorage.getItem("token"));
  const [contentPost, setContent] = useState("");
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    const getall = async () => {
      const data = await postApi.GetAll();
      setPosts(data);
      navigate("/user/forum");
    };
    getall();

    const getUser = async () => {
      const user = await userAPI.GetUserById(userLogin.id);
      setUser(user);
    };
    getUser();
  }, [open]);

  //const myRef = useRef("");
  const formRef = useRef(null);
  const addNewPost = async (content) => {
    const formData = new FormData();
    formData.append("Title", content.title);
    formData.append("Content", contentPost);
    formData.append("UserId", userLogin.id);
    await postApi.PostNewPost(formData).then(async (res) => {
      if (res.statusCode === 200) {
        Alert.showSuccessAlert("Your post have been posted sucessfully!");
        if (formRef.current) {
          formRef.current.reset();
        }
        reset();
        setContent("");
        setOpen(false);
        navigate("/user/forum");
      }
    });
  };

  return (
    <div>
      <div className="grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="col-span-1 h-[610px] w-full rounded-xl 2xl:col-span-2">
          <div className="flex items-center justify-center rounded-[10px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <img
              src={user?.avatar}
              className="ml-3 mr-3 h-[35px] w-[35px] rounded-full"
              alt=""
            />
            <div
              onClick={onOpenModal}
              className="linear mb-2 mr-3 mt-2 w-full cursor-pointer rounded-[10px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
            >
              <span>Let's share what going on your mind!</span>
            </div>
          </div>

          <Modal
            open={open}
            onClose={onCloseModal}
            center
            classNames={{
              modal:
                "rounded-[10px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none",
            }}
          >
            <div className="h-auto w-[600px]">
              <div className="flex justify-center">
                <span className="text-xl font-bold text-navy-700 dark:text-white">
                  Create new post
                </span>
              </div>
              <div class="mb-[10px] mt-2 h-px bg-gray-300 dark:bg-white/30" />
              <div>
                <div className="flex items-center">
                  <img
                    src={user?.avatar}
                    className="ml-3 mr-3 h-[42px] w-[42px] rounded-full"
                    alt=""
                  />
                  <div className="ml-1 mr-[125px]">
                    <p className="text-m  font-bold text-navy-700 dark:text-white">
                      {user?.name}
                    </p>
                    <div className="border-1 linear flex w-full items-center rounded-[10px] bg-lightPrimary px-2 py-1  transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
                      <MdHome />
                      <p className="ml-1 text-[14px] font-medium text-navy-700 dark:text-white">
                        Công khai
                      </p>
                    </div>
                  </div>
                  <div className="linear right-0 mb-2 mr-3 mt-2 flex cursor-pointer items-center rounded-[10px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
                    <span>Add into your post</span>
                    <MdImage className="text-l ml-4" />
                  </div>
                </div>
                <div className="mt-4">
                  <form ref={formRef} onSubmit={handleSubmit(addNewPost)}>
                    <div className="mb-2">
                      <label class="text-m text-gray-600 dark:text-white">
                        Title
                      </label>
                      <input
                        className={`mt-2 h-12 w-full justify-center border border-gray-400 bg-white/0 p-3 text-sm outline-none`}
                        autoFocus
                        {...register("title")}
                        placeholder="Title is here!"
                        type="text"
                      />
                    </div>
                    <div>
                      <label class="text-m text-gray-600 dark:text-white">
                        Content
                      </label>
                      <RichTextEditor
                        value={contentPost}
                        onChange={(newContent) => {
                          setContent(newContent);
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="linear mt-[60px] flex w-full items-center justify-center rounded-[10px] bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                    >
                      Post
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Modal>

          <Card
            extra={
              "w-full p-4 table-wrp mt-2 block h-[550px] overflow-x-scroll"
            }
          >
            {postList?.map((row, key) => (
              <Post
                title={row.title}
                avatar={row.userAvatar}
                username={row.userName}
                comment="56"
                createDate={moment(row.createdDate).format("DD/MM/YYYY")}
                id={row.id}
              />
            ))}
          </Card>
        </div>
        <div className="col-span-1 w-full rounded-xl 2xl:col-span-1">
          <Card extra={"w-full p-4 !h-[260px]"}>
            {/* Background and profile */}
            <div
              className="relative mt-1 flex h-20 w-full justify-center rounded-xl bg-cover"
              style={{ backgroundImage: `url(${banner})` }}
            >
              <div className="absolute -bottom-12 flex h-[80px] w-[80px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                <img
                  className="h-full w-full rounded-full"
                  src={user?.avatar}
                  alt="user avatar"
                />
              </div>
            </div>

            {/* Name and position */}
            <div className="mt-16 flex flex-col items-center">
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                {user?.name}
              </h4>
            </div>

            {/* Post followers */}
            <div className="mr-4 mt-2 flex w-full items-center justify-center text-gray-600 dark:text-white">
              <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
                My profile
              </button>
            </div>
          </Card>
          <Card
            extra={
              "w-full p-4 table-wrp mt-2 block h-[350px] overflow-x-scroll"
            }
          >
            <div
              className={` mb-2 mt-2 flex w-full items-center justify-between rounded-2xl border-2 bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none`}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <p
                    className={`text-m font-bold text-navy-700 dark:text-white`}
                  >
                    Title blog personal
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <p
                      className={`text-sm font-medium text-navy-700 dark:text-white`}
                    >
                      Comment
                    </p>
                  </div>
                </div>
              </div>
              <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
                <MdArrowForward />
              </div>
            </div>
            <div
              className={` mb-2 mt-2 flex w-full items-center justify-between rounded-2xl border-2 bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none`}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <p
                    className={`text-m font-bold text-navy-700 dark:text-white`}
                  >
                    Title blog personal
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <p
                      className={`text-sm font-medium text-navy-700 dark:text-white`}
                    >
                      Comment
                    </p>
                  </div>
                </div>
              </div>
              <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
                <MdArrowForward />
              </div>
            </div>
            <div
              className={` mb-2 mt-2 flex w-full items-center justify-between rounded-2xl border-2 bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none`}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <p
                    className={`text-m font-bold text-navy-700 dark:text-white`}
                  >
                    Title blog personal
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <p
                      className={`text-sm font-medium text-navy-700 dark:text-white`}
                    >
                      Comment
                    </p>
                  </div>
                </div>
              </div>
              <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
                <MdArrowForward />
              </div>
            </div>
            <div
              className={` mb-2 mt-2 flex w-full items-center justify-between rounded-2xl border-2 bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none`}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <p
                    className={`text-m font-bold text-navy-700 dark:text-white`}
                  >
                    Title blog personal
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <p
                      className={`text-sm font-medium text-navy-700 dark:text-white`}
                    >
                      Comment
                    </p>
                  </div>
                </div>
              </div>
              <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
                <MdArrowForward />
              </div>
            </div>
            <div
              className={` mb-2 mt-2 flex w-full items-center justify-between rounded-2xl border-2 bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none`}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <p
                    className={`text-m font-bold text-navy-700 dark:text-white`}
                  >
                    Title blog personal
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <p
                      className={`text-sm font-medium text-navy-700 dark:text-white`}
                    >
                      Comment
                    </p>
                  </div>
                </div>
              </div>
              <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
                <MdArrowForward />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Forum;

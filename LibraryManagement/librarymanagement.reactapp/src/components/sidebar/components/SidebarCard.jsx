import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import jwt from "jwt-decode";
import Alert from "components/alert";
import Swal from "sweetalert2";
import userAPI from "api/userApi";
import image1 from "assets/img/profile/image1.png";
const FreeCard = () => {
  const navigate = useNavigate();
  const userLogin = jwt(window.localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const user = await userAPI.GetUserById(userLogin.id);
      setUser(user);
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log-out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        window.localStorage.removeItem("token");
        Alert.showSuccessAlert("You have been log-outed sucessfully!");
        navigate(`/auth/sign-in`);
      }
    });
  };
  return (
    <div className="relative mt-[60px] flex w-[256px] justify-center rounded-[20px] bg-gradient-to-br from-[#0891b2] via-[#0e7490] to-cyan-500 pb-4">
      <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-b from-[#868CFF] to-brand-500 dark:!border-navy-800">
        <img
          className="h-full w-full rounded-full"
          src={user?.avatar}
          alt="user avatar"
        />
      </div>

      <div className="mt-16 flex h-fit flex-col items-center">
        <p className="text-lg font-bold text-white">👋 Hey, {user?.name}</p>
        <a
          onClick={() => handleLogout()}
          className="text-medium mt-7 block cursor-pointer rounded-full bg-gradient-to-b from-white/50 to-white/10 px-11 py-[12px] text-center text-base text-white hover:bg-gradient-to-b hover:from-white/40 hover:to-white/5 "
        >
          Log out
        </a>
      </div>
    </div>
  );
};

export default FreeCard;

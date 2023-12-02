import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import accountApi from "api/accountApi";
import jwt from "jwt-decode";
import Alert from "components/alert";
import Swal from "sweetalert2";

export default function SignIn() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const navigate = useNavigate();

  async function registerAccount(e) {
    e.preventDefault();
    const request = { email, password, confirmPassword, phoneNumber, name };

    Swal.fire({
      title: "Are you sure?",
      text: "You should recheck your information before register!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I checked it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await accountApi.RegisterAccount(request).then(async (res) => {
          if (res.statusCode === 200) {
            Alert.showSuccessAlert("Register account sucessfully!");
            navigate("/auth/sign-in");
          } else {
            Alert.showErrorAlert(
              "Oops, something went wrong! Please recheck your information."
            );
          }
        });
      }
    });
  }

  return (
    <div className="mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Register
        </h4>
        <p className="mb-10 ml-1 text-base text-gray-600">
          Enter your information to register!
        </p>
        <form onSubmit={(e) => registerAccount(e)}>
          {/* Email */}
          <InputField
            variant="auth"
            extra="mb-2"
            label="Name*"
            placeholder="Jonh Nguyen"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            variant="auth"
            extra="mb-2"
            label="Email*"
            placeholder="mail@simmmple.com"
            id="email"
            type="text"
            value={email}
            onChange={(e) => setUsername(e.target.value)}
          />

          <InputField
            variant="auth"
            extra="mb-2"
            label="Phone number*"
            placeholder="0123456789"
            id="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-2"
            label="Password*"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            variant="auth"
            extra="mb-2"
            label="Confirm Password*"
            placeholder="Min. 8 characters"
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            Register
          </button>
          <div className="mt-4 flex items-center justify-center">
            <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
              Had an account?
            </span>
            <Link
              to={"/auth/sign-in"}
              className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            >
              Log-in now!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

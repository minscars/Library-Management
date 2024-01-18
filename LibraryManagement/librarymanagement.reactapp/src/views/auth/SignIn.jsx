import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import accountApi from "api/accountApi";
import jwt from "jwt-decode";
import Alert from "components/alert";
import Loader from "components/loader";
export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userlogin, setUsser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  async function login(e) {
    setIsLoading(true);
    e.preventDefault();
    const request = { username, password };

    await accountApi
      .login(request)
      .then((response) => {
        if (response.statusCode === 200) {
          window.localStorage.setItem("token", response.data);
          var token = window.localStorage.getItem("token");
          const user = jwt(token);
          if (user) {
            setIsLoading(false);
            Alert.showSuccessAlert(
              response.message,
              () =>
                (window.location.href =
                  user.roles === "User" ? "/user" : "/admin")
            );
          }
        } else {
          Alert.showErrorAlert(response.message);
        }
      })
      .catch(() => {
        Alert.showErrorAlert(
          "Oops, something went wrong! Please contact administrator."
        );
      });
  }

  return (
    <>
      {isLoading && <Loader />}
      <div className="mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
        {/* Sign in section */}
        <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Sign In
          </h4>
          <p className="mb-10 ml-1 text-base text-gray-600">
            Enter your email and password to sign in!
          </p>
          <form onSubmit={(e) => login(e)}>
            {/* Email */}
            <InputField
              variant="auth"
              extra="mb-4"
              label="Email*"
              placeholder="mail@simmmple.com"
              id="email"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* Password */}
            <InputField
              variant="auth"
              extra="mb-4"
              label="Password*"
              placeholder="Min. 8 characters"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Checkbox */}
            <div className="mb-10 mt-4 px-2">
              <a
                className="float-right text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                href=" "
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              Sign In
            </button>
            <div className="mt-4 flex items-center justify-center">
              <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                Not registered yet?
              </span>
              <Link
                to={"/auth/register"}
                className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              >
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

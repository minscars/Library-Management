import { useEffect, useState } from "react";
import Logo from "components/loader/LibraryManagement.png";

const Loader = ({ className, isOpen = true }) => {
  let circleCommonClasses =
    "h-3 w-3 bg-gradient-to-br from-green-300 to-green-600 shadow-md rounded-full";
  const [isEnding, setIsEnding] = useState(false);
  useEffect(() => {
    return () => {
      setIsEnding(true);
    };
  }, []);
  return (
    isOpen && (
      <>
        <div
          className={
            "animate-fadeIn transition-base dark:bg-dark-secondary fixed z-50 flex h-screen w-screen flex-col items-center justify-center bg-white pr-[200px]" +
            (isEnding ? " hidden" : "") +
            (" " + className ?? "")
          }
        >
          <img src={Logo} className="mb-10 h-20 w-20" alt="logo" />
          <div className="flex-center transition-base">
            <div className={`${circleCommonClasses} mr-3 animate-bounce`}></div>
            <div
              className={`${circleCommonClasses} animate-bounce200 mr-3`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
          </div>
        </div>
      </>
    )
  );
};

export default Loader;

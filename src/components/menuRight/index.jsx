import { FiHome } from "react-icons/fi";
import { FaRegFileCode } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { useTime } from "../../hook";
import { FaSun } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { Darkmod } from "../commons";
const MenuRight = () => {
  const [activeLink, setActiveLink] = useState(false);
  const [activeDarkMode, setActiveDarkMode] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setActiveDarkMode(true);
    }
  }, []);
  const handleClickDarkMode = () => {
    setActiveDarkMode(!activeDarkMode);
    if (activeDarkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  const handleClose = () => setActiveLink(false);
  const { hours, minutes, seconds } = useTime();
  return (
    <div
      className="bg-white dark:bg-[#1e2329] lg:h-screen w-screen h-[70px] fixed bottom-0 right-0 left-0 lg:left-auto lg:top-0 lg:w-[100px] lg:mr-10"
      data-aos="fade-left"
    >
      {/* Dark mode */}
      <div className="mt-10 hidden  lg:flex items-center justify-center">
        <Darkmod></Darkmod>
      </div>
      <div className="mt-10 hidden font-bold  dark:text-white  lg:flex items-center justify-center">
        <div>
          {hours} : {minutes <= 9 ? "0" + minutes : minutes} :{" "}
          {seconds <= 9 ? "0" + seconds : seconds}
        </div>
      </div>
      {/* Menu */}
      <div className="lg:mt-10 mt-3 pb-3 lg:pb-0 flex justify-center absolute top-0 left-0 right-0 bottom-0 items-center">
        <ul className="flex  lg:flex-col flex-row justify-center items-center gap-7 ">
          <li className="">
            <Link
              spy={true}
              activeClass="!bg-yellow-500 !text-white"
              to="home"
              smooth={true}
              duration={500}
              onClick={handleClose}
              className={`cursor-pointer text-black flex justify-center items-center  w-10 h-10 bg-gray-200 rounded-full`}
            >
              <FiHome color="parent"></FiHome>
            </Link>
          </li>
          <li className="rounded-full flex justify-center items-center w-10 h-10 bg-yellow-500">
            <Link
              spy={true}
              activeClass="!bg-yellow-500 !text-white"
              to="work"
              smooth={true}
              duration={500}
              onClick={handleClose}
              className={`cursor-pointer text-black flex justify-center items-center  w-10 h-10 bg-gray-200 rounded-full`}
            >
              <FaRegFileCode color="parent"></FaRegFileCode>
            </Link>
          </li>
          <li className="rounded-full flex justify-center items-center w-10 h-10 bg-yellow-500">
            <Link
              spy={true}
              activeClass="!bg-yellow-500 !text-white"
              to="education"
              smooth={true}
              duration={500}
              onClick={handleClose}
              className={`cursor-pointer text-black flex justify-center items-center  w-10 h-10 bg-gray-200 rounded-full`}
            >
              <PiStudentBold color="parent"></PiStudentBold>
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default MenuRight;

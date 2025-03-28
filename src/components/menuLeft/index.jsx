import avatar from "../../assets/images/avatar.jpg";
import icon1 from "../../assets/Icons.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaDownload,
} from "react-icons/fa";
import Rangle from "../commons/Rangle";
import { DataInfo } from "../../assets/data/info";
import { Link } from "react-router-dom";
const MenuLeft = () => {
 
  return (
    <div
      data-aos="fade-right"
      className="bg-white dark:bg-[#1e2329] shadow-lg lg:w-[270px] overflow-y-auto px-3 mb-20 lg:mb-0 lg:h-screen lg:fixed"
    >
      {/* avatar */}
      <div className="flex justify-center mt-5">
        <img className="w-24 h-24 shadow-lg rounded-full object-cover" src={avatar} alt="" />
      </div>
      {/* name and link profile */}
      <div className="flex justify-center my-5">
        <div>
          <h2 className="text-center text-xl capitalize  dark:text-white font-semibold ">
            {DataInfo.name}
          </h2>
          <p className="text-[#767676] text-center mt-2 text-[14px] font-normal">
            Web Developer
          </p>
          <div className="mt-5">
            <ul className="flex justify-between gap-5 items-center">
              <li className="rounded-full flex justify-center items-center w-7 h-7 bg-yellow-500 text-white">
                <Link to={DataInfo.facebook}>
                  <FaFacebookF />
                </Link>
              </li>
              <li className="rounded-full flex justify-center items-center w-7 h-7 bg-yellow-500 text-white">
                <Link to={DataInfo.facebook} href="">
                  <FaInstagram />
                </Link>
              </li>
              <li className="rounded-full flex justify-center items-center w-7 h-7 bg-yellow-500 text-white">
                <Link to={DataInfo.github} href="">
                  <FaGithub />
                </Link>
              </li>
              <li className="rounded-full flex justify-center items-center w-7 h-7 bg-yellow-500 text-white">
                <Link to={DataInfo.youtube} href="">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      {/* my infomation  */}
      <div className=" my-5">
        <div className="flex dark:text-white mb-3 justify-between items-center">
          <p className="w-max rounded-sm text-sm  px-2">Birthday: </p>
          <p className="">{DataInfo.birthday}</p>
        </div>
        <div className="flex dark:text-white mb-3 justify-between items-center">
          <p className="w-max rounded-sm text-sm  px-2">Phone: </p>
          <p className=" text-sm">{DataInfo.phone}</p>
        </div>
        {/* <div className="flex dark:text-white mb-3 justify-between items-center">
          <p className="w-max rounded-sm text-sm  px-2">Freelance: </p>
          <p className=" text-green-500 text-sm">Avaliable</p>
        </div> */}
        <div className="flex dark:text-white mb-3 justify-between items-center">
          <p className="w-max rounded-sm text-sm  px-2">Address: </p>
          <p className=" text-sm">{DataInfo.location} </p>
        </div>
      </div>
      {/* My Languages */}
      <hr />
      <div className="my-5">
        <h2 className="font-semibold dark:text-white">Languages</h2>
        {DataInfo.languages.map((item, index) => (
          <Rangle key={index} title={item.name} content={item.content}></Rangle>
        ))}
      </div>
      <hr />
      {/* Skills */}
      <div className="my-5 dark:text-white">
        <h2 className="font-semibold">Skills</h2>
        {
          DataInfo.skills.map((item, index) => (
            <Rangle key={index} title={item.name} percent={item.content}></Rangle>
          ))
        }
      </div>
      <hr />
      {/* Extra Skills */}
      <div className="my-5">
        <h2 className="font-semibold dark:text-white">Extra Skills</h2>
        <div className="flex my-3   items-center gap-2">
          <img src={icon1} alt="" />
          <div className="text-sm text-gray-500">
            <p>Bootstrap, Tailwind , Sass/Scss </p>
          </div>
        </div>
        
        <div className="flex my-3   items-center gap-2">
          <img src={icon1} alt="" />
          <div className="text-sm text-gray-500">
            <p>Git, Github </p>
          </div>
        </div>
      </div>
      {/* Download cv */}
      <hr />
      <div className="my-5 flex justify-center">
        <a
         href="/cv.pdf" download='/cv.pdf'
          className="flex items-center gap-2 text-white bg-yellow-500 px-5 py-2 rounded-md hover:shadow-2xl hover:bg-yellow-400"
        >
          Download CV <FaDownload></FaDownload>
        </a>
      </div>
    </div>
  );
};

export default MenuLeft;

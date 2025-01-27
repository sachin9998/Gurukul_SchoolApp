import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { NavLink } from "react-router-dom";

function SideBar() {
  const activeLinkStyle =
    "h-[57px] w-[320px] bg-pink-500 flex gap-2 items-center font-lg font-semibold pl-5 text-white";

  // const activeLinkStyle =
  //   "relative text-blue-500 after:absolute after:h-full after:w-[8px] after:bg-gradient-to-b after:from-pink-start after:to-pink-end after:content-['']  h-[57px] w-[320px]  flex items-center justify-start bg-secondary-userPage_bg inline-block bg-gradient-to-r from-pink-start to-pink-end bg-clip-text font-semibold text-transparent"; 

  const listStyle = "h-[57px] w-[320px] flex items-center";

  return (
    <aside className="sidebar border-1 h-full w-[320px] overflow-x-hidden rounded bg-white pt-4 text-primary-strong_gray box-shadow1">
      <h2 className="text-xl p-5 font-semibold">Menu List</h2>

      <ul className="">
        {/* <li className={listStyle}>
          <NavLink className="font-lg font-semibold ">
            <span className="ml-5 font-bold !text-xl !pl-[-5rem]">Menu</span>
          </NavLink>
        </li> */}

        <li className={listStyle}>
          <NavLink
            to="/admin/class"
            className={({ isActive }) =>
              isActive
                ? activeLinkStyle
                : "flex gap-2 pl-5 items-center font-lg font-semibold text-secondary-nav_inactive_color"
            }
          >
            <SiGoogleclassroom size={20} />
            <span className="">Class</span>
          </NavLink>
        </li>

        <li className={listStyle}>
          <NavLink
            to="/admin/teacher"
            className={({ isActive }) =>
              isActive
                ? activeLinkStyle
                : "flex gap-2 pl-5 items-center font-lg font-semibold text-secondary-nav_inactive_color"
            }
          >
            <FaChalkboardTeacher size={20} />
            <span className="">Teacher</span>
          </NavLink>
        </li>

        <li className={listStyle}>
          <NavLink
            to="/admin/student"
            className={({ isActive }) =>
              isActive
                ? activeLinkStyle
                : "flex gap-2 pl-5 items-center font-lg font-semibold text-secondary-nav_inactive_color"
            }
          >
            <PiStudentFill size={20} />
            <span className="">Student</span>
          </NavLink>
        </li>

        <li className={listStyle}>
          <NavLink
            to="/admin/finance"
            className={({ isActive }) =>
              isActive
                ? activeLinkStyle
                : "flex gap-2 pl-5 items-center font-lg font-semibold text-secondary-nav_inactive_color"
            }
          >
            <RiMoneyRupeeCircleLine size={20}/>
            <span className="">Finance Reports</span>
          </NavLink>
        </li>

      </ul>
    </aside>
  );
}

export default SideBar;

import { GrUserAdmin } from "react-icons/gr";
import { Link, Outlet, useLocation } from "react-router-dom";
import useDeviceWidth from "../hooks/useDevicWidth";

function AuthLayout() {
  const location = useLocation();
  //   custom hook to check the device innerwidth
  const isMobile = useDeviceWidth(768);

  // determine the margin bottom
  const isSignupDesktop = location.pathname.includes("signup") && !isMobile;

  const showAnimatedmages = false;
  // (location.pathname.includes("/") || location.pathname.includes("otp")) &&
  // isMobile;

  return (
    <div className="mx-auto  flex  h-screen  w-screen  items-center justify-center   bg-black opacity-65 md:gap-x-[2rem] md:bg-transparent md:pr-2 md:opacity-100 xl:gap-x-[0rem]">
      <div
        className="flex h-screen min-h-screen w-screen max-w-full items-center  justify-center overflow-y-auto  md:gap-x-[1rem]"
        style={showAnimatedmages ? { backgroundColor: "white" } : {}}
      >
        <div className=" mx-auto flex h-full w-full flex-col items-center  justify-start overflow-y-auto">
          <div className=" mt-[1vh] flex flex-col items-center justify-start md:justify-center">
            <div
              className=" mt-[1dvh] flex  h-full w-full md:mt-0  justify-center items-center"
              style={
                isSignupDesktop
                  ? { marginBottom: "1vh" }
                  : showAnimatedmages
                  ? { marginTop: "2vh", marginBottom: "1vh" }
                  : { marginBottom: "0vh" }
              }
            >
              <Link to="/">
                <img
                  src="/logo.svg"
                  alt="logo"
                  className="w-full h-[85px] md:h-[100px]"
                />
              </Link>
            </div>

            <div className="mb-4 pb-1 px-2">
              <Link
                to="/admin"
                className="flex w-full items-center justify-center  cursor-pointer font-semibold gap-2 text-lg"
              >
                <GrUserAdmin />
                <span className="underline">Admin Dashboard</span>
              </Link>
            </div>

            <h1
              className="text-xl font-bold text-white  md:mb-[1vh] md:w-[425px] md:text-1xl  md:text-primary-medium_gray xl:w-[590px] xl:text-3xl text-center border-[1px] p-2 rounded border-gray-400"
              style={showAnimatedmages ? { color: "#171717" } : {}}
            >
              Welcome to <span className="text-red-500">GURUKUL</span><span> School</span>
            </h1>
          </div>

          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;

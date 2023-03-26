import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";


const Navbar = () => {
      const router = useRouter();
      const [navDrop, setNavDrop] = useState(true);
      const handleNavDrop = () => {
        setNavDrop(!navDrop);
      };


  return (
<div>
     <div className="absolute  z-50 bg-white">
        <div className="h-[50px] z-40 flex bg-white shadow-lg items-center justify-between px-5 md:hidden fixed top-0 w-screen">
          <Link href="/" className="text-2xl text-blue-700">Maths Loyal</Link>
          <div onClick={handleNavDrop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={30}
              height={30}
              viewBox="0 0 30 30"
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
            </svg>
          </div>
        </div>
        <div
          className={` fixed
       h-max py-10 divide-y-[0.5px] px-5 scroll-m-0 bg-white text-center grid grid-cols-1 gap-5  w-screen md:hidden   z-20 shadow-2xl
      ${
        navDrop ? "-translate-y-[150%]" : "translate-y-[0px]"
      } duration-500   `}
        >
          <Link href="/login">
            <div className="text-lg t ">Login</div>
          </Link>

          <Link href="/user/ask">
            <div className="text-lg  ">Ask Doubt</div>
          </Link>
          <Link href="/signup">
            <div className="text-lg  ">Signup</div>
          </Link>

        </div>
      </div>
    <div className=" hidden md:flex w-full  justify-between p-10 border-b-2 border-[#ebf2f7]">
      <Link href="/">
        <div className="text-3xl font-semibold">MATHS LOYAL</div>
      </Link>
      <div className="flex text-lg gap-3">
        <Link href="/user/ask">
          <div className="  px-5 py-1 rounded-full  text-gray-900   font-semibold tracking-wide hover:bg-gray-200 duration-300 ease-in-out cursor-pointer ">
            ASK DOUBT
          </div>
        </Link>
        <Link href="/login">
          <div className="b px-5 py-1 rounded-full text-gray-900 font-semibold tracking-wide hover:bg-gray-200 duration-500 ease-in-out cursor-pointer ">
            LOGIN
          </div>
        </Link>
        <Link href="/signup">
          <div className="b px-5 py-1 rounded-full text-white bg-[#163bf3] font-semibold tracking-wide hover:bg-blue-900 duration-500 ease-in-out cursor-pointer ">
            JOIN NOW{" "}
          </div>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Navbar
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between  w-full  py-5 px-5 xs:px-10 ">
      <div className="flex items-center flex-shrink-0 text-white mr-6 B xs:pt-3  lg:mx-0">
        <span className="font-semibold text-black text-xl xs:text-2xl md:text-3xl flex items-center lg:text-4xl xl:text-5xl tracking-wide   ">
          MATHS LOYAL
        </span>
      </div>

      <div className="flex md:gap-3 md:mr-4 items-center text-[12px] xs:text-[15px] ">
        <Link href="/login">
          <div className=" hidden md:flex items-center  px-5 py-1 rounded-full  text-gray-900   font-semibold tracking-wide hover:bg-gray-400 duration-300 ease-in-out cursor-pointer ">
            LOGIN
          </div>
        </Link>
        <Link href="/signup">
          <div className="b sm:px-5 py-1 items-center rounded-full text-gray-900 font-semibold tracking-wide hover:bg-gray-400 duration-500 ease-in-out cursor-pointer ">
            JOIN NOW{" "}
          </div>
        </Link>
        <Link href="/user/ask">
          <div className="text-gray-800  hidden  bg-white px-3 py-1 font-sans font-semibold tracking-wide rounded-full md:flex items-center  hover:bg-gray-400 duration-500 ease-in-out cursor-pointer">
            Ask Doubt
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar
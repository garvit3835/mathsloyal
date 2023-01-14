import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap  bg-opacity-40 w-screen p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 B pt-8">
        <span className="font-semibold text-black text-5xl tracking-wide  ml-20 ">
          MATHS LOYAL
        </span>
      </div>

      <div className="flex gap-3 mr-10 items-center">
        <Link href="/login">
          <div className="  px-5 py-1 rounded-full  text-gray-900 text-[15px]   font-semibold tracking-wide hover:bg-gray-400 duration-300 ease-in-out cursor-pointer ">
            LOGIN
          </div>
        </Link>
        <Link href="/signup">
          <div className="b px-5 py-1 rounded-full text-gray-900 text-[15px] font-semibold tracking-wide hover:bg-gray-400 duration-500 ease-in-out cursor-pointer ">
            JOIN NOW{" "}
          </div>
        </Link>
        <Link href="/user/ask">
          <div className="text-gray-800 bg-white px-3 py-1 text-[15px] font-sans font-semibold tracking-wide rounded-full flex items-center  hover:bg-gray-400 duration-500 ease-in-out cursor-pointer">
            Ask Doubt
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar
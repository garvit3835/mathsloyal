import Link from "next/link";

const Navbar = () => {
  return (


        <nav className="flex items-center justify-between flex-wrap  bg-opacity-40 w-screen p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6 B pt-8">
            <span className="font-semibold text-black text-5xl tracking-wide  ml-20 ">
              MATHS LOYAL
            </span>
          </div>

          <div className="flex gap-3 mr-10">
            <div className="  px-5 py-1 rounded-full  text-gray-900 text-[15px]   font-semibold tracking-wide hover:bg-gray-400 duration-300 ease-in-out cursor-pointer ">
              LOGIN
            </div>
            <div className="b px-5 py-1 rounded-full text-gray-900 text-[15px] font-semibold tracking-wide hover:bg-gray-500 duration-500 ease-in-out cursor-pointer ">
              JOIN NOW{" "}
            </div>
           <Link href="/user/ask"></Link> <div className="text-gray-800 bg-white px-3 text-[15px] font-sans font-semibold tracking-wide rounded-full flex items-center">
              Ask Doubt
            </div>
          </div>
        </nav>


  );
}

export default Navbar
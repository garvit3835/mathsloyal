import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex w-full  justify-between p-10 border-b-2 border-[#ebf2f7]">
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
  );
}

export default Navbar
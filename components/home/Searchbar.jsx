import React,{useState,useEffect} from "react";
const Searchbar = ({
  showLogin,
  setShowLogin,
}) => {

const [width, setWidth] = useState(750)
useEffect(() => {
  if (typeof window !== "undefined") {
    setWidth(window.innerWidth)
  }
}, [])

  return (
    <div onClick={() => setShowLogin("login")}>
      <div className=" relative items-center flex justify-center  lg:mr-10">
        <input
          type="text"
          placeholder={`${width > 700 ? "Struggling with a doubt?":"Doubt?"} Ask here`}
          // value="ask what you want"
          disabled
          className="w-full h-[45px] xs:h-[57px] xs-max:h-[61px] sm:h-[60px] md:h-[75px] lg:h-[90px] xl:h-[100px]  rounded-[60px] px-3 sm:px-4 md:px-6 text-lg lg:text-xl bg-gray-50 focus:bg-gray-200"
        />
        <button className="bg-black text-white right-3 hidden sm:block absolute p-3 xl:scale-125  xl:right-6 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={30}
            className="fill-current text-white"
            height={30}
            viewBox="0 0 50 50"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
          </svg>
        </button>
        <button className="bg-[#242f40] text-white sm:hidden right-2 xs-max:right-3 absolute p-2 rounded-full   ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={20}
            className="fill-current text-white"
            height={20}
            viewBox="0 0 50 50"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Searchbar
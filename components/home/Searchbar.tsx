
const Searchbar = ({ showLogin, setShowLogin }) => {
  return (
    <div onClick={() => setShowLogin("login")}>
      <div className="w-[80vw]  sm:w-[460px] md:w-[600px] lg:w-[500px]  xl:w-[580px] 2xl:w-[740px] relative items-center flex justify-center  lg:mx-10">
        <input
          type="text"
          placeholder="ask what you want"
          // value="ask what you want"
          disabled
          className="w-full h-[45px] xs:h-[57px] xs-max:h-[61px] sm:h-[60px] md:h-[80px] lg:h-[99px] 2xl:h-[110px] rounded-[60px] px-4 md:px-10 text-xl bg-gray-50 focus:bg-gray-200"
        />
        <button className="bg-[#242f40] text-white right-5 absolute px-5 h-[15px] xs:h-[37px] xs-max:h-[41px] sm:h-[44px] md:h-[50px] lg:h-[61px] 2xl:h-[70px] rounded-[30px]">
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar
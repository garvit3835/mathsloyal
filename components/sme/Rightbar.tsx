import Image from "next/image";
const Rightbar = () => {
  return (
    <div
      className={`hidden relative lg:flex w-[260px] bg-white shadow-2xl h-screen  right-0  top-0 p-2`}
    >
      <div className="w-full flex justify-center">
        <div className="mt-5 mx-auto ">
          <div className="flex gap-3 items-center">
            <div className="text-2xl font-semibold font-mono text-blue-500">
              Mathsloyal
            </div>
          </div>
          <div className="mt-10 mb-4 text-xs text-gray-600">
            Status of upcoming question
          </div>
          <div w-full>
            <div className="text-6xl px-4 bg-vio bg-violet-600 rounded-full w-max mx-auto">
              J
            </div>
            <div>
              <Image
                src="https://gt2.sgp1.digitaloceanspaces.com/optimized/1X/b63c2df59f616465c9cec1546539ffb3c574dd2e_2_690x211.JPG"
                width={500}
                height={500}
                className="w-[260px] mt-2 object-contain bg-gray-100 border px-1 rounded-md mx-auto"
                alt="logo"
              />
              <p className="text-xs text-gray-500 mt-1">
                view in bigger size {">"}
              </p>
            </div>
            <div className="mt-3 flex justify-center mx-auto">
              <button className="px-2 bg-green-400 hover:bg-green-500 rounded-md  mx-2 text-xl ">
                Accept
              </button>
              <button className="px-5 bg-red-400 hover:bg-red-500 rounded-md  mx-2 text-xl">
                Pass
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;

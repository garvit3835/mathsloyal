
const ProfilePreview = () => {
  return (
    <div className="flex border bg-white rounded-2xl p-3 sm:p-4 md:p-8 m-5 shadow-lg  ">
      <div className="w-2/5 items-center flex justify-center">
        <div>
          <div className="bg-violet-500 rounded-full scale-110 w-max px-5 py-1 text-white text-6xl font-semibold mx-auto">
            J
          </div>
          <div className="text-xl md:text-2xl font-semibold mt-2  w-max mx-auto">Junaid</div>
        </div>
      </div>

      <div className="w-3/5 ">
        <div className="grid grid-cols-2 w-full mb-4">
          <div className="">
            <div className="text-[10px] text-gray-600">Standard</div>
            <div className="md:text-lg font-semibold">12th</div>
          </div>
          <div className="">
            <div className="text-[10px]">Board</div>
            <div className="md:text-lg font-semibold">CBSE</div>
          </div>
        </div>
         <div className="grid grid-cols-2 w-full">
        <div className="">
          <div className="text-[10px]">Target</div>
          <div className="md:text-lg font-semibold">JEE MAINS</div>
        </div>
        <div className="">
          <div className="text-[10px]">Subscription</div>
          <div className="md:text-lg font-semibold">
            Premium
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePreview
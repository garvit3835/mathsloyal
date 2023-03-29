
const ProfilePreview = ({ student }) => {
  return (
    <div className="flex border bg-white rounded-2xl p-3 sm:p-4 md:p-6 m-5 shadow-lg  ">
      <div className="w-2/5 items-center flex justify-center">
        <div className="text-center flex flex-col justify-center">
          <div className="bg-violet-500 rounded-full scale-110 w-[60px] h-[60px] md:w-[80px] md:h-[80px]  text-white text-6xl flex text-center justify-center items-center  mx-auto font-semibold ">
            {student?.user?.name[0].toUpperCase()}
          </div>
          <div className="text-xl md:text-xl text-center w-full px-2 font-semibold mt-2   mx-auto">{student?.user?.name}</div>
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
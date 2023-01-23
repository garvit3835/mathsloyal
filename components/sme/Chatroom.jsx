import ChatBox from "./ChatBox";
import Image from "next/image";

const Chatroom = () => {
  return (
    <div className="  h-[90vh] md:h-screen w-full transition-width flex flex-col overflow-y-hidden  overflow-hidden i flex-1 pt-10">
      <div className=" w-full    overflow-y-scroll h-full d">
        <div className=" w-full     ">
          <div className="flex justify-start w-full  ">
            <div className="text-4xl h-max mx-2 bg-violet-600 w-max px-3  rounded-full">
              J
            </div>
            <Image
              src="https://gt2.sgp1.digitaloceanspaces.com/optimized/1X/b63c2df59f616465c9cec1546539ffb3c574dd2e_2_690x211.JPG"
              width={500}
              height={500}
              className="w-full md:max-w-[50%] h-auto object-contain bg-gray-100 border px-1 rounded-md"
              alt="logo"
            />
          </div>
          <div className="w- mt-10 text-gray-800  group bg-gray-d flex justify-end">
            <Image
              src="https://gt2.sgp1.digitaloceanspaces.com/optimized/1X/870290aafeac5605fa96ceecac6fdac27101bd44_2_375x500.jpg"
              width={500}
              height={500}
              className="w-full h-auto md:max-w-[50%]  object-contain bg-gray-100 border px-1 rounded-md"
              alt="logo"
            />
            <div className="text-4xl h-max mx-2 bg-green-600 w-max px-2  rounded-full">
              B
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t md:border-t-0    ">
        <ChatBox />
      </div>
    </div>
  );
};

export default Chatroom;

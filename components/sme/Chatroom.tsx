import ChatBox from "./ChatBox";
import Image from "next/image";

const Chatroom = () => {
  return (
    <main className=" top-0 h-screen  w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
      <div className="flex-1 overflow-hidden h-full dark:bg-gray-800">
        <div className="flex flex-col items-center  text-sm h-full dark:bg-gray-800">
          <div className="w-full mt-14  text-gray-800 dark:text-gray-100 group dark:bg-gray-800 flex">
            <div className="text-4xl h-max mx-2 bg-violet-600 w-max px-3  rounded-full">
              J
            </div>
            <Image
              src="https://gt2.sgp1.digitaloceanspaces.com/optimized/1X/b63c2df59f616465c9cec1546539ffb3c574dd2e_2_690x211.JPG"
              width={500}
              height={500}
              className="w-88 h-48 object-contain bg-gray-100 border px-1 rounded-md"
              alt="logo"
            />
          </div>
          <div className="w- mt-10 text-gray-800  group bg-gray-d flex">
            <Image
              src="https://gt2.sgp1.digitaloceanspaces.com/optimized/1X/870290aafeac5605fa96ceecac6fdac27101bd44_2_375x500.jpg"
              width={500}
              height={500}
              className="h-[300px] object- bg-gray-100 border px-1 rounded-md"
              alt="logo"
            />
            <div className="text-4xl h-max mx-2 bg-green-600 w-max px-2  rounded-full">
              B
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient">
        <ChatBox />
      </div>
    </main>
  );
};

export default Chatroom;

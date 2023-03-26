import ChatBox from "./ChatBox";
import Image from "next/image";
import { useState } from "react";


const Chatroom = ({chat}) => {

  return (
    <div className="  h-[98vh]  w-full transition-width flex flex-col overflow-y-hidden  overflow-hidden i flex-1">
      <div className=" w-full    overflow-y-scroll h-full d">
        <div className=" w-full     ">
         {
        chat.length != 0 &&  chat.map((item, index) => (
            <div className={`flex ${item?.role==="user"?"justify-end":""} w-full  `} key={index}>
              <div className={` mt-14 text-gray-800 dark:text-gray-100   flex ${item?.role !== "user" ? "flex-row-reverse":""}  w-max justify-start`}>
              {
                item?.message.indexOf("digital") > 0 && <img src={item?.message}
                  className="w-[60vw] max-w-[500px] h-auto object-contain bg-gray-100 border px-1 rounded-md"
                  alt="logo"
                />}
                {
                  item?.message.indexOf("digital")==-1 && <p
                  className="w-max px-5 max-w-[500px] h-auto object-contain bg-gray-50 border text-start flex items-center  rounded-md " 
                  >
                  {item?.message}
                  </p>
                }
                <div className="text-4xl h-max mx-2 bg-violet-600 w-max px-4  rounded-full">
                  {item?.name[0]}
                </div>
              </div>
            </div>
          ))
         }
          {/* <div className="w-full mt-10 text-gray-800  group bg-gray-d flex">
            <div className="text-4xl h-max mx-2 bg-green-600 w-max px-2  rounded-full">
              B
            </div>{" "}
            <Image
              src="https://gt2.sgp1.digitaloceanspaces.com/optimized/1X/870290aafeac5605fa96ceecac6fdac27101bd44_2_375x500.jpg"
              width={500}
              height={500}
              className="w-full h-auto max-w-[50%]  object-contain bg-gray-100 border px-1 rounded-md"
              alt="logo"
            />
          </div> */}
        </div>
      </div>
      <div className="w-full border-t md:border-t-0    ">
        <ChatBox />
      </div>
    </div>
  );
}

export default Chatroom
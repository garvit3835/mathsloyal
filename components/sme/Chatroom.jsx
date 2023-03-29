import ChatBox from "./ChatBox";
import Image from "next/image";
import SolutionBox from "./SolutionBox";
import { useEffect, useState } from "react";

const Chatroom = ({ chat, Question, tutor, setImage ,Image}) => {
  console.log(Question);
  const [solution, setSolution] = useState({})
  const getSolu = () => {
    fetch("/api/solution/getSolution", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        issueId: Question?._id,
      }),
    })
      .then(res => res.json())
      .then(data => setSolution(data))
      .catch(error => console.log(error));
  };
  useEffect(() => {
    getSolu()
  }, [Question])
  console.log(solution)

  return (
    <div className="  h-[98vh] md:h-screen w-full transition-width flex flex-col overflow-y-hidden  overflow-hidden i flex-1 pt-10">
      <div className=" w-full    overflow-y-scroll h-full d">
        <div className=" w-full     ">
          {/* <div className="flex justify-start w-full  ">
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
          </div> */}
          {/* {
            chat.length != 0 && chat.map((item, index) => (
              <div className={`flex ${item?.role === "sme" ? "justify-end" : "justify-start"} w-full  `} key={index}>
                <div className={` mt-14 text-gray-800 dark:text-gray-100   flex ${item?.role !== "sme" ? "flex-row-reverse" : ""}  w-max justify-start`}>
                  {
                    item?.message.indexOf("digital") > 0 && <img src={item?.message}
                      className="w-[60vw] max-w-[500px] h-auto object-contain bg-gray-100 border px-1 rounded-md"
                      alt="logo"
                    />}
                  {
                    item?.message.indexOf("digital") == -1 && <p
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
          } */}
          {
            Question?.image && <div className={`flex  justify-start w-full `} >
              <div className={` mt-14 text-gray-800 dark:text-gray-100   flex   w-max justify-start`}>
                <div className="text-4xl h-max mx-2 bg-violet-600 w-max px-4  rounded-full">
                  {/* {tutor?.user.name[0].toUpperCase()} */}
                  J
                </div>
                {
                  Question?.image && <img src={Question?.image}
                    className="w-[60vw] max-w-[500px] h-auto object-contain bg-gray-100 border px-1 rounded-md"
                    alt="logo"
                    onClick={() => {
                      setImage(Question?.image)
                    }}
                  />}
              
              </div>

            </div>}
          {Question?.message && <div className={`flex justify-start w-full `} >
            <div className={`mt-5  md:mt-10 xl:mt-14 text-gray-800 dark:text-gray-100   flex   w-max justify-start`}>
              <div className="text-4xl h-max mx-2 bg-violet-600 w-max px-4  rounded-full">
                {/* {tutor?.user.name[0].toUpperCase()} */}
                J
              </div>
              {
                Question?.message && <p
                  className="w-max px-5 max-w-[500px] h-auto object-contain bg-gray-50 border text-start flex items-center  rounded-md "
                >
                  {Question?.message}
                </p>
              }
            
            </div>

          </div>}
          {
            solution?.image && <div className={`flex  justify-end w-full `} >
              <div className={` mt-14 text-gray-800 dark:text-gray-100   flex   w-max justify-start`}>
                {
                  solution?.image && <img src={solution?.image}
                    className="w-[60vw] max-w-[500px] h-auto object-contain bg-gray-100 border px-1 rounded-md"
                    alt="logo"
                    onClick={() => {
                      setImage(solution?.image)
                    }}
                  />}
                <div className="text-4xl h-max mx-2 bg-violet-600 w-max px-4  rounded-full">
                  {/* {tutor?.user.name[0].toUpperCase()} */}
                  T
                </div>
                
              
              </div>

            </div>}
          {solution?.message && <div className={`flex justify-end w-full `} >
            <div className={`mt-5  md:mt-10 xl:mt-14 text-gray-800 dark:text-gray-100   flex   w-max justify-start`}>
              {
                solution?.message && <p
                  className="w-max px-5 max-w-[500px] h-auto object-contain bg-gray-50 border text-start flex items-center  rounded-md "
                >
                  {solution?.message}
                </p>
              }
              <div className="text-4xl h-max mx-2 bg-violet-600 w-max px-4  rounded-full">
                {/* {tutor?.user.name[0].toUpperCase()} */}
                T
              </div>
            
            
            </div>

          </div>}

        </div>
        <SolutionBox tutor={tutor} Question={Question}/>
      </div>
      <div>
      </div>
      {/* <div className="w-full border-t md:border-t-0    ">
        <ChatBox />
      </div> */}
    </div>
  );
};

export default Chatroom;

import Askdoubt from "../../components/user/Askdoubt";
import Chatroom from "../../components/user/Chatroom";
import Rightbar from "../../components/user/Rightbar";
import Sidebar from "../../components/user/Sidebar";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { Leftbar } from "../../components/user/Leftbar";

const Doubt = ({student}) => {
  const router = useRouter();
  const [Question, setQuestion] = useState({})
  // console.log(student)
  const [chat, setChat] = useState([
    // {
    //   name: "Junaid",
    //   role: "user",
    //   message: "https://gt2.sgp1.digitaloceanspaces.com/optimized/1X/b63c2df59f616465c9cec1546539ffb3c574dd2e_2_690x211.JPG",
    //   time: "12:00",
    // },
    // {
    //   name: "tariq",
    //   role: "sme",
    //   message: "https://gt2.sgp1.digitaloceanspaces.com/optimized/1X/870290aafeac5605fa96ceecac6fdac27101bd44_2_375x500.jpg",
    //   time: "12:00",
    // },
  ]);
  const [ask, setAsk] = useState("hidden");
  const [rightBar, setRightBar] = useState(false)
  const [sideBar, setSideBar] = useState(true)
  const [Questions, setQuestions] = useState([])

  const getIssues = async () => {
    const res = await fetch(
      "/api/issue/findIssues",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId: student?.user?._id,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
    setQuestions(data)
    return data;
  };

  useEffect(() => {
  
    getIssues();

  }, [])

  const right =()=>{
    setRightBar(!rightBar)
  }

  return (
    <div className="bg-white max-w-screen max-h-screen flex  md:py-0 overflow-x-hidden">
      <Leftbar ask={ask} setAsk={setAsk} setChat={setChat} chat={chat} student={student} />
      <Askdoubt ask={ask} setAsk={setAsk} />
      <Sidebar ask={ask} setAsk={setAsk} setChat={setChat} chat={chat} student={student} Question={Question} setQuestion={setQuestion} Questions={Questions} setQuestions={setQuestions} />
      <Chatroom chat={chat} Question={Question} setQuestion={setQuestion} student={student} />

      <div className=" hidden lg:flex relative">
        <div
          className={`absolute ${
            !rightBar ? "left-2 top-2 rotate-180" : "-left-5 top-2 " 
          } z-50 cursor-pointer duration-300 bg-white shadow-xl`}
          onClick={right}
        >
          {"<<"}
        </div>
        <Rightbar rightBar={rightBar} />
      </div>
    </div>
  );
};

export default Doubt;

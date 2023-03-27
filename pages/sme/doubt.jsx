import Chatroom from "../../components/sme/Chatroom";
import Rightbar from "../../components/sme/Rightbar";
import Sidebar from "../../components/sme/Sidebar";
import { Leftbar } from "../../components/sme/Leftbar";
import ViewImage from "../../components/ViewImage";
import React, { useState, useEffect } from "react";

const Doubt = ({tutor}) => {
const [chat, setChat] = useState([])
const [Issue, setIssue] = useState({})
const [Image, setImage] = useState("")
console.log(tutor)
useEffect(() => {
const getIssue = async () => {
  const res = await fetch("/api/issue/getIssue",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tutorId: tutor?.user?._id,
    }),
  }
  );
  const data = await res.json();
  console.log(data);
  setIssue(data);
  // setChat(data);
};
getIssue();
}, [])

  return (
    <div className="bg-white max-w-screen max-h-screen flex py-[50px] md:py-0 overflow-x-hidden">
      <ViewImage Image={Image} setImage={setImage} />

      <Leftbar setChat={setChat} chat={chat} />
      <Sidebar setChat={setChat} chat={chat} />
      <Chatroom chat={chat} />
      <Rightbar Issue={Issue} setIssue={setIssue} tutor={tutor} setImage={setImage} />
    </div>
  );
};

export default Doubt;

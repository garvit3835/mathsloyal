import Chatroom from "../../components/sme/Chatroom";
import Rightbar from "../../components/sme/Rightbar";
import Sidebar from "../../components/sme/Sidebar";
import { Leftbar } from "../../components/sme/Leftbar";
import React, { useState, useEffect } from "react";

const Doubt = () => {
const [chat, setChat] = useState([])
  return (
    <div className="bg-white max-w-screen max-h-screen flex py-[50px] md:py-0 overflow-x-hidden">
      <Leftbar setChat={setChat} chat={chat} />
      <Sidebar setChat={setChat} chat={chat} />
      <Chatroom chat={chat} />
      <Rightbar />
    </div>
  );
};

export default Doubt;

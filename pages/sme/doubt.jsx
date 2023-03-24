import Chatroom from "../../components/sme/Chatroom";
import Rightbar from "../../components/sme/Rightbar";
import Sidebar from "../../components/sme/Sidebar";
import { Leftbar } from "../../components/sme/Leftbar";
import {useState} from 'react'

const index = () => {
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
  return (
    <div className="bg-white max-w-screen max-h-screen flex py-[50px] md:py-0 overflow-x-hidden">
      <Leftbar setChat={setChat} chat={chat} />
      <Sidebar setChat={setChat} chat={chat} />
      <Chatroom chat={chat} />
      <Rightbar />
    </div>
  );
};

export default index;

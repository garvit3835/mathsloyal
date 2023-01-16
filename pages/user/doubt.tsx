import Askdoubt from "../../components/user/Askdoubt";
import Chatroom from "../../components/user/Chatroom";
import Rightbar from "../../components/user/Rightbar";
import Sidebar from "../../components/user/Sidebar";
import { useState } from "react";
import { Leftbar } from "../../components/user/Leftbar";

const Dashboard = () => {
  const [ask, setAsk] = useState("hidden");
  const [rightBar, setRightBar] = useState(true)
  const [sideBar, setSideBar] = useState(true)


  const right =()=>{
    setRightBar(!rightBar)
  }

  return (
    <div className="bg-white max-w-screen max-h-screen flex py-[50px] md:py-0 overflow-x-hidden">
      <Leftbar />
      <Askdoubt ask={ask} setAsk={setAsk} />
      <Sidebar ask={ask} setAsk={setAsk} />
      <Chatroom />

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

export default Dashboard;

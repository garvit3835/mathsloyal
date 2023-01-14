import Askdoubt from "../../components/user/Askdoubt";
import Chatroom from "../../components/user/Chatroom";
import Rightbar from "../../components/user/Rightbar";
import Sidebar from "../../components/user/Sidebar";
import { useState } from "react";
import { Leftbar } from "../../components/user/Leftbar";

const Dashboard = () => {
  const [ask, setAsk] = useState("hidden");

  return (
    <div className="bg-white flex ">
      <Leftbar />
      <Askdoubt ask={ask} setAsk={setAsk} />
      <Sidebar ask={ask} setAsk={setAsk} />
      <Chatroom />
      <Rightbar />
    </div>
  );
};

export default Dashboard;

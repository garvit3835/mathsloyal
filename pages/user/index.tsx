import Askdoubt from "../../components/user/Askdoubt";
import Chatroom from "../../components/user/Chatroom";
import Rightbar from "../../components/user/Rightbar";
import Sidebar from "../../components/user/Sidebar";
import { useState } from "react";

const Dashboard = () => {
	const [ask, setAsk] = useState('hidden')

	return (
    <main className="bg-white flex  overflow-">
      <Askdoubt ask={ask} setAsk={setAsk} />
      <Sidebar ask={ask} setAsk={setAsk} />
      <Chatroom />
      <Rightbar />
    </main>
  );
}

export default Dashboard;

import ChatBox from "../../components/dashboard/ChatBox";
import Chatroom from "../../components/dashboard/Chatroom";
import Rightbar from "../../components/dashboard/Rightbar";
import Sidebar from "../../components/dashboard/Sidebar";

const Dashboard = () => {
	return (
		<main className="bg-white flex  overflow-">
<Sidebar/>
	<Chatroom/>
<Rightbar/>
		</main>
	)
}

export default Dashboard;

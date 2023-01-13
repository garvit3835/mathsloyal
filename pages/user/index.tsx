import Chatroom from "../../components/user/Chatroom";
import Rightbar from "../../components/user/Rightbar";
import Sidebar from "../../components/user/Sidebar";

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

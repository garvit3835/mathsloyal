import Chatroom from "../../components/sme/Chatroom";
import Rightbar from "../../components/sme/Rightbar";
import Sidebar from "../../components/sme/Sidebar";
import { Leftbar } from "../../components/sme/Leftbar";

const index = () => {
  return (
    <main className="bg-white flex  overflow-">
      <Leftbar/>
      <Sidebar />
      <Chatroom />
      <Rightbar />
    </main>
  );
};

export default index;

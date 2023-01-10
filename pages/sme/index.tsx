import Chatroom from "../../components/sme/Chatroom";
import Rightbar from "../../components/sme/Rightbar";
import Sidebar from "../../components/sme/Sidebar";

const index = () => {
  return (
    <main className="bg-white flex  overflow-">
      <Sidebar />
      <Chatroom />
      <Rightbar />
    </main>
  );
};

export default index;

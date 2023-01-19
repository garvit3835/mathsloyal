import Chatroom from "../../components/sme/Chatroom";
import Rightbar from "../../components/sme/Rightbar";
import Sidebar from "../../components/sme/Sidebar";
import { Leftbar } from "../../components/sme/Leftbar";

const index = () => {
  return (
    <div className="bg-white max-w-screen max-h-screen flex py-[50px] md:py-0 overflow-x-hidden">
      <Leftbar />
      <Sidebar />
      <Chatroom />
      <Rightbar />
    </div>
  );
};

export default index;

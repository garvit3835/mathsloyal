
import { useState ,useEffect} from "react";
import { Leftbar } from "../../components/user/Leftbar";
import Status from "../../components/user/dashboard/Status";
import ProfilePreview from "../../components/user/dashboard/ProfilePreview";
import Subscription from "../../components/user/dashboard/Subscription";
import DoubtStatus from "../../components/user/dashboard/DoubtStatus";
import RecentDoubts from "../../components/user/dashboard/RecentDoubts";
import Contact from "../../components/user/dashboard/Contact";
import Askdoubt from "../../components/user/Askdoubt";
import Loading from "../../components/Loading";
import { useRouter } from "next/router";

const Dashboard = ({ student, setStudent }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true)
  const [text, setText] = useState("");


const [contact, setContact] = useState(false);
const [ask, setAsk] = useState("hidden");
console.log(student);
useEffect(() => {
  if(typeof window !== "undefined"){
    // window.location.reload()
    // if(student!==null && student!==undefined){
    //   setIsLoading(false)
    // }
   if(!localStorage.getItem("myuser")){
    router.push("/")
   }else{
    fetch("/api/student/checkStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: JSON.parse(localStorage.getItem("myuser")).token }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudent(data);
        setIsLoading(false)
      });

    // setTimeout(() => {
    //   // window.location.reload()
    //   setIsLoading(false)
    // }, 2000);
   }
  // }else{
  //   setIsLoading(false)
  // }
}
}, [])
console.log(student)
  return (
    <div className="bg-gray-50 flex ">
      <Askdoubt ask={ask} setAsk={setAsk} student={student} text={text} setText={setText} />
      {isLoading && <Loading/>}
      <Leftbar ask={ask} setAsk={setAsk} setStudent={setStudent}/>
      {/* <Askdoubt ask={ask} setAsk={setAsk} />
      <Sidebar ask={ask} setAsk={setAsk} />
      <Chatroom />
      <Rightbar /> */}
      <div className="w-full xl:w-4/5 mx-auto pt-10 h-screen overflow-y-scroll">
        <div className="text-3xl font-semibold m-6">
          Hey,
          <span className="text-blue-500 px-2">{student?.user?.name}</span>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="">
            <ProfilePreview student={student}/>

            <Subscription />
            <DoubtStatus />

            <RecentDoubts />
          </div>
          <div className="flex flex-col">
            <Status />
            {contact ? (
              <Contact setContact={setContact}/>
            ) : (
              <div className="flex">
                <div
                  className="
                w-3/5 border m-2 ml-5 md:m-5 p-4 rounded-lg bg-white  shadow-sm
                "
                >
                  <div className="flex flex-col gap-2 text-gray-700 text-sm ">
                    <div className="text-gray-500 text-sm mt-3">
                      Got a New Doubt?
                    </div>
                  </div>
                  <div
                    className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-300 bg-gray-100 transition-colors duration-200 text-gray-700 cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20 shadow-sm"
                    onClick={() => {
                      setAsk("");
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1={12} y1={5} x2={12} y2={19} />
                      <line x1={5} y1={12} x2={19} y2={12} />
                    </svg>
                    Ask Here
                  </div>
                </div>

                <div className=" w-2/5 text-center bg-white rounded-lg   p-1 py-2 border border-red-100 shadow-sm m-2 mr-5 md:m-5 ">
                  <div className="flex flex-col gap-2 text-gray-700 text-sm ">
                    facing issue / have suggestion
                  </div>
                  <div>
                    <button
                      onClick={() => setContact(true)}
                      className="text-lg my-2 font-base  border p-1  rounded-lg duration-300 bg-gray-100 hover:bg-gray-200 "
                    >
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

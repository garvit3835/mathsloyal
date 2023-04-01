import Image from "next/image";
import ViewImage from "./../ViewImage";
import { useRouter } from "next/router";

const Rightbar = ({ Issue,tutor,setImage }) => {
  const router = useRouter();

  const AssignIssue=async(id)=>{
    const res = await fetch("/api/issue/assignIssue",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        issueId: Issue?._id,
        tutorId: tutor?.user?._id,
      }),
    }
    );
    const data = await res.json();
    console.log(data);
    router.push("/sme/doubt?question="+Issue?._id)

  }
  return (
    <div
      className={`hidden relative lg:flex w-[260px] bg-white shadow-2xl h-screen  right-0  top-0 p-2`}
    >
      <div className="w-full flex justify-center">
        <div className="mt-5 mx-auto ">
          <div className="flex gap-3 items-center">
            <div className="text-2xl font-semibold font-mono text-blue-500">
              Mathsloyal
            </div>
          </div>
          <div className="mt-10 mb-4 text-xs text-gray-600">
            Status of upcoming question
          </div>
     {Issue?.message &&     <div >
            <div className="text-6xl px-4 bg-vio bg-violet-600 rounded-full w-max mx-auto">
              J
            </div>
            {Issue?.image &&<div>
              <Image
                src={Issue?.image}
                width={500}
                height={500}
                className="w-[260px] mt-2 object-contain bg-gray-100 border px-1 cursor-pointer rounded-md mx-auto"
                alt="logo"
                priority
                onClick={() => {
                  setImage(Issue?.image)
                }}
              />
              <p className="text-xs text-gray-500 cursor-pointer mt-1"
              onClick={()=>{
                setImage(Issue?.image)
              }}
              >
                view in bigger size {">"}
              </p>
            </div>}
            {Issue?.message &&  <p>
             Question:-  {Issue?.message}
              </p>}
            <div className="mt-3 flex justify-center mx-auto">
              <button className="px-2 bg-green-400 hover:bg-green-500 rounded-md  mx-2 text-xl "
              onClick={()=>{
                AssignIssue(tutor?.user?._id)
              }}
              >
                Accept
              </button>
              <button className="px-5 bg-red-400 hover:bg-red-500 rounded-md  mx-2 text-xl"
                onClick={() => {
                  AssignIssue(" ")
                }}
              >
                Pass
              </button>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;

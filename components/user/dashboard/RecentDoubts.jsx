import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const RecentDoubts = ({student}) => {
  const router = useRouter()
  const [Questions, setQuestions] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
console.log(student)
  const getIssues = () => {
    fetch("/api/issue/findIssues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentId: student?.user?._id,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setQuestions(data)
        // setIsLoading(false)
      })
      .catch(error => console.log(error));
  };

  // useEffect(() => {

  //   getIssues();

  // }, [])
  useEffect(() => {
    getIssues()
    // if (router?.query?.question) {
    //   const question = Questions.find(
    //     (question) => question._id === router?.query?.question
    //   );
    //   setQuestion(question);
    // }

  }, [student]);
console.log(Questions)
  return (
    <div className=" m-5 p-4 ">
      <div className="flex justify-between w-full pb-4 border-b mb-2">
        <div className="text-gray-900 font-semibold">Recent Doubts</div>
        <div className="text-sm text-gray-600">View All </div>
      </div>
      <div className=" w-full">
       {
        Questions.map((q)=>(
          <div className="flex items-center justify-between gap-5 cursor-pointer hover:bg-gray-100 py-1 px-2 rounded"
          onClick={()=>{
            router.push("/user/doubt?question="+q?._id)
          }}
          key={q?._id}
          >
            <div className="flex items-center gap-5 ">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-9 w-9 bg-white shadow-xl rounded-lg p-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>

              <div>
                <div className="text-gray-600 font-semibold">
{
  q.message
}
                </div>
                <div className="text-gray-400 text-sm">{
                  q.updatedAt.toString().slice(0,10)
                }
                </div>
              </div>
            </div>
            <div className="flex flex-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={22}
                height={22}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#5B5B5B"
                  d="M5.125,23.831C5.224,23.943,5.362,24,5.5,24c0.118,0,0.236-0.042,0.331-0.125l13-11.5	C18.938,12.28,19,12.143,19,12s-0.062-0.28-0.169-0.375l-13-11.5C5.626-0.056,5.309-0.039,5.125,0.169	C4.942,0.375,4.962,0.691,5.169,0.875L17.746,12L5.169,23.125C4.962,23.309,4.942,23.625,5.125,23.831z"
                />
              </svg>
            </div>
          </div>
        )).slice(-3)
        }
        {/* <div className="flex items-center justify-between gap-5 cursor-pointer hover:bg-gray-100 py-1 px-2 rounded">
          <div className="flex items-center gap-5 ">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-9 w-9 bg-white shadow-xl rounded-lg p-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>

            <div>
              <div className="text-gray-600 font-semibold">
                What is the formula for sin(4x)?
              </div>
              <div className="text-gray-400 text-sm">2 days ago</div>
            </div>
          </div>
          <div className="flex flex-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={22}
              height={22}
              viewBox="0 0 24 24"
            >
              <path
                fill="#5B5B5B"
                d="M5.125,23.831C5.224,23.943,5.362,24,5.5,24c0.118,0,0.236-0.042,0.331-0.125l13-11.5	C18.938,12.28,19,12.143,19,12s-0.062-0.28-0.169-0.375l-13-11.5C5.626-0.056,5.309-0.039,5.125,0.169	C4.942,0.375,4.962,0.691,5.169,0.875L17.746,12L5.169,23.125C4.962,23.309,4.942,23.625,5.125,23.831z"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 cursor-pointer hover:bg-gray-100 py-1 px-2 rounded">
          <div className="flex items-center gap-5 ">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-9 w-9 bg-white shadow-xl rounded-lg p-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>

            <div>
              <div className="text-gray-600 font-semibold">
                What is the formula for sin(4x)?
              </div>
              <div className="text-gray-400 text-sm">2 days ago</div>
            </div>
          </div>
          <div className="flex flex-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={22}
              height={22}
              viewBox="0 0 24 24"
            >
              <path
                fill="#5B5B5B"
                d="M5.125,23.831C5.224,23.943,5.362,24,5.5,24c0.118,0,0.236-0.042,0.331-0.125l13-11.5	C18.938,12.28,19,12.143,19,12s-0.062-0.28-0.169-0.375l-13-11.5C5.626-0.056,5.309-0.039,5.125,0.169	C4.942,0.375,4.962,0.691,5.169,0.875L17.746,12L5.169,23.125C4.962,23.309,4.942,23.625,5.125,23.831z"
              />
            </svg>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default RecentDoubts
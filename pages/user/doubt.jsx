import Askdoubt from "../../components/user/Askdoubt";
import Chatroom from "../../components/user/Chatroom";
import Rightbar from "../../components/user/Rightbar";
import Sidebar from "../../components/user/Sidebar";
import ViewImage from "../../components/ViewImage";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Leftbar } from "../../components/user/Leftbar";
import Loading from "../../components/Loading";

const Doubt = ({ student, setStudent }) => {
  const router = useRouter();
  const [Question, setQuestion] = useState({})

  const [chat, setChat] = useState([
    // {
    //   name: "Junaid",
    //   role: "user",
    //   message: "https://gt2.sgp1.digitaloceanspaces.com/optimized/1X/b63c2df59f616465c9cec1546539ffb3c574dd2e_2_690x211.JPG",
    //   time: "12:00",
    // },
    // {
    //   name: "tariq",
    //   role: "sme",
    //   message: "https://gt2.sgp1.digitaloceanspaces.com/optimized/1X/870290aafeac5605fa96ceecac6fdac27101bd44_2_375x500.jpg",
    //   time: "12:00",
    // },
  ]);
  const [ask, setAsk] = useState("hidden");
  const [text, setText] = useState("")
  const [rightBar, setRightBar] = useState(false)
  const [sideBar, setSideBar] = useState(true)
  const [Questions, setQuestions] = useState([])
  const [Image, setImage] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // window.location.reload()
      // if(student!==null && student!==undefined){
      //   setIsLoading(false)
      // }
      if (!localStorage.getItem("myuser")) {
        router.push("/login")
      } else {
        if (typeof window !== "undefined") {
          const token = JSON.parse(localStorage.getItem("myuser")).token
          try {
            if (token && token != "undefined" && token != null) {
              fetch("/api/student/checkStudent", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ token: token }),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.success) {
                    setStudent(data);
                    setIsLoading(false)
                  } else {
                    setIsLoading(false)
                    router.push("/login")
                  }
                }).catch((err) => {
                  console.log(err);
                })

            } else {
              router.push("/login")
            }
          } catch (err) {
            router.push("/login")
            console.log(err)
          }

          // setTimeout(() => {
          //   // window.location.reload()
          //   setIsLoading(false)
          // }, 2000);
        }
      }

      // }else{
      //   setIsLoading(false)
      // }
    }

  }, [])

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
        setQuestions(data)
        setIsLoading(false)
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

  }, [student, router?.query?.question]);

  useEffect(() => {
    if (router?.query?.question) {
      const question = Questions.find(
        (question) => question._id === router?.query?.question
      );
      setQuestion(question);
    }
    console.log(Questions)
  }, [Questions, router?.query?.question])




  // useEffect(() => {

  //   getIssues();

  // }, [])

  const right = () => {
    setRightBar(!rightBar)
  }

  return (
    <div className="bg-white max-w-screen max-h-screen flex pt-10 md:py-0 overflow-x-hidden">
      {isLoading && <Loading />}
      <ViewImage Image={Image} setImage={setImage} />
      <Leftbar ask={ask} setAsk={setAsk} setChat={setChat} chat={chat} student={student} setStudent={setStudent} Question={Question} setQuestion={setQuestion} Questions={Questions} />

      <Askdoubt ask={ask} setAsk={setAsk} student={student} Question={Question} setQuestion={setQuestion} text={text} setText={setText} />

      <Sidebar ask={ask} setAsk={setAsk} setChat={setChat} chat={chat} student={student} Question={Question} setQuestion={setQuestion} Questions={Questions} setQuestions={setQuestions} />
      <Chatroom chat={chat} Question={Question} setQuestion={setQuestion} student={student} Image={Image} setImage={setImage} />

      <div className=" hidden lg:flex relative">
        <div
          className={`absolute ${!rightBar ? "left-2 top-2 rotate-180" : "-left-5 top-2 "
            } z-20 cursor-pointer duration-300 bg-white shadow-xl`}
          onClick={right}
        >
          {"<<"}
        </div>
        <Rightbar rightBar={rightBar} />
      </div>
    </div>
  );
};

export default Doubt;

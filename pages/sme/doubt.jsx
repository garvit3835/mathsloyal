import Chatroom from "../../components/sme/Chatroom";
import Rightbar from "../../components/sme/Rightbar";
import Sidebar from "../../components/sme/Sidebar";
import { Leftbar } from "../../components/sme/Leftbar";
import ViewImage from "../../components/ViewImage";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
const Doubt = ({ tutor }) => {
  const router = useRouter();
  const [Issue, setIssue] = useState()
  const [Image, setImage] = useState("")
  const [Questions, setQuestions] = useState([])
  const [Question, setQuestion] = useState({})
  const [chat, setChat] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  //   const [Question, setQuestion] = useState({
  //     "_id": "64213dcac262cc495e63b91e",
  //     "image": "https://wrap.sgp1.digitaloceanspaces.com/question.png",
  //     "message": "solve the",
  //     "student": "63ce1e4c0ee46abedf8db1a6",
  //     "tutor": tutor?.user?._id,
  //     "createdAt": "2023-03-27T06:55:06.762Z",
  //     "updatedAt": "2023-03-27T07:29:36.722Z",
  //     "__v": 0

  // })
  console.log(tutor)
  useEffect(() => {
    console.log(tutor)
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("mysme")) {
        router.push("/sme/login");
        setIsLoading(false);
      } else {
        if (typeof window !== "undefined") {
          // const token = localStorage.getItem("token");
          const user = localStorage.getItem("mysme");
          const user1 = JSON.parse(user);
          // console.log(student)
          if (user1?.token && user1?.token != "undefined" && user1?.token != null) {
            console.log(user1?.token)
            fetch("/api/tutor/checkTut", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token: user1?.token
              })
            }).then((res) => res.json())
              .then((res) => {
                if (res.success) {
                  // router.push("/sme");
                  setIsLoading(false)
                  console.log("success")
                } else {
                  router.push("/sme/login");
                  setIsLoading(false)
                }
              }
              ).catch((err) => {
                console.log(err);
              }
              )
          }


          // if(user?.email && user?.token && user?.token!="undefined"){
          //   Router.push("/user");
          // }

          // if(token && token!="undefined"){
          //   Router.push("/user");
          // }

        }
      }
    }

  }, [])
  const getTutIssues = () => {
    fetch("/api/issue/findtutissue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tutorId: tutor?.user?._id,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setQuestions(data)
        setIsLoading(false)
      }
      )
      .catch(error => console.log(error));
  };
  const getIssue = async () => {
    const res = await fetch("/api/issue/getIssue",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tutorId: tutor?.user?._id,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
    setIssue(data);
    // setChat(data);
  };
  setInterval(() => {
    getIssue();

  }, 100000);
  useEffect(() => {
    // const getIssue = async () => {
    //   const res = await fetch("/api/issue/getIssue",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       tutorId: tutor?.user?._id,
    //     }),
    //   }
    //   );
    //   const data = await res.json();
    //   console.log(data);
    //   setIssue(data);
    //   // setChat(data);
    // };
    // getIssue();
    getTutIssues();

  }, [router.query.question, tutor])
  useEffect(() => {
    if (router?.query?.question) {
      const question = Questions.find(
        (question) => question._id === router?.query?.question
      );
      setQuestion(question);
    }
    console.log(Questions)
  }, [Questions, router?.query?.question])
  console.log(Questions)
  console.log(router.query.question)

  return (
    <div className="bg-white max-w-screen max-h-screen flex py-[50px] md:py-0 overflow-x-hidden">
      <ViewImage Image={Image} setImage={setImage} />
      {isLoading && <Loading />}


      <Leftbar setChat={setChat} chat={chat} Questions={Questions} Question={Question} setQuestion={setQuestion} tutor={tutor} />
      <Sidebar setChat={setChat} chat={chat} Questions={Questions} Question={Question} setQuestion={setQuestion} tutor={tutor} />
      <Chatroom chat={chat} Question={Question} setQuestion={setQuestion} tutor={tutor} setImage={setImage} />
      <Rightbar Issue={Issue} setIssue={setIssue} tutor={tutor} setImage={setImage} />
    </div>
  );
};

export default Doubt;

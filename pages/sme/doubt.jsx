import Chatroom from "../../components/sme/Chatroom";
import Rightbar from "../../components/sme/Rightbar";
import Sidebar from "../../components/sme/Sidebar";
import { Leftbar } from "../../components/sme/Leftbar";
import ViewImage from "../../components/ViewImage";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
const Doubt = ({tutor}) => {
  const router = useRouter();
const [Issue, setIssue] = useState({})
const [Image, setImage] = useState("")
const [Questions, setQuestions] = useState([])
const [Question, setQuestion] = useState({})
const [chat, setChat] = useState([])
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
      .then(data => setQuestions(data))
      .catch(error => console.log(error));
  };

useEffect(() => {
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
getIssue();
getTutIssues();
}, [router?.query?.question, tutor])
console.log(Questions)
  console.log(router.query.question)

  return (
    <div className="bg-white max-w-screen max-h-screen flex py-[50px] md:py-0 overflow-x-hidden">
      <ViewImage Image={Image} setImage={setImage} />
      {!Questions && <Loading/>}

      <Leftbar setChat={setChat} chat={chat} />
      <Sidebar setChat={setChat} chat={chat} Questions={Questions} Question={Question} setQuestion={setQuestion} tutor={tutor}/>
      <Chatroom chat={chat} Question={Question} setQuestion={setQuestion} tutor={tutor} setImage={setImage}/>
      <Rightbar Issue={Issue} setIssue={setIssue} tutor={tutor} setImage={setImage} />
    </div>
  );
};

export default Doubt;

import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import Searchbar from "../components/home/Searchbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/home/Footer";
import Faqs from "../components/home/Faqs";
import Head from "next/head";
import Loading from "../components/Loading";
import Ques from "../components/home/Ques";


export default function Home({ student, tutor, setStudent, setTutor }) {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter();
  const [showLogin, setShowLogin] = useState('none')

  useEffect(() => {
   if (typeof window !== "undefined") {
     if (localStorage.getItem("myuser")) {
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
           if(data.user){
             router.push("/user")
             setIsLoading(false)
           }

         });
  
}else{
  router.push("/")
  setIsLoading(false)
}
    
   }
    // console.log(student)
    // if(student?.user){
    //   router.push("/user")
    // }
  }, [])
  
  return (
    <div className="glass-gradient glass-gradient  scroll-smooth ">
      <Head>
        <title>Mathsloyal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="MathsLoyal is an AI platform where you can ask your doubts and get them solved by AI or subject experts." />
        </Head>
      {/* {isLoading && <Loading/>} */}
      <div className="max-h-screen max-w-[1300px] mx-auto ">
        <Login showLogin={showLogin} setShowLogin={setShowLogin} />
        <Signup showLogin={showLogin} setShowLogin={setShowLogin} />
        <Navbar />
        <div className="w-full flex justify-center">
        <div className="md:flex w-full mx-auto  max-w-[1400px] items-center px-5 xs:px-10  relative mt-3 sm:mt-5 md:my-10">
          <div className="md:w-[60%]"> 
          <Hero />
              <Link href={"/user/ask"}><Searchbar showLogin={showLogin} setShowLogin={setShowLogin} /></Link> 
          </div>

          <Image
            src="/icons/hero.webp"
            className="hidden md:flex md:w-[40%] p-2 "
            alt="a h-[50%] w-[50%]"
            width={500}
            height={500}
          />
        </div>
      </div>
      </div>
      <Image
        src="/icons/hero.webp"
        className="  md:hidden w-full px-10 "
        alt="a h-[50%] w-[50%]"
        width={500}
        height={500}
      />
      {/* <Testimonials /> */}
      <Ques/>
      <Faqs/>
      <Footer />
    </div>
  );
}

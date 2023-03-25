import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import Searchbar from "../components/home/Searchbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/home/Footer";
import Faqs from "../components/home/Faqs";
import Testimonials from "../components/home/Testimonials";


export default function Home() {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState('none')
  useEffect(() => {
   if(typeof window !== "undefined"){
    if(localStorage.getItem('myuser')){
      router.push('/user')
    }
    }
  }, []);

  return (
    <div className="glass-gradient glass-gradient  ">
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
          <img
            src="/icons/hero.webp"
            className="hidden md:flex md:w-[40%] p-2 "
            alt="a h-[50%] w-[50%]"
          />
        </div>
      </div>
      </div>
      <img
        src="/icons/hero.webp"
        className="  md:hidden px-10 "
        alt="a h-[50%] w-[50%]"
      />
      <Testimonials />
      <Faqs/>
      <Footer />
    </div>
  );
}

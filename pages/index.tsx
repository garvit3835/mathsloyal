import { useState } from "react";
import Login from "../components/auth/Login";
import Singup from "../components/auth/Singup";
import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import Searchbar from "../components/home/Searchbar";
import Askdoubt from "../components/user/Askdoubt";
import Image from "next/image";


export default function Home() {
  const [showLogin, setShowLogin] = useState('none')

  return (
    <div className="glass-gradient h-screen glass-gradient ">
      <div>

      
      <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      <Singup showLogin={showLogin} setShowLogin={setShowLogin} />
      <Navbar />

      {/* <Askdoubt/> */}
      <div className="lg:flex  h-[85%]  justify-around items-center my-auto w-full">
        {/* <div className="lg:hidden w-full flex justify-center py-10">
          <Hero />
        </div> */}
        <div className="flex w-full items-center  justify-around pl-7">
          <div className="w-1/2   items-end mt-[12vh]">
            <div className="hidden lg:flex px-10 my-10">
              <Hero />
            </div>
            <Searchbar showLogin={showLogin} setShowLogin={setShowLogin} />
          </div>
          <div className="w-2/5   flex items-end justify-center ">
            <Image
              src="/icons/hero.svg"
              width={600}
              height={600}
              className="absolute bottom-0 right-0 w-3/6"
              alt="a w-full"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import Login from "../components/auth/Login";
import Singup from "../components/auth/Singup";
import Hero from "../components/home/Hero";
import Searchbar from "../components/home/Searchbar";


export default function Home() {
  const [showLogin, setShowLogin] = useState('none')

  return (
    <div className="bg-[#242f40] h-screen glass-gradient">
      <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      <Singup showLogin={showLogin} setShowLogin={setShowLogin} />
      <div className="lg:flex h-screen justify-center items-center my-auto w-full">
        <div className="lg:hidden w-full flex justify-center py-10">
          <Hero />
        </div>
        <Searchbar showLogin={showLogin} setShowLogin={setShowLogin} />
        <div className="hidden lg:flex">
          <Hero />
        </div>
      </div>
    </div>
  );
}

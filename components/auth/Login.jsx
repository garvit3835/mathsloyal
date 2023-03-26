import Image from 'next/image'
import React, { useState, useEffect } from "react";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = ({showLogin,setShowLogin}) => {
  const router = Router;
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();


    try {
      // await signup(data.email, data.password);
      let datal = await fetch("/api/student/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const data1 = await datal.json();
      if (typeof window !== "undefined") {
        localStorage.setItem("token", data1.token);
        if (data1.success) {
          localStorage.setItem(
            "myuser",
            JSON.stringify({ email: data1.email, token: data1.token })
          );
          toast.success("Login Success", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            router.push("/user");
          }, 1500);
        } else {
          toast.error(data1.error, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }

      }
      console.log(data1);
    } catch (err) {
      console.log(err);
    }
  }

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     // const token = localStorage.getItem("token");
  //     const user = localStorage.getItem("myuser");
  //     const user1 = JSON.parse(user);
  //     console
  //     if (user1?.email && user1?.token && user1?.token != "undefined") {
  //       Router.push("/user");
  //     }


  //     // if(user?.email && user?.token && user?.token!="undefined"){
  //     //   Router.push("/user");
  //     // }

  //     // if(token && token!="undefined"){
  //     //   Router.push("/user");
  //     // }

  //   }
  // }, [])

  return (
    <div
      className={`flex justify-center  ${
        showLogin === "login" ? "" : "hidden"
      } cursor-pointer`}
    >
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className=" w-full  md:w-max md:px-14 absolute   top-20 z-40  bg-gray-50 border-[2px] rounded-xl border-black shadow-2xl h-max py-10 items-center flex justify-center">
        <div
          className="flex justify-end top-4 right-6 text-2xl w-max absolute hover:bg-gray-400 rounded-full px-2 duration-500 transform ease-in-out"
          onClick={() => setShowLogin("none")}
        >
          X
        </div>
        <div className="">
          <div className="flex justify-center">
            <h1 className="text-4xl mb-1 font-bold">Login</h1>
          </div>
          <div className="flex justify-center">
            <p className="text-xl">Welcome back</p>
          </div>
          <div className="flex justify-center">
            <p className="text-gray-600">Please login to your account</p>
          </div>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[50px] rounded-[5px] mt-6 px-10 text-xl bg-gray-100 focus:bg-gray-200 border-2"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="flex justify-center">
            <input
              type="password"
              placeholder="Password"
              className="w-full h-[50px]  rounded-[5px] mt-5 px-10 text-xl bg-gray-100 focus:bg-gray-200 border-2"
              onChange={
                (e)=>setData({...data,password:e.target.value})
              }
            />
          </div>
          <p className="text-sm mt-2 flex justify-end mx-2">
            Forgot password?
            <a href="#" className="text-[#242f40] ml-1">
              {" "}
              Reset
            </a>
          </p>

          <div className="flex justify-center">
            <button className="bg-[#242f40] text-white mt-4 h-[50px] w-full mx-2 text-xl rounded-[5px]"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <div className="flex justify-center">
            <p className="text-md mt-2">
              Dont have an account?{" "}
              <a
                href="#"
                className="text-[#242f40]"
                onClick={() => setShowLogin("signup")}
              >
                Sign up
              </a>
            </p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <p className="w-full border-t border-black"></p>
            <p>OR</p>
            <p className="w-full border-t border-black"></p>
          </div>
          <div className="flex justify-center">
            <button className="bg-white flex items-center justify-start px-7 gap-7 text-gray-600 border-2 border-gray-400 r\ mt-7 h-[50px] w-full mx-2 text-xl rounded-[5px]">
              <Image src="/icons/google.png" width={23} height={23} alt=" " />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
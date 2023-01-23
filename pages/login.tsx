import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import React, { useState ,useEffect} from "react";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
import Footer from "../components/home/Footer";
const Login = () => {
  const router = Router;

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();


    try {
      // await signup(data.email, data.password);
      let datal = await fetch("http://localhost:3000/api/student/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const data1 = await datal.json();
      if(typeof window !== "undefined"){
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

useEffect(() => {
  if(typeof window !== "undefined"){
    // const token = localStorage.getItem("token");
    const user = localStorage.getItem("myuser");
    const user1 = JSON.parse(user!);
    console
    if(user1?.email && user1?.token && user1?.token!="undefined"){
      Router.push("/user");
    }


    // if(user?.email && user?.token && user?.token!="undefined"){
    //   Router.push("/user");
    // }

    // if(token && token!="undefined"){
    //   Router.push("/user");
    // }

  }
}, [])

	return (
    <main className="pt-10 md:pt-0">
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
      <Navbar />
      <div className={`flex justify-center `}>
        <div className=" w-full px-10  sm:w-max  md:px-16    top-20 z-40    py-10 items-center flex justify-center">
          <div className="">
            <div className="flex justify-center">
              <h1 className="text-4xl mb-1 font-bold">Login</h1>
            </div>
            <div className="flex justify-center">
              <p className="text-xl">
                Welcome back champ lets make you topper{" "}
              </p>
            </div>
            <div className="flex justify-center mt-3">
              <p className="text-gray-600">Login in your account</p>
            </div>

            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Email"
                className="w-full h-[50px] rounded-[5px] mt-6 px-4 text-xl bg-gray-100 focus:bg-gray-200 border-2"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                value={data.email}
              />
            </div>
            <div className="flex justify-center">
              <input
                type="password"
                placeholder="Password"
                className="w-full h-[50px]  rounded-[5px] mt-5 px-4 text-xl bg-gray-100 focus:bg-gray-200 border-2"
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
                value={data.password}
              />
            </div>

            <div className="flex justify-center">
              <button
                className="bg-[#242f40] hover:bg-[#0e1114] text-white mt-4 h-[50px] w-full mx-2 text-xl rounded-[5px]"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div className="flex justify-center">
              <p className="text-md mt-2">
                not have an account?{" "}
                <Link href="/signup" className="text-[#242f40]">
                  Signup{" "}
                </Link>
              </p>
            </div>
            <div className="flex justify-center items-center gap-3 mt-4">
              <p className="w-full border-t border-black"></p>
              <p>OR</p>
              <p className="w-full border-t border-black"></p>
            </div>
            <div className="flex justify-center">
              <button className="bg-white flex items-center justify-start px-2 md:px-7 gap-3 text-gray-600 border-2 border-gray-400 r\ mt-7 h-[50px] w-full mx-2 md:text-xl rounded-[5px]">
                <Image src="/icons/google.png" width={23} height={23} alt=" " />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}

export default Login;

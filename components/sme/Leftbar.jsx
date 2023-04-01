import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import Link from 'next/link'

export const Leftbar = ({ ask, setAsk, setChat, chat, Questions, Question, setQuestion }) => {
    const router = useRouter()
    const [navDrop, setNavDrop] = useState(false)
    const [active, setActive] = useState('overview')
    const [online, setOnline] = useState(false)

    const handleNavDrop = () => {
        setNavDrop(!navDrop)
    }

console.log(Questions)

    useEffect(() => {
        if(router.pathname === '/sme'){
            setActive('overview')
            handleNavDrop(false)
        }
        else if(router.pathname === '/sme/doubt'){
            setActive('doubt')
            handleNavDrop(false);

        }
        else if(router.pathname === '/sme/orders'){
            setActive('orders')
            handleNavDrop(false);

        }
        else if(router.pathname === '/sme/ask'){
            setActive('ask')
            handleNavDrop(false);

        }
        else if(router.pathname === '/sme/profile'){
            setActive('profile')
            handleNavDrop(false);

        }
        else if(router.pathname === '/sme/setting'){
            setActive('setting')
            handleNavDrop(false);

        }

    }, [router.pathname])
    // <div onClick = {()=> { setOnline(!online) }}>
    //   {!online ? <img src="/icons/start.webp" alt='' className='w-[31px]' /> : <img src="/icons/pause.webp" alt='' className='w-[31px]' />}
    //       </div >
  return (
    <div>
      <div>
        <div className="h-[50px] z-20 flex bg-white shadow-lg items-center justify-between px-5 md:hidden fixed top-0 w-screen">

          <div onClick={handleNavDrop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={30}
              height={30}
              viewBox="0 0 30 30"
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
            </svg>
          </div>
          <Link href='/sme' className="text-2xl text-blue-700">Ml</Link>
           <div onClick = {()=> { setOnline(!online) }}>
      {!online ? <img src="/icons/start.webp" alt='' className='w-[31px]' /> : <img src="/icons/pause.webp" alt='' className='w-[31px]' />}
          </div >
        </div>
        <div
          className={` absolute top-0
       h-full   scroll-m-0 bg-white py-5  text-center flex justify-between  flex-col w-[70vw] md:hidden   z-20 shadow-2xl
      ${navDrop ? "-translate-x-[150%]" : "translate-x-[0px]"
            } duration-500   `}
        >
          <div onClick={() => { setNavDrop("false") }} className='absolute border p-2 scale-150 bg-white -right-12'>
            {"x"}
          </div>
          {router.pathname === "/sme/doubt" && <div>
            {/* <div className="flex flex-col gap-2 text-gray-700 text-sm ">
              <div className="text-gray-500 text-sm mt-3">
                Got a New Doubt?
              </div>
            </div> */}
            {/* <div className="flex py-3 relative m-2 px-3 items-center gap-3 rounded-md hover:bg-gray-300 bg-gray-100 transition-colors duration-200 text-gray-700 cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20 shadow-sm" onClick={() => { setAsk("") }}>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1={12} y1={5} x2={12} y2={19} />
                <line x1={5} y1={12} x2={19} y2={12} />
              </svg>
              <div>Ask Doubt</div>

            </div> */}

            <div className="flex-col flex-1 overflow-y-auto border-b border-gray-300 m-2 my-3 shadow-inner bg-gray-50/2 rounded-lg h-[280px] py-4 border ">
              <div className="flex flex-col gap-2 text-gray-700 text-sm ">
                <div className="text-gray-500 text-sm ">
                  previously Answered Questions
                </div>
                {
                  Questions?.map((question) => (
                    <div className="flex py-3 px-3 items-center gap-3 hover:bg-gray-500/10  relative rounded-md  cursor-pointer break-all  group"
                      onClick={() => {
                        // setQuestion(question);
                        router.push(`/sme/doubt?question=${question._id}`);
                        setQuestion(
                          Questions?.filter((q) => q._id === question._id)[0]
                        );

                      }}
                      key={question.id}
                    //   setChat([
                    //     {
                    //       name: "Junaid",
                    //       role: "user",
                    //       message: "https://gt2.sgp1.digitaloceanspaces.com/optimized/1X/b63c2df59f616465c9cec1546539ffb3c574dd2e_2_690x211.JPG",
                    //       time: "12:00",
                    //     },
                    //     {
                    //       name: "Junaid",
                    //       role: "user",
                    //       message: "I am not able to solve this question",
                    //       time: "12:00",
                    //     },
                    //     {
                    //       name: "tariq",
                    //       role: "sme",
                    //       message: "https://gt2.sgp1.digitaloceanspaces.com/optimized/1X/870290aafeac5605fa96ceecac6fdac27101bd44_2_375x500.jpg",
                    //       time: "12:00",
                    //     }
                    //   ])
                    // }}
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <div className="flex text-start  max-h-5 overflow-hidden relative">
                        {question?.message}
                      </div>
                    </div>
                  )).reverse()
                }
              </div>
            </div>
          </div>}
          {router.pathname === "/sme/doubt" && <hr className='mx-3' />}
          <div className=' m-2 mb-0  rounded-lg grid grid-cols-1 gap-2 text-start px-5 '>


            <Link href="/sme">
              <div className="text-lg t ">DashBoard</div>
            </Link>

            <Link href="/sme/doubt">
              <div className="text-lg  ">Doubts</div>
            </Link>
            <Link href="/sme/orders">
              <div className="text-lg t ">Orders</div>
            </Link>
            <Link href="/sme/ask">
              <div className="text-lg te ">Ask Doubt</div>
            </Link>
            {/* <Link href="/sme/profile">
          <div className="text-lg t ">Profile</div>
          </Link> */}
            <Link href="/sme/setting">
              <div className="text-lg  ">Setting</div>
            </Link>
            <div onClick={() => {
              localStorage.removeItem("mysme")
              router.push("/login")
            }}>
              <div className="text-lg  ">Logout</div>
            </div>
          </div>

        </div>
      </div>
      <div className="w-max hidden bg-white border-r h-screen relative en-200 md:grid grid-cols-1 px-2 pt-5">
        <div className="mx-auto">
          <div
            className="text-4xl font-semibold cursor-pointer font-mono text-blue-600 "
            onClick={() => router.push("/sme")}
          >
            Ml
          </div>
          <div className="text-[8px] -mt-2">mathsloyal</div>
        </div>
        <div className="flex flex-col text-center mb-10 ">
          <div className="grid grid-cols-1 gap-8">
            <div
              className={`grid grid-cols-1 w-max mx-auto px-2 py-1 cursor-pointer  ${active === "overview"
                  ? "bg-gray-200 rounded-lg "
                  : "hover:bg-gray-100"
                }`}
              onClick={() => router.push("/sme")}
            >
              <img src="/icons/dashboard.webp" alt="" className='w-[35px] mx-auto' />

              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={35}
                height={35}
                viewBox="0 0 24 24"
                className="mx-auto"
              >
                <path d="M 2 2 L 2 3 L 2 13 L 11 13 L 11 2 L 2 2 z M 13 2 L 13 3 L 13 9 L 22 9 L 22 2 L 13 2 z M 4 4 L 9 4 L 9 11 L 4 11 L 4 4 z M 15 4 L 20 4 L 20 7 L 15 7 L 15 4 z M 13 11 L 13 12 L 13 22 L 22 22 L 22 11 L 13 11 z M 15 13 L 20 13 L 20 20 L 15 20 L 15 13 z M 2 15 L 2 16 L 2 22 L 11 22 L 11 15 L 2 15 z M 4 17 L 9 17 L 9 20 L 4 20 L 4 17 z" />
              </svg> */}
              <div className="text-[11px]">Overview</div>
            </div>
            <div
              className={`grid grid-cols-1 w-max mx-auto px-2 py-1 cursor-pointer  ${active === "doubt"
                  ? "bg-gray-200 rounded-lg "
                  : "hover:bg-gray-100"
                }`}
              onClick={() => router.push("/sme/doubt")}
            >
              <img src="/icons/conversations.webp" alt="" className='w-[35px]' />

              <div className="text-[11px]">Doubts</div>
            </div>
            <div
              className={`grid grid-cols-1 w-max mx-auto px-2 py-1 cursor-pointer  ${active === "orders"
                  ? "bg-gray-200 rounded-lg "
                  : "hover:bg-gray-100"
                }`}
              onClick={() => router.push("/sme/orders")}
            >
              <img src="/icons/orders.webp" alt="" className='w-[35px]' />
              <div className="text-[11px]">
                Earnings
              </div>
            </div>
            <div
              className={`grid grid-cols-1 w-max mx-auto px-2 py-1 cursor-pointer  ${active === "setting"
                  ? "bg-gray-200 rounded-lg "
                  : "hover:bg-gray-100"
                }`}
              onClick={() => router.push("/sme/setting")}
            >
              <img src="/icons/gear.webp" alt="" className='w-[35px]' />
              <div className="text-[11px]">Setting</div>
            </div>
          </div>
        </div>
        <div className="w-full absolute bottom-5 flex justify-center text-center items-end  ay-200 ">

          <div className="  h-max p-3 text-center items-center justify-center rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-gray-[700] cursor-pointer "

            onClick={() => {
              localStorage.removeItem("mysme");
              router.push("/sme/login");
            }}
          >
            <img src="/icons/logout.webp" alt="" className='w-[35px]' />
            <div className="text-[11px]">Logout</div>
            {/* Log out */}

          </div>
        </div>
      </div>
    </div>
  );
}

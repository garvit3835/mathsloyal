import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
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
    if (router.pathname === '/sme') {
      setActive('overview')
      handleNavDrop(false)
    }
    else if (router.pathname === '/sme/doubt') {
      setActive('doubt')
      handleNavDrop(false);

    }
    else if (router.pathname === '/sme/orders') {
      setActive('orders')
      handleNavDrop(false);

    }
    else if (router.pathname === '/sme/ask') {
      setActive('ask')
      handleNavDrop(false);

    }
    else if (router.pathname === '/sme/profile') {
      setActive('profile')
      handleNavDrop(false);

    }
    else if (router.pathname === '/sme/setting') {
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
          <div onClick={() => { setOnline(!online) }}>
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
        <div className="flex flex-col relative  bg-white text-center mb-1 ">
          <div className="grid grid-cols-1 gap-8">
            <div
              className={`grid grid-cols-1 w-max mx-auto px-2 py-1 cursor-pointer  ${active === "overview"
                ? "bg-gray-200 rounded-lg"
                : "hover:bg-gray-100"
                }`}
              onClick={() => router.push("/sme")}
            >
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
              <img src="/icons/dashboard.webp" alt="" className='w-[35px] mx-auto' />
              <div className="text-[8px]">Overview</div>
            </div>
            <div
              className={`grid grid-cols-1 w-max mx-auto px-2 py-1 cursor-pointer  ${active === "doubt"
                ? "bg-gray-200 rounded-lg "
                : "hover:bg-gray-100"
                }`}
              onClick={() => router.push("/sme/doubt")}
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={35}
                height={35}
                viewBox="0 0 24 24"
                className="mx-auto"
              >
                <path d="M 4 3 C 2.9 3 2 3.9 2 5 L 2 17 L 5 14 L 8 14 L 8 17 C 8 18.1 8.9 19 10 19 L 19 19 L 22 22 L 22 10 C 22 8.9 21.1 8 20 8 L 16 8 L 16 5 C 16 3.9 15.1 3 14 3 L 4 3 z M 4 5 L 14 5 L 14 12 L 4 12 L 4 5 z M 16 10 L 20 10 L 20 17 L 10 17 L 10 14 L 14 14 C 15.1 14 16 13.1 16 12 L 16 10 z" />
              </svg> */}
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
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={35}
                height={35}
                viewBox="0 0 24 24"
                className="mx-auto"
              >
                <path d="M 4 3 L 4 15 L 2 15 L 2 18 C 2 19.654 3.346 21 5 21 L 13 21 L 13 20 L 13 19 L 15 17 L 13 15 L 6 15 L 6 5 L 19 5 L 19 9 L 21 9 L 21 3 L 4 3 z M 8 7 L 8 9 L 10 9 L 10 7 L 8 7 z M 12 7 L 12 9 L 17 9 L 17 7 L 12 7 z M 8 11 L 8 13 L 10 13 L 10 11 L 8 11 z M 15 11 L 15 13 L 16 13 L 16 14.914062 L 18.085938 17 L 16 19.085938 L 16 21 L 15 21 L 15 23 L 24 23 L 24 21 L 23 21 L 23 19.085938 L 20.914062 17 L 23 14.914062 L 23 13 L 24 13 L 24 11 L 15 11 z M 18 13 L 21 13 L 21 14.085938 L 19.5 15.585938 L 18 14.085938 L 18 13 z M 19.5 18.414062 L 21 19.914062 L 21 21 L 18 21 L 18 19.914062 L 19.5 18.414062 z"></path>
              </svg> */}
              <img src="/icons/orders.webp" alt="" className='w-[35px]' />
              <div className="text-[11px]">Earning</div>
            </div>
            <div
              className={`grid grid-cols-1 w-max mx-auto px-2 py-1 cursor-pointer  ${active === "setting"
                ? "bg-gray-200 rounded-lg "
                : "hover:bg-gray-100"
                }`}
              onClick={() => router.push("/sme/setting")}
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={35}
                height={35}
                viewBox="0 0 24 24"
                className="mx-auto"
              >
                <path d="M 9.6660156 2 L 9.1757812 4.5234375 C 8.3516137 4.8342536 7.5947862 5.2699307 6.9316406 5.8144531 L 4.5078125 4.9785156 L 2.171875 9.0214844 L 4.1132812 10.708984 C 4.0386488 11.16721 4 11.591845 4 12 C 4 12.408768 4.0398071 12.832626 4.1132812 13.291016 L 4.1132812 13.292969 L 2.171875 14.980469 L 4.5078125 19.021484 L 6.9296875 18.1875 C 7.5928951 18.732319 8.3514346 19.165567 9.1757812 19.476562 L 9.6660156 22 L 14.333984 22 L 14.824219 19.476562 C 15.648925 19.165543 16.404903 18.73057 17.068359 18.185547 L 19.492188 19.021484 L 21.826172 14.980469 L 19.886719 13.291016 C 19.961351 12.83279 20 12.408155 20 12 C 20 11.592457 19.96113 11.168374 19.886719 10.710938 L 19.886719 10.708984 L 21.828125 9.0195312 L 19.492188 4.9785156 L 17.070312 5.8125 C 16.407106 5.2676813 15.648565 4.8344327 14.824219 4.5234375 L 14.333984 2 L 9.6660156 2 z M 11.314453 4 L 12.685547 4 L 13.074219 6 L 14.117188 6.3945312 C 14.745852 6.63147 15.310672 6.9567546 15.800781 7.359375 L 16.664062 8.0664062 L 18.585938 7.40625 L 19.271484 8.5917969 L 17.736328 9.9277344 L 17.912109 11.027344 L 17.912109 11.029297 C 17.973258 11.404235 18 11.718768 18 12 C 18 12.281232 17.973259 12.595718 17.912109 12.970703 L 17.734375 14.070312 L 19.269531 15.40625 L 18.583984 16.59375 L 16.664062 15.931641 L 15.798828 16.640625 C 15.308719 17.043245 14.745852 17.36853 14.117188 17.605469 L 14.115234 17.605469 L 13.072266 18 L 12.683594 20 L 11.314453 20 L 10.925781 18 L 9.8828125 17.605469 C 9.2541467 17.36853 8.6893282 17.043245 8.1992188 16.640625 L 7.3359375 15.933594 L 5.4140625 16.59375 L 4.7285156 15.408203 L 6.265625 14.070312 L 6.0878906 12.974609 L 6.0878906 12.972656 C 6.0276183 12.596088 6 12.280673 6 12 C 6 11.718768 6.026742 11.404282 6.0878906 11.029297 L 6.265625 9.9296875 L 4.7285156 8.59375 L 5.4140625 7.40625 L 7.3359375 8.0683594 L 8.1992188 7.359375 C 8.6893282 6.9567546 9.2541467 6.6314701 9.8828125 6.3945312 L 10.925781 6 L 11.314453 4 z M 12 8 C 9.8034768 8 8 9.8034768 8 12 C 8 14.196523 9.8034768 16 12 16 C 14.196523 16 16 14.196523 16 12 C 16 9.8034768 14.196523 8 12 8 z M 12 10 C 13.111477 10 14 10.888523 14 12 C 14 13.111477 13.111477 14 12 14 C 10.888523 14 10 13.111477 10 12 C 10 10.888523 10.888523 10 12 10 z" />
              </svg> */}
              <img src="/icons/gear.webp" alt="" className='w-[35px]' />
              <div className="text-[11px]">Setting</div>
            </div>
            <div
              className={`grid grid-cols-1 w-max mx-auto px-2 py-1 cursor-pointer   ${active === "logout"
                ? "bg-gray-200 rounded-lg "
                : "hover:bg-gray-100"
                }`}
              onClick={() => {
                localStorage.removeItem("mysme")
                router.push("/")
              }}
            >
              {/* <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 34 34"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1={21} y1={12} x2={9} y2={12} />
              </svg> */}
              <img src="/icons/logout.webp" alt="" className='w-[35px]' />
              <div className="text-[11px]">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export const Leftbar = ({ ask, setAsk, setChat, chat }) => {
    const router = useRouter()
    const [navDrop, setNavDrop] = useState(false)
    const [active, setActive] = useState('overview')
    const [online, setOnline] = useState(false)

    const handleNavDrop = () => {
        setNavDrop(!navDrop)
    }



    useEffect(() => {
        if (router.pathname === '/admin/tariq') {
            setActive('overview')
            handleNavDrop(false)
        }
        else if (router.pathname === '/admin/tariq/student') {
            setActive('student')
            handleNavDrop(false);

        }
        else if (router.pathname === '/admin/tariq/tutor') {
            setActive('tutor')
            handleNavDrop(false);

        }
        else if (router.pathname === '/admin/tariq/auditor') {
            setActive('auditor')
            handleNavDrop(false);

        }
      
    }, [router.pathname])
    // <div onClick = {()=> { setOnline(!online) }}>
    //   {!online ? <img src="/icons/start.webp" alt='' className='w-[31px]' /> : <img src="/icons/pause.webp" alt='' className='w-[31px]' />}
    //       </div >
    return (
        <div>
            <div>
                <div className="h-[50px] z-20 flex bg-white shadow-lg items-center  px-5 md:hidden fixed top-0 w-screen">

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
                    <Link href='/admin/tariq' className="text-2xl text-blue-700 text-center w-full ">ML</Link>
                  
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
                  
                    <div className=' m-2 mb-0  rounded-lg grid grid-cols-1 gap-2 text-start px-5 '>


                        <Link href="/admin/tariq">
                            <div className="text-lg t ">DashBoard</div>
                        </Link>

                        <Link href="/admin/tariq/student">
                            <div className="text-lg  ">Student</div>
                        </Link>
                        <Link href="/admin/tariq/tutor">
                            <div className="text-lg t ">Tutor</div>
                        </Link>
                        <Link href="/admin/tariq/auditor">
                            <div className="text-lg te ">Auditor</div>
                        </Link>
                      
                        <div onClick={() => {
                            localStorage.removeItem("myTariqToken")
                            router.push("/admin/tariq/login")
                        }}>
                            <div className="text-lg  ">Logout</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-[83px] hidden bg-white border-r h-screen relative en-200 md:grid grid-cols-1 px-2 pt-5">
                <div className="mx-auto">
                    <div
                        className="text-4xl font-semibold cursor-pointer font-mono text-blue-600 "
                        onClick={() => router.push("/admin/tariq")}
                    >
                        ML
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
                            onClick={() => router.push("/admin/tariq")}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width={35}
                                height={35}
                                viewBox="0 0 24 24"
                                className="mx-auto"
                            >
                                <path d="M 2 2 L 2 3 L 2 13 L 11 13 L 11 2 L 2 2 z M 13 2 L 13 3 L 13 9 L 22 9 L 22 2 L 13 2 z M 4 4 L 9 4 L 9 11 L 4 11 L 4 4 z M 15 4 L 20 4 L 20 7 L 15 7 L 15 4 z M 13 11 L 13 12 L 13 22 L 22 22 L 22 11 L 13 11 z M 15 13 L 20 13 L 20 20 L 15 20 L 15 13 z M 2 15 L 2 16 L 2 22 L 11 22 L 11 15 L 2 15 z M 4 17 L 9 17 L 9 20 L 4 20 L 4 17 z" />
                            </svg>
                            <div className="text-[11px]">Overview</div>
                        </div>
                        <div
                            className={`grid grid-cols-1  w-max mx-auto px-2 py-1 cursor-pointer  ${active === "doubt"
                                ? "bg-gray-200 "
                                : "hover:bg-gray-200 rounded-lg "
                                }`}
                            onClick={() => router.push("/admin/tariq/tutor")}
                        >
                           
<img src="/icons/tutor.webp" alt=""  className='w-[38px] '/>
                            <div className="text-[11px]">Tutor</div>
                        </div>
                        <div
                            className={`grid grid-cols-1 w-max mx-auto px-2 py-1 cursor-pointer  ${active === "orders"
                                ? "bg-gray-200 rounded-lg "
                                : "hover:bg-gray-100"
                                }`}
                            onClick={() => router.push("/admin/tariq/student")}
        >
                            <img src="/icons/student.webp" alt=""  className='w-[35px] mx-auto'/>

                            <div className="text-[11px]">
                                Student
                            </div>
                        </div>
                        <div
                            className={`grid grid-cols-1 w-max mx-auto px-2 py-1 cursor-pointer  ${active === "setting"
                                ? "bg-gray-200 rounded-lg "
                                : "hover:bg-gray-100"
                                }`}
                            onClick={() => router.push("/admin/tariq/auditor")}
                        >
                            <img src="/icons/auditor.webp" alt="" className='w-[35px]' />

                            <div className="text-[11px]">
                                Auditor
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full absolute bottom-5 flex justify-center text-center items-end  ay-200 ">

                    <div className="flex  h-max p-3 text-center items-center justify-center rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-gray-[700] cursor-pointer "

                        onClick={() => {
                            localStorage.removeItem("myTariqToken")
                            router.push("/admin/tariq/login")
                        }}
                    >
                        <svg
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
                        </svg>
                        {/* Log out */}

                    </div>
                </div>
            </div>
        </div>
    );
}

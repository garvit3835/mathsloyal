import React from 'react'
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from 'next/link';
import { Leftbar } from "../../components/user/Leftbar";
import Askdoubt from "../../components/user/Askdoubt";
import Loading from "../../components/Loading";



const plans = ({ setStudent, student }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [ask, setAsk] = useState("hidden");
    const [text, setText] = useState("");
    useEffect(() => {
        if (typeof window !== "undefined") {
            // window.location.reload()
            // if(student!==null && student!==undefined){
            //   setIsLoading(false)
            // }
            if (!localStorage.getItem("myuser")) {
                router.push("/login")
            } else {
                if (typeof window !== "undefined") {
                    const token = JSON.parse(localStorage.getItem("myuser")).token
                    try {
                        if (token && token != "undefined" && token != null) {
                            fetch("/api/student/checkStudent", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ token: token }),
                            })
                                .then((res) => res.json())
                                .then((data) => {
                                    console.log(data);
                                    if (data.success) {
                                        setStudent(data);
                                        setIsLoading(false)
                                    } else {
                                        setIsLoading(false)
                                        router.push("/login")
                                    }
                                }).catch((err) => {
                                    console.log(err);
                                })

                        } else {
                            router.push("/login")
                        }
                    } catch (err) {
                        router.push("/login")
                        console.log(err)
                    }

                    // setTimeout(() => {
                    //   // window.location.reload()
                    //   setIsLoading(false)
                    // }, 2000);
                }
            }

            // }else{
            //   setIsLoading(false)
            // }
        }

    }, [])
    return (
        <div className="bg-white flex pt-10 md:pt-0 ">

            {isLoading && <Loading />}

            <Leftbar ask={ask} setAsk={setAsk} setStudent={setStudent} />

            <section className="mt-10 w-full md:mt-0 bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-5 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Choose the plan that suites you and ace your exam
                        </h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            We are a team of students who are passionate about education and want to make it more accessible to everyone.
                        </p>
                    </div>
                    <div className="space-y-8  md:flex items-start sm:gap-6 xl:gap-10 md:space-y-0">

                        <div className="flex relative flex-col p-6 mx-auto max-w-sm text-center text-gray-900 bg-white rounded-lg  border-gray-600 border-2 shadow dark:border-gray-600 xl:p-8 xl:pt-4 dark:bg-gray-800 dark:text-white">
                            <div>
                                <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium leading-5 text-black bg-gray-100 rounded-full">
                                    Current Plan
                                </span>

                            </div>
                            <div className="absolute top-0 right-0">
                                <h2 className="m-4 -mt-4 text-2xl font-extrabold leading-8 tracking-tight text-gray-900 bg-white dark:text-white border rounded border-gray-600 px-2">
                                    27% <span className="text-base font-normal">
                                        off
                                    </span>
                                </h2>
                            </div>
                            <h3 className="my-2 text-2xl font-semibold">Pro</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                Relevant for the user, who wants to learn in a more structured way
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="text-gray-500 dark:text-gray-400 text-2xl line-through mr-3">&#8377;15</span>

                                <span className="mr-2 text-5xl font-extrabold">&#8377;11</span>
                                <span
                                    className="text-gray-500 dark:text-gray-400"

                                >
                                    /doubt
                                </span>
                            </div>
                            {/* List */}
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Doubt Solved By our team of experts
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Get Doubt Solved in 3 hours
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Unlimited Doubt solved By Our Ai

                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        2 Follow ups on Doubt then &#8377;5 per follow up
                                    </span>
                                </li>
                                {/* <li className="flex items-center space-x-3">

                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Free updates: <span className="font-semibold">24 months</span>
                  </span>
                </li> */}
                            </ul>
                            {/* <Link
                                href="/login"
                                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-blue-900"
                            >
                                Get started
                            </Link> */}
                        </div>
                        {/* Pricing Card */}
                        <div className="flex relative flex-col p-6 mx-auto max-w-sm text-center text-gray-900 bg-white rounded-lg border-2 border-blue-600 shadow dark:border-gray-600 xl:p-8 xl:pt-4 dark:bg-gray-800 dark:text-white">

                            <div className="absolute top-0 right-0">
                                <h2 className="m-4 -mt-4 text-2xl font-extrabold leading-8 tracking-tight text-gray-900 bg-white dark:text-white border rounded-lg border-blue-600 px-2">
                                    31% <span className="text-base font-normal">
                                        off
                                    </span>
                                </h2>
                            </div>
                            <div> <span className="inline-flex items-center justify-center px-3 py-1 mb-2 text-sm font-medium leading-5 text-blue-800 bg-blue-100 rounded-full">
                                Recommended Plan
                            </span></div>
                            <h3 className="mb-4 text-2xl font-semibold">
                                Premium
                            </h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                For the Person who wants to get Top Grades
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="text-gray-500 dark:text-gray-400 text-2xl line-through mr-3">&#8377;600</span>
                                <span className="mr-2 text-5xl font-extrabold">&#8377;414</span>
                                <span className="text-gray-500 dark:text-gray-400">/21 days</span>
                            </div>
                            {/* List */}
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        40 Doubts solved by our expert
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        3 Follow ups on Doubt then &#8377;5 per follow up
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Get Doubt Solved in 3 hours

                                    </span>
                                </li>

                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        Unlimited Doubts Solved By Our Ai
                                    </span>
                                </li>
                            </ul>
                            <Link
                                href="#"
                                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-blue-900"
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default plans
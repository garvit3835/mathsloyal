import React, { useState } from 'react'
import Footer2 from '../components/home/Footer'
import Navbar from '../components/Navbar'

const Faqs = () => {
  const [show, setShow] = useState(1)
  const Show = (e) => {
    if (e === show) {
      setShow(0)
    } else {

      setShow(e)
    }
  }

  return (<div>
    <Navbar />
    <section className="relative pt-24 pb-28 bg-white overflow-hidden">
      <img
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        src="flaro-assets/images/faqs/gradient.svg"
        alt=""
      />
      <div className="relative z-10 container px-4 mx-auto">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">
            Have any questions?
          </p>
          <h2 className="mb-5 md:mb-10 xl:mb-16 text-4xl md:text-6xl lg::text-7xl text-center font-bold font-heading tracking-px-n leading-none">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            <div className="w-full p-1">
              <a href="#">
                <div className={`py-7 px-8 bg-white bg-opacity-60 border-2 ${show === 1 ? "transform border-indigo-600" : "transform"} duration-300 rounded-2xl shadow-10xl`}>
                  <div className="flex flex-wrap justify-between -m-2">
                    <div className="flex-1 p-2">
                      <h3 className="mb-4 text-lg font-semibold leading-normal">
                        Do you provide any free plan?
                      </h3>
                      {show === 1 && <p className="text-gray-600 font-medium ease-in-out">
                        Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
                        Volutpat tempor to the condi mentum vitae vel purus.
                      </p>}
                    </div>
                    <div className="w-auto p-2" onClick={() => {
                      Show(1)
                    }}>
                      <svg
                        className={`relative top-1 duration-300 ${show === 1 ? "" : "transform rotate-180"}`}
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
                          stroke={show === 1 ? "#4F46E5" : " #18181B"}
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full p-1">
              <a href="#">
                <div className={`py-7 px-8 bg-white bg-opacity-60 border-2 ${show === 2 ? "border-indigo-600" : ""} rounded-2xl shadow-10xl`}>

                  <div className="flex flex-wrap justify-between -m-2">
                    <div className="flex-1 p-2">
                      <h3 className="text-lg font-semibold leading-normal">
                        How to claim your 25% discount offer?
                      </h3>
                      {show === 2 && <p className="text-gray-600 font-medium">
                        Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
                        Volutpat tempor to the condi mentum vitae vel purus.
                      </p>}
                    </div>
                    <div className="w-auto p-2"
                      onClick={
                        () => {
                          Show(2)
                        }
                      }
                    >
                      <svg
                        className={`relative top-1 duration-300 ${show === 2 ? "" : "transform rotate-180"}`}
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
                          stroke={show === 2 ? "#4F46E5" : " #18181B"}
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full p-1">
              <a href="#">
                <div className={`py-7 px-8 bg-white bg-opacity-60 border-2 ${show === 3 ? "border-indigo-600" : ""} rounded-2xl shadow-10xl`}>

                  <div className="flex flex-wrap justify-between -m-2">
                    <div className="flex-1 p-2">
                      <h3 className="text-lg font-semibold leading-normal">
                        What’s your refund policy?
                      </h3>
                      {show === 3 && <p className="text-gray-600 font-medium">
                        Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
                        Volutpat tempor to the condi mentum vitae vel purus.
                      </p>}
                    </div>
                    <div className="w-auto p-2"
                      onClick={
                        () => {
                          Show(3)
                        }
                      }
                    >
                      <svg
                        className={`relative top-1 duration-300 ${show === 3 ? "" : "transform rotate-180"}`}
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
                          stroke={show === 3 ? "#4F46E5" : " #18181B"}
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full p-1">
              <a href="#">
                <div className={`py-7 px-8 bg-white bg-opacity-60 border-2 ${show === 4 ? "border-indigo-600" : ""} rounded-2xl shadow-10xl`}>

                  <div className="flex flex-wrap justify-between -m-2">
                    <div className="flex-1 p-2">
                      <h3 className="text-lg font-semibold leading-normal">
                        How to get support for the product?
                      </h3>
                      {show === 4 && <p className="text-gray-600 font-medium">
                        Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
                        Volutpat tempor to the condi mentum vitae vel purus.
                      </p>}
                    </div>
                    <div className="w-auto p-2"
                      onClick={
                        () => {
                          Show(4)
                        }
                      }
                    >
                      <svg
                        className={`relative top-1 duration-300 ${show === 4 ? "" : "transform rotate-180"}`}
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
                          stroke={show === 4 ? "#4F46E5" : " #18181B"}
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <p className="text-gray-600 text-center font-medium">
            <span>Still have any questions?</span>
            <a
              className="font-semibold text-indigo-600 hover:text-indigo-700"
              href="#"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
    <Footer2 />
  </div>
  )
}

export default Faqs
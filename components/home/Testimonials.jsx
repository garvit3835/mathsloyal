import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Testimonials = () => {
    const customLeftArrow = (
        <div className="absolute arrow-btn ml-5 bg-grayish-500 px-3 hover:bg-grayish-900 duration-300 hidden md:flex left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
        </div>
    );

    const customRightArrow = (
        <div className="absolute arrow-btn mr-5 bg-grayish-500 px-3 hover:bg-grayish-900 duration-300 right-0 hidden md:flex text-center py-3 cursor-pointer bg-pink-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </div>
    );

  return (
      <section className="relative pt-10 md:pt-14 lg:pt-24 pb-20 lg:pb-32 bg-white overflow-hidden">
          <img
              className="absolute top-0 left-0"
              src="flaro-assets/images/testimonials/gradient.svg"
              alt=""
          />
          <img
              className="absolute bottom-0 right-0"
              src="flaro-assets/images/testimonials/gradient2.svg"
              alt=""
          />
          <div className="relative z-10 container px-4 mx-auto">
              <h2 className="mb-5 md:mb-10 xl:mb-16 text-4xl md:text-6xl lg::text-7xl font-bold font-heading text-center tracking-px-n leading-tight">
                 Do not just take our word for it
              </h2>
              <Carousel infinite responsive={responsive} itemclassName="px-4" autoPlay={true} autoPlaySpeed={3000}
                  keyBoardControl={true}
                  showDots={true}
                  customLeftArrow={customLeftArrow}
                  customRightArrow={customRightArrow}
                  swipeable={true}
              >

                  <div className="w-full p-3">
                      <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
                          <div className="flex flex-col justify-between h-full">
                              <div className="mb-5 block">
                                  <div className="flex flex-wrap mb-4 -m-2">
                                      <div className="w-auto p-2">
                                          <img
                                              src="flaro-assets/images/testimonials/avatar.png"
                                              alt=""
                                          />
                                      </div>
                                      <div className="w-auto p-2">
                                          <h3 className="font-semibold leading-normal">Jacob Jones</h3>
                                          <p className="text-gray-500 uppercase">@brooklysim</p>
                                      </div>
                                  </div>
                                  <p className="text-lg font-medium">
                                      If you have not tried out Flaro App yet, I would definitely
                                      recommend it for both designers and developers 🤙🏻
                                  </p>
                              </div>
                              <div className="block">
                                  <p className="text-sm text-gray-500 font-medium">3 days ago</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="w-full p-3">
                      <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
                          <div className="flex flex-col justify-between h-full">
                              <div className="mb-5 block">
                                  <div className="flex flex-wrap mb-4 -m-2">
                                      <div className="w-auto p-2">
                                          <img
                                              src="flaro-assets/images/testimonials/avatar.png"
                                              alt=""
                                          />
                                      </div>
                                      <div className="w-auto p-2">
                                          <h3 className="font-semibold leading-normal">Jacob Jones</h3>
                                          <p className="text-gray-500 uppercase">@brooklysim</p>
                                      </div>
                                  </div>
                                  <p className="text-lg font-medium">
                                      If you have not tried out Flaro App yet, I would definitely
                                      recommend it for both designers and developers 🤙🏻
                                  </p>
                              </div>
                              <div className="block">
                                  <p className="text-sm text-gray-500 font-medium">3 days ago</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="w-full p-3">
                      <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
                          <div className="flex flex-col justify-between h-full">
                              <div className="mb-5 block">
                                  <div className="flex flex-wrap mb-4 -m-2">
                                      <div className="w-auto p-2">
                                          <img
                                              src="flaro-assets/images/testimonials/avatar.png"
                                              alt=""
                                          />
                                      </div>
                                      <div className="w-auto p-2">
                                          <h3 className="font-semibold leading-normal">Jacob Jones</h3>
                                          <p className="text-gray-500 uppercase">@brooklysim</p>
                                      </div>
                                  </div>
                                  <p className="text-lg font-medium">
                                      If you have not tried out Flaro App yet, I would definitely
                                      recommend it for both designers and developers 🤙🏻
                                  </p>
                              </div>
                              <div className="block">
                                  <p className="text-sm text-gray-500 font-medium">3 days ago</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="w-full p-3">
                      <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
                          <div className="flex flex-col justify-between h-full">
                              <div className="mb-5 block">
                                  <div className="flex flex-wrap mb-4 -m-2">
                                      <div className="w-auto p-2">
                                          <img
                                              src="flaro-assets/images/testimonials/avatar.png"
                                              alt=""
                                          />
                                      </div>
                                      <div className="w-auto p-2">
                                          <h3 className="font-semibold leading-normal">Jacob Jones</h3>
                                          <p className="text-gray-500 uppercase">@brooklysim</p>
                                      </div>
                                  </div>
                                  <p className="text-lg font-medium">
                                      If you have not tried out Flaro App yet, I would definitely
                                      recommend it for both designers and developers 🤙🏻
                                  </p>
                              </div>
                              <div className="block">
                                  <p className="text-sm text-gray-500 font-medium">3 days ago</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="w-full p-3">
                      <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
                          <div className="flex flex-col justify-between h-full">
                              <div className="mb-5 block">
                                  <div className="flex flex-wrap mb-4 -m-2">
                                      <div className="w-auto p-2">
                                          <img
                                              src="flaro-assets/images/testimonials/avatar.png"
                                              alt=""
                                          />
                                      </div>
                                      <div className="w-auto p-2">
                                          <h3 className="font-semibold leading-normal">Jacob Jones</h3>
                                          <p className="text-gray-500 uppercase">@brooklysim</p>
                                      </div>
                                  </div>
                                  <p className="text-lg font-medium">
                                      If you have not tried out Flaro App yet, I would definitely
                                      recommend it for both designers and developers 🤙🏻
                                  </p>
                              </div>
                              <div className="block">
                                  <p className="text-sm text-gray-500 font-medium">3 days ago</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="w-full p-3">
                      <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
                          <div className="flex flex-col justify-between h-full">
                              <div className="mb-5 block">
                                  <div className="flex flex-wrap mb-4 -m-2">
                                      <div className="w-auto p-2">
                                          <img
                                              src="flaro-assets/images/testimonials/avatar.png"
                                              alt=""
                                          />
                                      </div>
                                      <div className="w-auto p-2">
                                          <h3 className="font-semibold leading-normal">Jacob Jones</h3>
                                          <p className="text-gray-500 uppercase">@brooklysim</p>
                                      </div>
                                  </div>
                                  <p className="text-lg font-medium">
                                      If you have not tried out Flaro App yet, I would definitely
                                      recommend it for both designers and developers 🤙🏻
                                  </p>
                              </div>
                              <div className="block">
                                  <p className="text-sm text-gray-500 font-medium">3 days ago</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="w-full p-3">
                      <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
                          <div className="flex flex-col justify-between h-full">
                              <div className="mb-5 block">
                                  <div className="flex flex-wrap mb-4 -m-2">
                                      <div className="w-auto p-2">
                                          <img
                                              src="flaro-assets/images/testimonials/avatar.png"
                                              alt=""
                                          />
                                      </div>
                                      <div className="w-auto p-2">
                                          <h3 className="font-semibold leading-normal">Jacob Jones</h3>
                                          <p className="text-gray-500 uppercase">@brooklysim</p>
                                      </div>
                                  </div>
                                  <p className="text-lg font-medium">
                                      If you have not tried out Flaro App yet, I would definitely
                                      recommend it for both designers and developers 🤙🏻
                                  </p>
                              </div>
                              <div className="block">
                                  <p className="text-sm text-gray-500 font-medium">3 days ago</p>
                              </div>
                          </div>
                      </div>
                  </div>



              </Carousel>
              {/* <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                      <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
                          <div className="flex flex-col justify-between h-full">
                              <div className="mb-5 block">
                                  <div className="flex flex-wrap mb-4 -m-2">
                                      <div className="w-auto p-2">
                                          <img
                                              src="flaro-assets/images/testimonials/avatar.png"
                                              alt=""
                                          />
                                      </div>
                                      <div className="w-auto p-2">
                                          <h3 className="font-semibold leading-normal">Jacob Jones</h3>
                                          <p className="text-gray-500 uppercase">@brooklysim</p>
                                      </div>
                                  </div>
                                  <p className="text-lg font-medium">
                                      If you have not tried out Flaro App yet, I would definitely
                                      recommend it for both designers and developers 🤙🏻
                                  </p>
                              </div>
                              <div className="block">
                                  <p className="text-sm text-gray-500 font-medium">3 days ago</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                      <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
                          <div className="flex flex-col justify-between h-full">
                              <div className="mb-5 block">
                                  <div className="flex flex-wrap mb-4 -m-2">
                                      <div className="w-auto p-2">
                                          <img
                                              src="flaro-assets/images/testimonials/avatar2.png"
                                              alt=""
                                          />
                                      </div>
                                      <div className="w-auto p-2">
                                          <h3 className="font-semibold leading-normal">Wade Warren</h3>
                                          <p className="text-gray-500 uppercase">@brooklysim</p>
                                      </div>
                                  </div>
                                  <p className="text-lg font-medium">
                                      If you are thinking of a design partner to help you convert more
                                      customers, Flaro is a great choice.
                                  </p>
                              </div>
                              <div className="block">
                                  <p className="text-sm text-gray-500 font-medium">3 days ago</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                      <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
                          <div className="flex flex-col justify-between h-full">
                              <div className="mb-5 block">
                                  <div className="flex flex-wrap mb-4 -m-2">
                                      <div className="w-auto p-2">
                                          <img
                                              src="flaro-assets/images/testimonials/avatar2.png"
                                              alt=""
                                          />
                                      </div>
                                      <div className="w-auto p-2">
                                          <h3 className="font-semibold leading-normal">Wade Warren</h3>
                                          <p className="text-gray-500 uppercase">@brooklysim</p>
                                      </div>
                                  </div>
                                  <p className="text-lg font-medium">
                                      If you are thinking of a design partner to help you convert more
                                      customers, Flaro is a great choice.
                                  </p>
                              </div>
                              <div className="block">
                                  <p className="text-sm text-gray-500 font-medium">3 days ago</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                      <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
                          <div className="flex flex-col justify-between h-full">
                              <div className="mb-5 block">
                                  <div className="flex flex-wrap mb-4 -m-2">
                                      <div className="w-auto p-2">
                                          <img
                                              src="flaro-assets/images/testimonials/avatar4.png"
                                              alt=""
                                          />
                                      </div>
                                      <div className="w-auto p-2">
                                          <h3 className="font-semibold leading-normal">
                                              Esther Howard
                                          </h3>
                                          <p className="text-gray-500 uppercase">@brooklysim</p>
                                      </div>
                                  </div>
                                  <p className="text-lg font-medium">
                                      Wrike is great to make work visible and collaborative. People
                                      can pass tasks off as they complete their parts, allowing you to
                                      see the flow of work.
                                  </p>
                              </div>
                              <div className="block">
                                  <p className="text-sm text-gray-500 font-medium">3 days ago</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                      <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
                          <div className="flex flex-col justify-between h-full">
                              <div className="mb-5 block">
                                  <div className="flex flex-wrap mb-4 -m-2">
                                      <div className="w-auto p-2">
                                          <img
                                              src="flaro-assets/images/testimonials/avatar5.png"
                                              alt=""
                                          />
                                      </div>
                                      <div className="w-auto p-2">
                                          <h3 className="font-semibold leading-normal">
                                              Albert Flores
                                          </h3>
                                          <p className="text-gray-500 uppercase">@brooklysim</p>
                                      </div>
                                  </div>
                                  <p className="text-lg font-medium">
                                      Ease of use and efficiency of design tools. The ability for the
                                      integrated marketing team to see all aspects of a project.
                                  </p>
                              </div>
                              <div className="block">
                                  <p className="text-sm text-gray-500 font-medium">3 days ago</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                      <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
                          <div className="flex flex-col justify-between h-full">
                              <div className="mb-5 block">
                                  <div className="flex flex-wrap mb-4 -m-2">
                                      <div className="w-auto p-2">
                                          <img
                                              src="flaro-assets/images/testimonials/avatar6.png"
                                              alt=""
                                          />
                                      </div>
                                      <div className="w-auto p-2">
                                          <h3 className="font-semibold leading-normal">Jerome Bell</h3>
                                          <p className="text-gray-500 uppercase">@brooklysim</p>
                                      </div>
                                  </div>
                                  <p className="text-lg font-medium">
                                      Very very easy for customer information to get secured if all
                                      orders are on one device.
                                  </p>
                              </div>
                              <div className="block">
                                  <p className="text-sm text-gray-500 font-medium">3 days ago</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div> */}

          </div>
      </section>
  )
}

export default Testimonials
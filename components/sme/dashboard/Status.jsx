
const Status = () => {
  return (
    <div className=" p-4 m-5 border rounded-lg ">
      <div className="mt-4 mx-5 text-xs text-gray-600">

      </div>
      <div className="w-full py-6">
        {/* <div className="flex">
          <div className="w-1/4">
            <div className="relative mb-2">
              <div className="w-10 h-10 mx-auto bg-green-500 rounded-full text-lg text-white flex items-center">
                <span className="text-center text-white w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    className=" flex align-center text-white items-center text-center justify-center mx-1  align-middle content-center"
                    fill="white"
                    width={30}
                    height={30}
                    viewBox="0 0 48 48"
                  >
                    <path d="M 21.5 5 C 19.585045 5 18 6.5850452 18 8.5 L 18 14.880859 L 13.058594 16.400391 C 11.31815 16.935527 9.8314965 18.088164 8.8769531 19.638672 A 1.50015 1.50015 0 0 0 8.8691406 19.652344 L 2.2148438 30.726562 A 1.50015 1.50015 0 1 0 4.7851562 32.273438 L 11.431641 21.210938 L 11.435547 21.205078 C 12.009135 20.27664 12.900105 19.589701 13.941406 19.269531 L 18 18.019531 L 18 25.5 C 18 25.618933 18.013323 25.734034 18.025391 25.849609 L 15.734375 27.210938 A 1.50015 1.50015 0 1 0 17.265625 29.789062 L 20.255859 28.011719 A 1.50015 1.50015 0 0 0 20.876953 27.642578 L 26.513672 24.292969 A 1.50015 1.50015 0 0 0 26.552734 24.269531 C 27.190197 23.864016 28.000682 23.953287 28.533203 24.486328 C 29.075905 25.02903 29.147251 25.818553 28.767578 26.431641 A 1.50015 1.50015 0 0 0 28.539062 26.724609 C 28.525504 26.738338 28.5161 26.754181 28.501953 26.767578 L 16.130859 38.228516 A 1.50015 1.50015 0 0 0 16.123047 38.234375 C 14.916505 39.368504 13.325479 40 11.669922 40 L 3.5 40 A 1.50015 1.50015 0 1 0 3.5 43 L 11.669922 43 C 14.085061 43 16.409315 42.079302 18.169922 40.427734 L 18.173828 40.425781 L 30.505859 29 L 44.5 29 A 1.50015 1.50015 0 1 0 44.5 26 L 31.953125 26 C 32.06257 24.69685 31.644163 23.355098 30.654297 22.365234 C 29.896557 21.606755 28.920774 21.163794 27.908203 21.052734 C 26.895633 20.941674 25.847628 21.163039 24.943359 21.738281 L 21 24.082031 L 21 16.181641 A 1.50015 1.50015 0 0 0 21 15.773438 L 21 11 C 22.66 11 24 9.66 24 8 L 44.5 8 A 1.50015 1.50015 0 1 0 44.5 5 L 21.5 5 z M 37 10 C 35.041667 10 33.395258 10.984107 32.412109 12.335938 C 31.428961 13.687767 31 15.352273 31 17 C 31 18.647727 31.428961 20.312233 32.412109 21.664062 C 33.395258 23.015893 35.041667 24 37 24 C 38.958333 24 40.604742 23.015894 41.587891 21.664062 C 42.571039 20.312233 43 18.647727 43 17 C 43 15.352273 42.571039 13.687767 41.587891 12.335938 C 40.604742 10.984106 38.958333 10 37 10 z M 37 13 C 38.041666 13 38.645259 13.390893 39.162109 14.101562 C 39.67896 14.812233 40 15.897727 40 17 C 40 18.102273 39.67896 19.187767 39.162109 19.898438 C 38.645259 20.609107 38.041666 21 37 21 C 35.958334 21 35.354741 20.609107 34.837891 19.898438 C 34.32104 19.187767 34 18.102273 34 17 C 34 15.897727 34.32104 14.812233 34.837891 14.101562 C 35.354741 13.390894 35.958334 13 37 13 z M 25 15 A 2 2 0 0 0 25 19 A 2 2 0 0 0 25 15 z" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="text-xs text-center md:text-base">Payment </div>
          </div>
          <div className="w-1/4">
            <div className="relative mb-2">
              <div
                className="absolute flex align-center items-center align-middle content-center"
                style={{
                  width: "calc(100% - 2.5rem - 1rem)",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                  <div
                    className="w-0 bg-green-300 py-1 rounded"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="w-10 h-10 mx-auto bg-green-500 rounded-full text-lg text-white flex items-center">
                <span className="text-center text-white w-full">
                  <svg
                    aria-hidden="true"
                    className=" flex align-center text-white items-center text-center justify-center mx-1  align-middle content-center"
                    fill="white"
                    width={30}
                    height={30}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="text-xs text-center md:text-base">Finding sme</div>
          </div>
          <div className="w-1/4">
            <div className="relative mb-2">
              <div
                className="absolute flex align-center items-center align-middle content-center"
                style={{
                  width: "calc(100% - 2.5rem - 1rem)",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                  <div
                    className="w-0 bg-green-300 py-1 rounded"
                    style={{ width: "33%" }}
                  />
                </div>
              </div>
              <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                <span className="text-center text-gray-600 w-full">
                  <svg
                    aria-hidden="true"
                    className=" flex align-center text-gray-600 items-center text-center justify-center mx-1  align-middle content-center"
                    fill="black"
                    width={28}
                    height={28}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="text-xs text-center md:text-base">sme Found</div>
          </div>
          <div className="w-1/4">
            <div className="relative mb-2">
              <div
                className="absolute flex align-center items-center align-middle content-center"
                style={{
                  width: "calc(100% - 2.5rem - 1rem)",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                  <div
                    className="w-0 bg-green-300 py-1 rounded"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
              <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                <span className="text-center text-gray-600 w-full">
                  <svg
                    className="w-full fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path
                      className="heroicon-ui"
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="text-xs text-center md:text-base">Doubt Solved</div>
          </div>
        </div> */}
        <div>
<div>
 You are not live to any sme yet. Please click on the button below to enter the world
</div>
        </div>
      </div>
    </div>
  );
}

export default Status
import ChatBox from "./ChatBox";


const Chatroom = () => {
  return (
    <main className=" top-0 h-screen  w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
      <div className="flex-1 overflow-hidden">
        <div className="react-scroll-to-bottom--css-dtxai-79elbk h-full dark:bg-gray-800">
          <div className="react-scroll-to-bottom--css-dtxai-1n7m0yu">
            <div className="flex flex-col items-center text-sm h-full dark:bg-gray-800">
              <div className="w- border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group dark:bg-gray-800">
               
              </div>
              <div className="w- border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group bg-gray-50 dark:bg-[#444654]">
               
              </div>
              <div className="w-full h-48 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient">
        <ChatBox/>
     
      </div>
    </main>
  );
}

export default Chatroom
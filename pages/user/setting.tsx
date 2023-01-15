import { Leftbar } from "../../components/user/Leftbar";
const Setting = () => {
  return (
    <div className="bg-white flex w-full gap-5">
      <Leftbar />
      <div className="w-full h-screen overflow-scroll">
        <div className=" border-2 h-max w-[85%] my-4 mx-auto rounded-2xl bg-white">
          <div className="text-4xl font-semibold mb-8 m-4">
            Hey, <span className="text-blue-500">JUNAID</span>
          </div>

          <div className="w-full flex justify-start">
            <div className=" w-full px-4 grid grid-cols-2">
              <div className="w-full flex gap-3">
                <label className="text-2xl w-[90px] font-semibold m-4">
                  Name
                </label>
                <input
                  className="border-2   w-[330px]  border-gray-300 p-2 rounded-lg m-4"
                  type="text"
                  placeholder="JUNAID"
                />
              </div>
              <div className="w-full flex gap-3">
                <label className="text-2xl w-[90px] font-semibold m-4">
                  Class
                </label>
                <select className="border-2  w-[330px]   border-gray-300 p-2 rounded-lg m-4">
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>12+</option>
                </select>
              </div>
              <div className="w-full flex gap-3">
                <label className="text-2xl w-[90px] font-semibold m-4">
                  Board
                </label>
                <select className="border-2  w-[330px]   border-gray-300 p-2 rounded-lg m-4">
                  <option>CBSE</option>
                  <option>ICSE</option>
                  <option>State Board</option>
                </select>
              </div>
              <div className="w-full flex gap-3">
                <label className="text-2xl w-[90px] font-semibold m-4">
                  Target
                </label>
                <select className="border-2  w-[330px]   border-gray-300 p-2 rounded-lg m-4">
                  <option>JEE MAINS</option>
                  <option>JEE ADVANCED</option>
                  <option>NDA</option>
                  <option>Board</option>
                </select>
              </div>
              <div className="w-full flex gap-3">
                <label className="text-2xl w-[90px] font-semibold m-4">
                  School
                </label>
                <input
                  className="border-2   w-[330px]  border-gray-300 p-2 rounded-lg m-4"
                  type="text"
                  placeholder="School Name"
                />
              </div>
              <div className="w-full flex gap-3">
                <label className="text-2xl w-[90px] font-semibold m-4">
                  City
                </label>
                <input
                  className="border-2   w-[330px]  border-gray-300 p-2 rounded-lg m-4"
                  type="text"
                  placeholder="City Name"
                />
              </div>

              <div className="w-full flex gap-3">
                <label className="text-2xl w-[90px] font-semibold m-4">
                  Phone
                </label>
                <input
                  className="border-2   w-[330px]  border-gray-300 p-2 rounded-lg m-4"
                  type="number"
                  placeholder="9922993344"
                />
              </div>
              <div className="w-full flex gap-3">
                <label className="text-2xl w-[90px] font-semibold m-4">
                  Email
                </label>
                <input
                  className="border-2   w-[330px]  bg-gray-300 border-gray-300 p-2 rounded-lg m-4 cursor-not-allowed"
                  type="email"
                  value="junaidmalik9069@gmail.com"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="flex my-10">
            <button className="bg-blue-500 hover:bg-blue-600 duration-300 ease-in-out text-white w-[240px] my-5 px-4 mx-5 py-2 rounded-lg">
              Save Changes
            </button>

            <button className=" duration-300 ease-in-out border-2 border-blue-400  hover:ring-4  w-[240px] my-5 px-4 mx-5 py-2 rounded-lg">
              Cancel
            </button>
          </div>
        </div>
        <div className=" border-2 h-max w-[85%] my-4 mx-auto rounded-2xl bg-white">
          <div className="text-4xl font-semibold mb-8 m-4">Change Password</div>

          <div className=" w-full px-4 grid grid-cols-2 gap-5">
            <div className="w-full flex ">
              <label className="text-2xl w-[180px] font-semibold m-4">
                Old Password
              </label>
              <input
                className="border-2   w-[330px]  border-gray-300 p-2 rounded-lg m-4"
                type="password"
                placeholder="Old Password"
              />
            </div>
            <div className="w-full flex ">
              <label className="text-2xl w-[180px] b font-semibold m-4">
                New Password
              </label>
              <input
                className="border-2   w-[330px]  border-gray-300 p-2 rounded-lg m-4"
                type="password"
                placeholder="New Password"
              />
            </div>
          </div>
          <div className="flex my-5">
            <button className="bg-blue-500 hover:bg-blue-600 duration-300 ease-in-out text-white w-[240px] my-5 px-4 mx-5 py-2 rounded-lg">
              Save Changes
            </button>

            <button className=" duration-300 ease-in-out border-2 border-blue-400  hover:ring-4  w-[240px] my-5 px-4 mx-5 py-2 rounded-lg">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;

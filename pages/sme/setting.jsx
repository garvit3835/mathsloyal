import { Leftbar } from "../../components/sme/Leftbar";
const Setting = () => {
  return (
    <div className="bg-white flex w-full gap-5">
      <Leftbar />
      <div className="w-full h-screen overflow-scroll pt-12 px-3">
        <div className=" border-2 h-max w-full md:w-[85%] my-4 mx-auto rounded-2xl bg-white">
          <div className="text-4xl font-semibold mb-8 m-4">
            Hey, <span className="text-blue-500 mx-1">Tariq</span>
            (sme)
          </div>

          <div className="w-full flex justify-start">
            <div className=" w-full md:px-4 grid lg:grid-cols-2">
              <div className="w-full flex gap-3">
                <label className="text-xl w-[40%] md:text-2xl md:w-[90px] font-semibold m-4">
                  Name
                </label>
                <input
                  className="border-2 w-[60%]  md:w-[330px]  border-gray-300 p-2 rounded-lg m-4"
                  type="text"
                  placeholder="Tariq"
                />
              </div>
              <div className="w-full flex gap-3 items-center">
                <label className="text-xl md:text-2xl w-[25%] md:w-[90px] font-semibold m-4">
                  Class
                </label>
                <fieldset className="w-[75%] flex gap-2 h-max">


    <div>
      <input type="checkbox" id="ninth" name="ninth" />
<label htmlFor="ninth">9th</label>
    </div>
    <div>
      <input type="checkbox" id="tenth" name="tenth" />
<label htmlFor="tenth">10th</label>
    </div>
    <div>
      <input type="checkbox" id="eleventh" name="eleventh" />
<label htmlFor="eleventh">11th</label>
    </div>
    <div>
      <input type="checkbox" id="tweleth" name="tweleth" />
<label htmlFor="tweleth">12th</label>
    </div>


</fieldset>
              </div>
              <div className="w-full flex gap-3">
                <label className="text-xl md:text-2xl md:w-[90px] font-semibold m-4">
                  Board
                </label>
                <select className="border-2  md:w-[330px]   border-gray-300 p-2 rounded-lg m-4">
                  <option>CBSE</option>
                  <option>ICSE</option>
                  <option>State Board</option>
                </select>
              </div>
              <div className="w-full flex gap-3">
                <label className="text-xl md:text-2xl md:w-[90px] font-semibold m-4">
                  Target
                </label>
                <select className="border-2  md:w-[330px]   border-gray-300 p-2 rounded-lg m-4">
                  <option>JEE MAINS</option>
                  <option>JEE ADVANCED</option>
                  <option>NDA</option>
                  <option>Board</option>
                </select>
              </div>
           
              <div className="w-full flex gap-3">
                <label className="text-xl md:text-2xl md:w-[90px] font-semibold m-4">
                  City
                </label>
                <input
                  className="border-2   md:w-[330px]  border-gray-300 p-2 rounded-lg m-4"
                  type="text"
                  placeholder="City Name"
                />
              </div>

              <div className="w-full flex gap-3">
                <label className="text-xl md:text-2xl md:w-[90px] font-semibold m-4">
                  Phone
                </label>
                <input
                  className="border-2   md:w-[330px]  border-gray-300 p-2 rounded-lg m-4"
                  type="number"
                  placeholder="9922993344"
                />
              </div>
              <div className="w-full flex gap-3">
                <label className="text-xl md:text-2xl md:w-[90px] font-semibold m-4">
                  Email
                </label>
                <input
                  className="border-2   md:w-[330px]  bg-gray-300 border-gray-300 p-2 rounded-lg m-4 cursor-not-allowed"
                  type="email"
                  value="tariq@gmail.com"
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
        <div className=" border-2 h-max w-full md:w-[85%] my-4 mx-auto rounded-2xl bg-white">
          <div className="text-4xl font-semibold mb-8 m-4">Change Password</div>

          <div className=" w-full px-4 grid lg:grid-cols-2 gap-5">
            <div className="w-full flex ">
              <label className="text-xl md:text-2xl lg:w-[180px] font-semibold lg:m-4">
                Old Password
              </label>
              <input
                className="border-2   lg:w-[330px]  border-gray-300 p-2 rounded-lg mx-1 lg:m-4"
                type="password"
                placeholder="Old Password"
              />
            </div>
            <div className="w-full flex ">
              <label className="text-xl md:text-2xl lg:w-[180px] b font-semibold lg:m-4">
                New Password
              </label>
              <input
                className="border-2   lg:w-[330px]  border-gray-300 p-2 rounded-lg mx-1  lg:m-4"
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

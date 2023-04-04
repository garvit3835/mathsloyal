import { Leftbar } from "../../components/sme/Leftbar";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";

const Setting = ({ tutor, setTutor }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [info, setInfo] = useState({
    name: "",
    class: "",
    board: "",
    target: "",
    city: "",
    phone: "",
  })
  const handleChange = (e) => {
    setTutor({
      ...tutor,
      user: {
        ...tutor.user,
        [e.target.name]: e.target.value
      }
    })
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    })
    console.log(info)
  }
  const handleClass = (e) => {

    setInfo({
      ...info,
      classs: {
        ...info.class,
        [e.target.name]: e.target.value
      }
    })
    console.log(info)
  }
  const handleBoard = (e) => {

    setInfo({
      ...info,
      board: {
        ...info.board,
        [e.target.name]: e.target.value
      }
    })
    console.log(info)
  }
  const handleTarget = (e) => {
    setInfo({
      ...info,
      target: {
        ...info.target,
        [e.target.name]: e.target.value
      }
    })
    console.log(info)
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    fetch("/api/tutor/updateTutor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        class: info?.class,
        board: info?.board,
        target: info?.target,
        city: info?.city,
        phone: info?.phone,
        tutorId: tutor?.user?._id
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        setTutor({
          ...tutor,
          user: data
        })
      })


  }
  useEffect(() => {
    console.log(tutor)
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("mysme")) {
        router.push("/sme/login");
        setIsLoading(false);
      } else {
        if (typeof window !== "undefined") {
          // const token = localStorage.getItem("token");
          const user = localStorage.getItem("mysme");
          const user1 = JSON.parse(user);
          // console.log(student)
          if (user1?.token && user1?.token != "undefined" && user1?.token != null) {
            console.log(user1?.token)
            fetch("/api/tutor/checkTut", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token: user1?.token
              })
            }).then((res) => res.json())
              .then((res) => {
                if (res.success) {
                  // router.push("/sme");
                  setIsLoading(false)
                  console.log("success")
                } else {
                  router.push("/sme/login");
                  setIsLoading(false)
                }
              }
              ).catch((err) => {
                console.log(err);
              }
              )
          }


          // if(user?.email && user?.token && user?.token!="undefined"){
          //   Router.push("/user");
          // }

          // if(token && token!="undefined"){
          //   Router.push("/user");
          // }

        }
      }
    }

  }, [])


  return (
    <div className="bg-white flex w-full gap-5">
      <Leftbar />
      {isLoading && <Loading />}
      <div className="w-full h-screen overflow-scroll pt-12 px-3">
        <div className=" border-2 h-max w-[95%] md:w-[85%]  my-4 mx-auto rounded-2xl bg-white">

          <div className="text-2xl   md:text-4xl font-semibold mb-4 m-2  md:m-4">

            Hey, <span className="text-blue-500 mx-1">{tutor?.user?.name}</span>
            (sme)
          </div>

          <div className="w-full flex justify-start">
            <div className=" w-full md:px-4 grid lg:grid-cols-2">
              <div className="w-full flex gap-3">
                <label className="text-xl w-[30%] md:text-2xl md:w-[90px] font-semibold m-4">
                  Name
                </label>
                <input
                  className="border-2 w-[70%]  md:w-[330px]  border-gray-300 p-2 rounded-lg m-4"
                  name="name"
                  disabled
                  value={tutor?.user?.name}
                  type="text"
                  placeholder={tutor?.user?.name}
                />
              </div>
              <div className="w-full flex gap-3 items-center">
                <label className="text-xl md:text-2xl w-[30%] md:w-[90px] font-semibold m-4">
                  Class
                </label>
                <fieldset className="w-[70%] flex gap-2 h-max" name="class"  >


                  <div>
                    <input type="checkbox" id="ninth" name="ninth" value='9' onChange={handleClass}
                      checked={tutor?.user?.class?.ninth}
                    />
                    <label htmlFor="ninth">9th</label>
                  </div>
                  <div>
                    <input type="checkbox" id="tenth" name="tenth" value="10" onChange={handleClass}
                      checked={tutor?.user?.class?.tenth}
                    />
                    <label htmlFor="tenth">10th</label>
                  </div>
                  <div>
                    <input type="checkbox" id="eleventh" name="eleventh" value="11" onChange={handleClass}
                      checked={tutor?.user?.class?.eleventh}
                    />
                    <label htmlFor="eleventh">11th</label>
                  </div>
                  <div>
                    <input type="checkbox" id="tweleth" name="tweleth" value="12" onChange={handleClass}
                      checked={tutor?.user?.class?.tweleth}
                    />
                    <label htmlFor="tweleth">12th</label>
                  </div>


                </fieldset>
              </div>
              <div className="w-full items-center flex gap-3">
                <label className="text-xl w-[30%] md:text-2xl md:w-[90px] font-semibold m-4">
                  Board
                </label>
                <fieldset className="w-[70%] flex gap-2 h-max" name="board" onChange={handleBoard} >
                  <input type="checkbox" id="cbse" name="board" value="cbse"
                    checked={tutor?.user?.board?.cbse}
                    onChange={handleBoard}
                  />
                  <label htmlFor="cbse">CBSE</label>
                  <input type="checkbox" id="icse" name="board" value="icse"
                    checked={tutor?.user?.board?.icse}
                    onChange={handleBoard}
                  />
                  <label htmlFor="icse">ICSE</label>
                  <input type="checkbox" id="state" name="board" value="state"
                    checked={tutor?.user?.board?.state}
                    onChange={handleBoard}
                  />
                  <label htmlFor="state">State Board</label>

                </fieldset>
                {/* <select className="border-2 w-[70%]  md:w-[330px]   border-gray-300 p-2 rounded-lg m-4">
                  <option>CBSE</option>
                  <option>ICSE</option>
                  <option>State Board</option>
                </select> */}
              </div>
              <div className="w-full flex gap-3">
                <label className="text-xl w-[30%] md:text-2xl md:w-[90px] font-semibold m-4">
                  Target
                </label>
                <fieldset className="w-[70%] flex gap-2 h-max" name="target" onChange={handleTarget} >
                  <input type="checkbox" id="jeemains" name="jeemains" value="jeemains"
                    checked={tutor?.user?.target?.jeemains}
                    onChange={handleTarget}
                  />
                  <label htmlFor="jeemains">JEE MAINS</label>
                  <input type="checkbox" id="jeeadv" name="jeeadv" value="jeeadv"
                    checked={tutor?.user?.target?.jeeadv}
                    onChange={handleTarget}
                  />
                  <label htmlFor="jeeadv">JEE ADVANCED</label>
                  <input type="checkbox" id="nda" name="nda" value="nda"
                    checked={tutor?.user?.target?.nda}
                    onChange={handleTarget}
                  />
                  <label htmlFor="nda">NDA</label>
                  <input type="checkbox" id="board" name="board" value="board"
                    checked={tutor?.user?.target?.board}
                    onChange={handleTarget}
                  />
                  <label htmlFor="board">Board</label>
                  {/* 
                  <option
                  >JEE MAINS</option>
                  <option>JEE ADVANCED</option>
                  <option>NDA</option>
                  <option>Board</option> */}
                </fieldset>
              </div>

              <div className="w-full flex gap-3">
                <label className="text-xl md:text-2xl w-[30%] md:w-[90px] font-semibold m-4">
                  City
                </label>
                <input
                  className="border-2   md:w-[330px] w-[70%]  border-gray-300 p-2 rounded-lg m-4"
                  name="city"
                  onChange={handleChange}
                  value={tutor?.user?.city}

                  type="text"
                  placeholder="City Name"
                />
              </div>

              <div className="w-full flex gap-3">
                <label className="text-xl md:text-2xl w-[30%] md:w-[90px] font-semibold m-4">
                  Phone
                </label>
                <input
                  className="border-2   md:w-[330px] w-[70%]  border-gray-300 p-2 rounded-lg m-4"
                  type="number"
                  name="phone"
                  onChange={handleChange}
                  value={tutor?.user?.phone}
                  placeholder="9922993344"
                />
              </div>
              <div className="w-full flex gap-3">
                <label className="text-xl md:text-2xl w-[30%] md:w-[90px] font-semibold m-4">
                  Email
                </label>
                <input
                  className="border-2   md:w-[330px] w-[70%]  bg-gray-300 border-gray-300 p-2 rounded-lg m-4 cursor-not-allowed"
                  type="email"
                  value={tutor?.user?.email}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center md:justify-start gap-2 my-5 md:my-10">
            <button className="bg-blue-500 hover:bg-blue-600 duration-300 ease-in-out text-white w[60%] md:w-[240px] md:my-5 px-2 md:px-4 md:mx-5 py-2 rounded-lg"
              onClick={handleSubmit}
            >
              Save Changes
            </button>

            <button className=" duration-300 ease-in-out border-2 border-blue-400  hover:ring-4 w-[40%]  md:w-[240px] md:my-5 px-2 md:px-4 md:mx-5 py-2 rounded-lg">
              Cancel
            </button>
          </div>
        </div>
        <div className=" border-2 h-max w-[95%] md:w-[85%] my-4 mx-auto rounded-2xl bg-white">
          <div className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8 m-2  md:m-4">Change Password</div>

          <div className=" w-full px-4 grid lg:grid-cols-2 gap-2 md:gap-5">
            <div className="w-full flex ">
              <label className="text-lg  w-[40%]  md:text-2xl lg:w-[180px] font-semibold m-2  md:m-4">
                Old Password
              </label>
              <input
                className="border-2  w-[60%]  lg:w-[330px]  border-gray-300 p-2 rounded-lg m-2  md:m-4"
                type="password"
                placeholder="Old Password"
              />
            </div>
            <div className="w-full flex ">
              <label className="text-lg  w-[40%]  md:text-2xl lg:w-[180px] b font-semibold m-2  md:m-4">
                New Password
              </label>
              <input
                className="border-2  w-[60%]  lg:w-[330px]  border-gray-300 p-2 rounded-lg m-2  md:m-4"
                type="password"
                placeholder="New Password"
              />
            </div>
          </div>
          <div className="flex w-full justify-center gap-2 my-5 md:justify-start md:my-10">
            <button className="bg-blue-500 hover:bg-blue-600 duration-300 ease-in-out text-white w[60%] md:w-[240px] md:my-5 px-2 md:px-4 md:mx-5 py-2 rounded-lg">
              Save Changes
            </button>

            <button className=" duration-300 ease-in-out border-2 border-blue-400  hover:ring-4 w-[40%]  md:w-[240px] md:my-5 px-2 md:px-4 md:mx-5 py-2 rounded-lg">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;

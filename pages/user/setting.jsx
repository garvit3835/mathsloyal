import { Leftbar } from "../../components/user/Leftbar";
import Askdoubt from "../../components/user/Askdoubt";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
const Setting = ({ student, setStudent }) => {
  const [isLoading, setIsLoading] = useState(true)

  console.log(student)
  const [ask, setAsk] = useState("hidden");
  const [text, setText] = useState("");
  const [info, setInfo] = useState({
    name: "",
    class: "",
    board: "",
    target: "",
    school: "",
    city: "",
    phone: "",
  })
  const handleChange = (e) => {
    setStudent({
      ...student,
      user: {
        ...student.user,
        [e.target.name]: e.target.value
      }
    })
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    })
    console.log(info)
  }
  const handleSubmit = (e) => {

    e.preventDefault()
    fetch("/api/student/updateStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: info?.name,
        class: info?.class,
        board: info?.board,
        target: info?.target,
        school: info?.school,
        city: info?.city,
        phone: info?.phone,
        studentId: student?.user?._id
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        setStudent({
          ...student,
          user: data
        })
      })


  }
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
    <div className="bg-white pt-10 md:pt-0 flex w-full ">
      {isLoading && <Loading />}
      <Askdoubt ask={ask} setAsk={setAsk} student={student} text={text} setText={setText} />
      <Leftbar ask={ask} setAsk={setAsk} setStudent={setStudent} />
      <div className="w-full h-screen overflow-scroll">
        <div className=" border-2 h-max w-[95%] md:w-[85%]  my-4 mx-auto rounded-2xl bg-white">
          <div className="text-2xl   md:text-4xl font-semibold mb-8 m-2  md:m-4">
            Hey, <span className="text-blue-500">{
              student?.user?.name
            }
            </span>
          </div>

          <div className="w-full flex justify-start">
            <div className=" w-full px-2 md:px-4 grid lg:grid-cols-2">
              <div className="w-full flex gap-1  md:gap-3">
                <label className="text-lg w-[30%]  md:text-2xl md:w-[90px] font-semibold m-2  md:m-4">
                  Name
                </label>
                <input
                  className="border-2 w-[70%]   md:w-[330px]  border-gray-300 p-2 rounded-lg m-2  md:m-4"
                  type="text"
                  placeholder={student?.user?.name}
                  name="name"
                  value={student?.user?.name ? student?.user?.name : info.name}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-1  md:gap-3">
                <label className="text-lg w-[30%]  md:text-2xl md:w-[90px] font-semibold m-2  md:m-4">
                  Class
                </label>
                <select className="border-2 w-[70%]  md:w-[330px]   border-gray-300 p-2 rounded-lg m-2  md:m-4"
                  name="class"
                  value={student?.user?.class ? student?.user?.class : info.class}
                  onChange={handleChange}
                >
                  <option value="select your class" >Select your class</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="10">11</option>
                  <option value="11">12</option>
                  <option value="12+">12+</option>
                </select>
              </div>
              <div className="w-full flex gap-1  md:gap-3">
                <label className="text-lg  w-[30%]  md:text-2xl md:w-[90px] font-semibold m-2  md:m-4">
                  Board
                </label>
                <select className="border-2 w-[70%]  md:w-[330px]   border-gray-300 p-2 rounded-lg m-2  md:m-4"
                  name="board"
                  value={student?.user?.board ? student?.user?.board : info.board}
                  onChange={handleChange}
                >
                  <option value="select your board">Select your Board</option>

                  <option value="cbse">CBSE</option>
                  <option value="icse">ICSE</option>
                  <option value="state board">State Board</option>
                </select>
              </div>
              <div className="w-full flex gap-1  md:gap-3">
                <label className="text-lg  w-[30%]  md:text-2xl md:w-[90px] font-semibold m-2  md:m-4">
                  Target
                </label>
                <select className="border-2 w-[70%]  md:w-[330px]   border-gray-300 p-2 rounded-lg m-2  md:m-4"
                  name="target"
                  value={student?.user?.target ? student?.user?.target : info.target}

                  onChange={handleChange}
                >
                  <option value="select your target">Select your Target</option>

                  <option value="jee mains">JEE MAINS</option>
                  <option value="jee advanced">JEE ADVANCED</option>
                  <option value="nda">NDA</option>
                  <option value="board">Board</option>
                </select>
              </div>
              <div className="w-full flex gap-1  md:gap-3">
                <label className="text-lg  w-[30%]  md:text-2xl md:w-[90px] font-semibold m-2  md:m-4">
                  School
                </label>
                <input
                  className="border-2 w-[70%]  md:w-[330px]  border-gray-300 p-2 rounded-lg m-2  md:m-4"
                  type="text"
                  placeholder="School Name"
                  name="school"
                  value={student?.user?.school ? student?.user?.school : info.school}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-1  md:gap-3">
                <label className="text-lg  w-[30%]  md:text-2xl md:w-[90px] font-semibold m-2  md:m-4">
                  City
                </label>
                <input
                  className="border-2 w-[70%]   md:w-[330px]  border-gray-300 p-2 rounded-lg m-2  md:m-4"
                  type="text"
                  placeholder="City Name"
                  name="city"
                  value={student?.user?.city ? student?.user?.city : info.city}
                  onChange={handleChange}
                />
              </div>

              <div className="w-full flex gap-1  md:gap-3">
                <label className="text-lg  w-[30%]  md:text-2xl md:w-[90px] font-semibold m-2  md:m-4">
                  Phone
                </label>
                <input
                  className="border-2  w-[70%]  md:w-[330px]  border-gray-300 p-2 rounded-lg m-2  md:m-4"
                  type="number"
                  placeholder="9922993344"
                  name="phone"
                  value={student?.user?.phone ? student?.user?.phone : info.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-1  md:gap-3">
                <label className="text-lg  w-[30%]  md:text-2xl md:w-[90px] font-semibold m-2  md:m-4">
                  Email
                </label>
                <input
                  className="border-2  w-[70%]  md:w-[330px]  bg-gray-300 border-gray-300 p-2 rounded-lg m-2  md:m-4 cursor-not-allowed"
                  type="email"
                  value={student?.user?.email}
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

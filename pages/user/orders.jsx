import { Leftbar } from "../../components/user/Leftbar";
import Askdoubt from "../../components/user/Askdoubt";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";
const Orders = ({ student, setStudent }) => {
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
      <Askdoubt ask={ask} setAsk={setAsk} student={student} text={text} setText={setText} />
      <Leftbar ask={ask} setAsk={setAsk} setStudent={setStudent} />
      {isLoading && <Loading />}
      <div className="w-full">
        <div className="text-3xl font-semibold m-6  px-10 text-blue-500">
          Order History
        </div>
        <div className="w-4/5 p-5 border mx-auto my-5 bg-white shadow rounded-2xl ">
          <table className="w-full ">
            <thead>
              <tr>
                <th className="p-3 font-bold uppercase bg-white w-1/5 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Order ID
                </th>
                <th className="p-3 font-bold uppercase bg-white w-1/5 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Order Info
                </th>
                <th className="p-3 font-bold uppercase bg-white w-1/5 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Date
                </th>
                <th className="p-3 font-bold uppercase bg-white w-1/5 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Amount
                </th>
                <th className="p-3 font-bold uppercase bg-white w-1/5 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="p-3 text-gray-600 text-center border border-b block lg:table-cell relative lg:static">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 underline"
                  >
                    #123456
                  </a>
                </td>
                <td className="p-3 text-gray-600 text-center border border-b block lg:table-cell relative lg:static">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 underline"
                  >
                    Order Info
                  </a>
                </td>
                <td className="p-3 text-gray-600 text-center border border-b block lg:table-cell relative lg:static">
                  12/12/2020
                </td>
                <td className="p-3 text-gray-600 text-center border border-b block lg:table-cell relative lg:static">
                  $0.3
                </td>
                <td className="p-3 text-gray-600 text-center border border-b block lg:table-cell relative lg:static">
                  <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                    Paid
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;

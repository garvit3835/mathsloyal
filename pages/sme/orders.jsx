import { Leftbar } from "../../components/sme/Leftbar";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";


const Orders = () => {
  const [isLoading, setIsLoading] = useState(true)

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
    <div className="bg-white flex ">
      <Leftbar />
      {isLoading && <Loading />}
      <div className="w-full pt-10">
        <div className="text-3xl font-semibold m-6 mx-20 text-blue-500">
          Earning History
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

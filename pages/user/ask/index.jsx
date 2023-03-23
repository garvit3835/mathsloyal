import Navbar from "../../../components/Navbar";
import { useState, useEffect } from "react";
import Image from "next/image";


const Ask = () => {
	  const [file, setFile] = useState({});
    const [preview, setPreview] = useState("");
    const [first, setFirst] = useState([]);
    const [text, setText] = useState("")
    const [ans, setAns] = useState("")

    const PreviewImage = () => {
      let saida = document.getElementById("file");
      setFile(saida.files);
      for (let index = 0; index < saida?.files.length; index++) {
        const element = saida?.files[index];
        console.log(element);
        setFirst([...first, URL.createObjectURL(element)]);
      }
      console.log(first);
    };
    useEffect(() => {
      console.log(first);
    }, [first]);
const getAnswer = async () => {
setAns("answering...")
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
 text}
    ),
  });
  const data = await res.json();
// setText(data.text)
setAns(data.text)
  console.log(data);
}

	return (
    <div className="w-full justify-center pt-10 md:pt-0">
      <Navbar />
      <div className="w-full  md:flex justify-center mt-5">
        <div className="block pt-5 w-4/5 mb-5 mx-auto md:hidden text-[40px]  md:ml-5 font-semibold leading-[49px]">
          <span className="text-[#39bdff]">Trust</span> make us different from others
        </div>
       {ans=="" && <div className=" bg-white mx-5 md:w-[700px] rounded-md p-[20px] border-2 border-[#ebf2f7]">
          <div className="flex w-full justify-between mb-4 font-semibold text-md">
            <div>Ask your Doubt</div>
          </div>
          <div>
            <textarea
              placeholder="write your question"
              className="bg-gray-100 text-gray-500 w-full rounded-xl px-4 py-1 h-[168px] focus:bg-white ease-in-out duration-300"
              draggable="true"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div>
              <label htmlFor="file" className="w-max ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-500 "
                >
                  <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 13.5 13.333984 L 11 16.667969 L 9.5 14.667969 L 7 18 L 17 18 L 13.5 13.333984 z" />
                </svg>
              </label>

              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg, image/gif, image/svg,image/webp,image/svg+xml"
                name="file"
                id="file"
                className="hidden w-max"
                onChange={PreviewImage}
              />
            </div>
          </div>
          {/* <img id="frame" src="" width="600px" height="100px" /> */}
          {/* {
          file.length > 0 && file.map((item)=>{
 <Image
   src={URL.createObjectURL(item)}
   width={600}
   height={100}
   alt="pic"
   className="h-[300px]  w-max"
 />;})
        } */}
          {/* <div id="galeria"></div> */}
          <div className="flex gap-2">
            {/* {Object.keys(file).length > 0 &&
            Object.keys(file).map((item) => {
              console.log(file[item]);
              return (
               URL && <Image
                key={item}
                  src={URL.createObjectURL(file[item])}
                  width={300}
                  height={100}
                  alt="pic"
                  className="h-max  w-[200px]"
                  onClick={() => {
                    console.log(file[item]);


                  }
                  }
                />
              );
            })} */}
            {first.map((item) => {
              return (
                <div key={item} className=" w-[100px] relative mb-5 mt-2">
                  <Image
                    src={item}
                    width={300}
                    height={100}
                    alt="pic"
                    className="h-[100px]  w-[100px]"
                  />
                  {/* <div className="text-[8px]">{item.split("/").pop()}</div> */}
                  <div
                    className="absolute top-0 text-white hover:text-gray-500 cursor-pointer text-4xl duration-300 ease-in-out right-3 "
                    onClick={() => {
                      setFirst([...first.filter((i) => i !== item)]);
                    }}
                  >
                    X
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mb-4 mt-2">
            <select className="bg-gray-100  w-[123px] px-2  py-1 rounded-full">
              <option value="" key="" className="px-">
                Maths
              </option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#333b48] hover:bg-[#22272e] duration-300 ease-in-out rounded-full px-6 py-2 text-white"
            onClick={getAnswer}

          >
            {file.length? "Proceed to pay":"Proceed to answer"}
          </button>
        </div>}
        {ans == "answering..."  && <div className=" bg-white mx-5 md:w-[700px] mb-5 rounded-md p-[20px] border-2 border-[#ebf2f7]">
Getting your answer... from our AI
</div>
        }
        {ans !=="answering..." && ans !=="" &&<div className=" bg-white mx-5 md:w-[700px] mb-5 rounded-md p-[20px] border-2 border-[#ebf2f7]">
          <div className="flex w-full justify-between mb-1 font-semibold text-md">
            <div>Our AI answer</div>
          </div>
            <pre>{ans}</pre>

          <button
            type="submit"
            className="bg-[#333b48] hover:bg-[#22272e] duration-300 ease-in-out rounded-full px-6 mt-5 py-2 text-white"
            // onClick={}
          >
Not satisfied? Ask by our sme
          </button>
        </div>}
        <div className="hidden md:block text-[40px] w-[320px] ml-5 font-semibold leading-[49px]">
          <span className="text-[#39bdff]">Trust</span> make us different from others
        </div>
      </div>
    </div>
  );
}

export default Ask;

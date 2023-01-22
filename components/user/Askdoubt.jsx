import { useState ,useEffect} from "react";
import Image from "next/image";

const Askdoubt = ({ask,setAsk}) => {
  const [file, setFile] = useState({});
  const [preview, setPreview] = useState('');
  const [first, setFirst] = useState([])
  const PreviewImage = ()=>{
    // const file = document.getElementById("file") as HTMLInputElement;
    // let frame = document.getElementById("frame") as HTMLIFrameElement;
    //     frame.src = URL.createObjectURL(event.target.files[0]);
// console.log(URL.createObjectURL(event.target.files[0]));
// setFile(event.target.files)
    // setPreview(URL.createObjectURL(event.target.files[0]));
        let  saida = document.getElementById("file");
        // let quantos = saida.files.length;
        // console.log(saida.files);
        setFile(saida?.files)
        // console.log(saida.files);
        // for (let i = 0; i < quantos; i++) {
        //   let urls = URL.createObjectURL(event.target.files[i]);
        //   setFile([...file, urls])
        //   document.getElementById("galeria").innerHTML +=
        //   `<img src="${urls}">`;
        // }
        for (let index = 0; index < saida?.files.length; index++) {
          const element = saida?.files[index];
          console.log(element); 
          setFirst([...first,URL.createObjectURL(element)])
        }
        console.log(first);

  
  }
  useEffect(() => {
    console.log(first);
  }, [first])


  return (
    <div className={`w-full  flex justify-center pt-[65px] h-full absolute bg-[rgba(79,179,246,.8)] z-40 ${ask}`}>
      <div className="absolute bg-white w-4/5 md:w-[700px] rounded-md p-[20px]">
        <div className="flex w-full justify-between mb-4 font-semibold text-md">
          <div>Ask your Doubt</div>
          <div onClick={()=>{setAsk('hidden')}} className='cursor-pointer hover:bg-gray-200 rounded-full px-2'>X</div>
        </div>
        <div>
          <textarea
            placeholder="write your question"
            className="bg-gray-100 text-gray-500 w-full rounded-xl px-4 py-1 h-[168px] focus:bg-white ease-in-out duration-300"
            draggable="true"
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
        >
          Proceed to pay
        </button>
      </div>
    </div>
  );
}

export default Askdoubt
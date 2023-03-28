import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";


const Askdoubt = ({ ask, setAsk, student, tutor, Question }) => {
    const router = useRouter();
    const [file, setFile] = useState({});
    const [text, setText] = useState('')
    const [preview, setPreview] = useState('');
    const [first, setFirst] = useState([])
    const PreviewImage = () => {
        let saida = document.getElementById("filer");
        setFile(saida?.files)
        setFirst([URL.createObjectURL(saida?.files[0])])
        // for (let index = 0; index < saida?.files.length; index++) {
        //   const element = saida?.files[index];
        //   console.log(element); 
        //   setFirst([...first,URL.createObjectURL(element)])
        // }
        console.log(first);

    }
    useEffect(() => {
        console.log(first);
    }, [first])


    return (

            <div className=" w-4/5 md:w-[700px] border my-10 shadow mx-auto rounded-md p-[20px]">
                <div className="flex w-full justify-between mb-4 font-semibold text-md">
                    <div>Submit Your Solution</div>
                    {/* <div onClick={() => { setAsk('hidden') }} className='cursor-pointer hover:bg-gray-200 rounded-full px-2'>X</div> */}
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData();
                    formData.append("filer", e.target.filer?.files[0]);
                    formData.append("text", text);
                    fetch("/api/upload", {
                        method: "POST",
                        body: formData,
                    })
                        .then((res) => res.json())
                        .then((data) => {

                            console.log(data);
                            const create = async () => {
                                const res = await fetch("/api/solution/createSolution", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        message: data.fields.text,
                                        image: data.url,
                                        tutorId: tutor?.user?._id,
                                        issueId: Question?._id,
                                    }),
                                });
                                const data1 = await res.json();
                                console.log(data1);

                                setFirst([])
                                setText('')
                                if (data1) {
                                    setAsk('hidden')
                                    router.push("/sme/doubt" + "?question=" + data1._id);

                                }

                            };

                            create();

                        });
                }}>
                    <textarea
                        placeholder="write your Answer here"
                        name="text"
                        value={text}
                        className="bg-gray-100 text-gray-500 w-full rounded-xl px-4 py-1 h-[108px] focus:bg-white ease-in-out duration-300"
                        draggable="true"
                        onChange={(e) => { setText(e.target.value) }}
                    />
                    <div>
                        <label htmlFor="filer" className="w-max flex items-center gap-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width={38}
                                height={38}
                                viewBox="0 0 24 24"
                                className="fill-current text-gray-500 "
                            >
                                <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 13.5 13.333984 L 11 16.667969 L 9.5 14.667969 L 7 18 L 17 18 L 13.5 13.333984 z" />
                            </svg>
                            <div className="text-gray-500">Click to Upload Image</div>
                        </label>

                        <input
                            type="file"
                            // accept="image/png, image/jpeg, image/jpg, image/gif, image/svg,image/webp,image/svg+xml"
                            name="filer"
                            id="filer"
                            className="hidden w-max"
                            onChange={PreviewImage}
                        />
                    </div>
                    {/* <button
            type="submit"
            className="bg-[#333b48] hover:bg-[#22272e] duration-300 ease-in-out rounded-full px-6 py-2 text-white"
          >
            Proceed to pay
          </button> */}


                    <div className="flex gap-2">

                        {first.map((item) => {
                            return (
                                <div key={item} className=" w-max relative mb-5 mt-2">
                                    <Image
                                        src={item}
                                        width={500}
                                        height={200}
                                        alt="pic"
                                        className="h-[100px]  w-auto"
                                    />

                                    <div
                                        className="absolute top-0 text-gray-900 hover:text-gray-500 cursor-pointer text-4xl duration-300 ease-in-out right-3 "
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
                    {/* <div className="mb-4 mt-2">
                        <select className="bg-gray-100  w-[123px] px-2  py-1 rounded-full">
                            <option value="" key="" className="px-">
                                Maths
                            </option>
                        </select>
                    </div> */}
                    <button
                        type="submit"
                        className="bg-[#333b48] hover:bg-[#22272e] duration-300 ease-in-out my-3 rounded-full px-6 py-2 text-white"
                    >
                        Proceed to Submit
                    </button>
                </form>
            </div>

    );
}

export default Askdoubt
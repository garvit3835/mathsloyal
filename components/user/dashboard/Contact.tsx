import React from "react";

const Contact = ({ setContact }: { setContact: any }) => {
  const submit = ({ e }: { e: any }) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="   shadow-lg p-4 border-2 m-5 rounded-lg bg-white ">
      <div className="text-gray-600 w-full text-center mb-3">
        facing issue / have suggestion
      </div>

      <div className="text-xl font-base mb-2">Contact us</div>
      <form onSubmit={() => submit}>
        {/* <div className="flex flex-col">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input

                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div> */}
        {/* <div className="flex flex-col mt-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div> */}
        <div>
          <label htmlFor="concern" className="leading-7 text-sm text-gray-600">
            Select your concern
          </label>
          <select
            id="concern"
            name="concern"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          >
            <option value="feedback">Feedback</option>
            <option value="problem">Doubt Solution Problem</option>
            <option value="suggestion">Payment issue</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            defaultValue={""}
          />
        </div>
        <div className="mt-2 flex gap-5">
          <button
            className="text-white bg-green-500 border-0 py-1 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            type="submit"
          >
            Submit{" "}
          </button>
          <button
            className="text-  ring-[1px] hover:bg-gray-100  focus:ring-gray-500 ring-red-500 py-1 px-6 focus:outline-none rounded text-lg"
            type="reset"
            onClick={() => setContact(false)}
          >
            Cancel{" "}
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-3">
          we will get back to you as soon as possible because you are our
          priority
        </p>
      </form>
    </div>
  );
};

export default Contact;

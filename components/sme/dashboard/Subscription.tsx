
const Subscription = () => {
  return (
    <div className="m-5 p-4">
      <div className="grid grid-cols-2 w-full mb-2">
        <div className="text-gray-700 text-sm">
          progress of your subscription
        </div>
        <div className="flex justify-end text-md text-gray-800">10/30 days</div>
      </div>
      <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
        <div
          className="w-0 bg-gray-600 py-1 rounded"
          style={{ width: "33%" }}
        />
      </div>
    </div>
  );
}

export default Subscription
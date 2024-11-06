import { useState } from "react";

const Help = () => {
  const [ids, setid] = useState(1);
  const handlebutton = (id) => {
    if (id === 1) {
      setid(1);
    } else if (id === 2) {
      setid(2);
    }
  };
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-3xl">Help</h1>
      <div className="w-full">
        <input
          type="text"
          placeholder="type your problem here"
          className="w-full border-2 border-solid border-black p-3 placeholder:text-purple-500"
        />
      </div>
      <h2>All help topics:</h2>
      <div id="parent" className="grid grid-cols-[20%_80%]">
        <div className="bg-green-500">
          <div>
            <button
              className="btn bg-red-500"
              onClick={function () {
                handlebutton(1);
              }}
            >
              page 1
            </button>
          </div>
          <div>
            <button
              className="btn bg-purple-600"
              onClick={() => handlebutton(2)}
            >
              page 2
            </button>
          </div>
        </div>
        <div className="bg-amber-300">
          <div
            className="bg-red-500"
            style={{ display: ids === 1 ? "block" : "none" }}
          >
            page -1
          </div>
          <div
            className="bg-purple-600"
            style={{ display: ids === 2 ? "block" : "none" }}
          >
            page -2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;

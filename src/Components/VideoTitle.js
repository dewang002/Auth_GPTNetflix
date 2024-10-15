import React, { useState } from "react";

function VideoTitle({ title, overview, date }) {
  const [show, setshow] = useState(false);
  const toggleText = () => {
    setshow(!show);
  };
  return (
    <div className="text-white absolute top-[48vh] left-8 flex flex-col gap-6">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="text-xl font-semibold w-2/6">
        {show ? overview : overview.slice(0, 100)}
      </p>
      <button className="p-2 bg-sky-400 w-[8vw] rounded font-bold text-xl" onClick={toggleText}>
        {show ? "Show Less" : "Show More"}
      </button>
      <h3 className="text-xl">Out-on : {date}</h3>
    </div>
  );
}

export default VideoTitle;

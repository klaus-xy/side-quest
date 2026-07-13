import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      {/* <span className=" text-lg animate-pulse">👽</span> */}
      <h1 className="animate-pulse tracking-widest">[ Loading ] </h1>
    </div>
  );
};

export default Loading;

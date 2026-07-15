import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4 inset-0 absolute bg-background">
      {/* <span className=" text-lg animate-pulse">👽</span> */}
      <h1 className="animate-pulse tracking-widest shimmer">[ Loading ] </h1>
    </div>
  );
};

export default Loading;

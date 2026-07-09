import React from "react";

const LogItem = () => {
  return (
    <div className="flex flex-col gap-2 px-4 py-2 ronded border bor bg-muted/10 text-xs relative">
      <div className="w-1 h-full bg-primary absolute top-0 left-0"></div>
      {/* QUEST TITLE AND SUMMARY */}
      <p>👽 Quest Title</p>

      {/* TIMESTAMP AND STATUS */}
      <div className="flex justify-between items-center">
        <span className="text-xs text-muted-foreground">
          [ Quest Completed ]
        </span>
        <span className="text-xs text-muted-foreground">
          [ 2023-08-15 14:32:10 ]
        </span>
      </div>
    </div>
  );
};

export default LogItem;

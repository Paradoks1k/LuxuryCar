import React from "react";

export const Wraper = ({ children }) => {
  return (
    <div className="container  max-w-5xl my-0 mx-auto relative ">
      {children}
    </div>
  );
};

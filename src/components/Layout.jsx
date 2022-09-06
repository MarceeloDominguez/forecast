import React from "react";

export default function Layout({ children }) {
  return (
    <div className="bg-slate-900 lg:h-screen xl:h-screen">
      <div className="container mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 lg:h-full xl:h-full h-fit p-8">
        {children}
      </div>
    </div>
  );
}

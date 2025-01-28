import React from "react";
import { Outlet } from "react-router";
import TopNav from "./TopNav";
import SideBarNav from "./SideBarNav";

function FirstPagesLayout() {
  return (
    <div className="w-full h-full font-sans">
      <TopNav />
      <div id="container" className="flex gap-1 p-2">
        <SideBarNav className="bg-white" />
        <div className="bg-bg-gray-light w-[80%] p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default FirstPagesLayout;

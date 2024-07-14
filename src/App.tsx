import React from "react";
import LeftSidebar from "./component/LeftSidebar";
import NavBar from "./component/NavBar";
import MiddleContent from "./component/MiddleContent";
import RightSidebar from "./component/RightSideBar";

export default function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="main-container">
        <LeftSidebar />
        <MiddleContent />
        <RightSidebar />
      </div>
    </div>
  );
}

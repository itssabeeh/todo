import React from "react";
import BottomNav from "./BottomNav";
import ListContainer from "./ListContainer";
import Navbar from "./Navbar";

const DashBoard = () => {
  return (
    <div>
      <Navbar />
      <ListContainer />
      <BottomNav />
    </div>
  );
};

export default DashBoard;

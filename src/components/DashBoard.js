import React from "react";
import BottomNav from "./BottomNav";
import ListContainer from "./ListContainer";
import Navbar from "./Navbar";
import { useAuth0 } from "@auth0/auth0-react";

const DashBoard = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const isUser = isAuthenticated && user;

  const handleLogin = () => {
    if (!isUser) {
      loginWithRedirect();
    }
  };
  return (
    <div onClick={handleLogin}>
      <Navbar />
      <ListContainer />
      <BottomNav />
    </div>
  );
};

export default DashBoard;

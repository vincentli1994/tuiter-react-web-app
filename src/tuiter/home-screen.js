import React from "react";
import TuitList from "./tuits";
import WhatsHappening from "./whats-happening";

function HomeScreen() {
  return (
    <div>
      <h4>Home</h4>
      <WhatsHappening />
      <TuitList />
    </div>
  );
};
export default HomeScreen;
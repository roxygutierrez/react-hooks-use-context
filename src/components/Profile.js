//import useContext hook
import React, { useContext } from "react";
import Interests from "./Interests";
//import UserContext created in user.js
import { UserContext } from "../context/user";

//remove user prop
function Profile({ theme }) {
  //call useContext with UserContext+
  const { user } = useContext(UserContext);

  // now user can be used without being passed in as a prop
  console.log(user);
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;

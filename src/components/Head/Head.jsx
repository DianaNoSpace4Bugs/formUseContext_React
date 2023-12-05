import { UserContext } from "../../context/UserContext";
import React, { useContext } from "react";

const Head = () => {
  const { username} = useContext(UserContext);

  return (
    <>
      <header>{username ? <p>Welcome,{username}</p> : ""}</header>
    </>
  );
};

export default Head;
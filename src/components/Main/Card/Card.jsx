import React from "react";

const Card = ({props}) => {
  console.log(props);
  return (
    <>
      <div>
        <h1>Hello!</h1>
        <br />
        <h2>{props.name}</h2>
        <br />
        <h3>{props.email}</h3>
        <br />
        <h3>{props.age}</h3>
        <br />
        <img src={props.url} width="450px"/>
      </div>
    </>
  );
};

export default Card;
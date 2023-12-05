import React, { useState, useContext } from "react";
import Card from './Card'
import { UserContext } from "../../context/UserContext";
import { v4 as uuidv4 } from "uuid";
import Formulario from "./Formulario/Formulario";

const Main = () => {
  const { updateUsername } = useContext(UserContext);
  const [users, setUsers] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();


    const name = event.target.name.value;
    const email = event.target.email.value;
    const url = event.target.url.value;
    const age = event.target.age.value;



    const formSections = { name, email, url, age };

    updateUsername(email)
    setUsers(formSections);
  };
  return (
    <>
      <div>
        <Formulario handleSubmit={handleSubmit} />
        <section>{users ? <Card key={uuidv4()} props={users} /> : ""}</section>
      </div>
    </>
  )
};

export default Main;
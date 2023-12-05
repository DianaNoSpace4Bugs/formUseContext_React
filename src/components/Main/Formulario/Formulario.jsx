import React from "react";


const Formulario = ({ handleSubmit }) => {

  return (
    <>
      <article>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" name="name" />
          </fieldset>
          <br />
          <fieldset>
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" />
          </fieldset>
          <br />
          <fieldset>
            <label htmlFor="url">Foto</label>
            <br />
            <input type="url" name="url" />
          </fieldset>
          <br />
          <fieldset>
            <label htmlFor="age">Edad</label>
            <br />
            <input type="number" name="age" />
          </fieldset>
          <br />
          <button type="submit">Guardar</button>
        </form>
      </article>
    </>
  );
};

export default Formulario;
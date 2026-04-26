import React from "react";
import { Display } from "./Display";
import { useState } from "react";

function Form({ addUser }) {
  const [name, setName] = useState("");
  const handleOnchange = (e) => {
    // console.log(e);
    // const str = e.target.value;
    const { value } = e.target;
    setName(value);
    // console.log(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(name);
    // setList([...list, name]);
  };
  return (
    <div className="form">
      <Display name={name} />
      <form action="" onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleOnchange} />
        <button style={{ margin: "1rem" }}>Add user</button>
      </form>
    </div>
  );
}

export default Form;

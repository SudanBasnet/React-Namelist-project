import "./App.css";
import { useState } from "react";
import { Display } from "./components/Display";
import Form from "./components/Form";
import UserList from "./components/UserList";

function App() {
  // const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const addUser = (name) => {
    setList([...list, name]);
  };
  // const handleOnchange = (e) => {
  //   console.log(e);
  //   // const str = e.target.value;
  //   const { value } = e.target;
  //   setName(value);
  //   console.log(value);
  // };
  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   setList([...list, name]);
  // };
  console.log(list);
  return (
    <div
      className="wrapper"
      style={{
        display: "flex",
        background: "#a5a5ff",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        margin: "0",
        padding: "0",
      }}
    >
      <div
        className="userlist"
        style={{
          background: "#406a2e",
          color: "white",
          boxShadow: "0 0 10px grey",
          padding: "2rem",
          borderRadius: "10px",
        }}
      >
        <Form addUser={addUser} />
        <hr />
        <UserList list={list} />
      </div>
    </div>
  );
}

export default App;

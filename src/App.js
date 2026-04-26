import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const handleOnchange = (e) => {
    console.log(e);
    // const str = e.target.value;
    const { value } = e.target;
    setName(value);
    console.log(value);
  };
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
        <div className="display">{name}</div>

        <div className="form">
          <form action="">
            <input type="text" onChange={handleOnchange} />
            <button style={{ margin: "1rem" }}>Add user</button>
          </form>
        </div>
        <hr />

        <div className="list">
          <ul>
            <li>sample</li>
            <li>Sample</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

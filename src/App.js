import "./App.css";

function App() {
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
        <div className="display">As you are typing</div>

        <div className="form">
          <form action="">
            <input type="text" />
            <button>Add user</button>
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

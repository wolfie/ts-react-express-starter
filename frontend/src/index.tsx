import React, { useState } from "react";
import ReactDOM from "react-dom";
import { getHelloWorld } from "./api";

const App = () => {
  const [serverMessage, setServerMessage] = useState<string>(
    "Calling backend..."
  );

  getHelloWorld().then(json => setServerMessage(json.message));

  return (
    <>
      <h1>Hello From React!</h1>
      <p>{serverMessage}</p>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

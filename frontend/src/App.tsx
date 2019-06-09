import React, { useEffect, useState } from "react";
import { getHelloWorld } from "./api";

const App = () => {
  const [serverMessage, setServerMessage] = useState<string>(
    "Calling backend..."
  );

  useEffect(() => {
    getHelloWorld().then(json => setServerMessage(json.message));
  }, []);

  return (
    <>
      <h1>Hello From React!</h1>
      <p>{serverMessage}</p>
    </>
  );
};

export default App;

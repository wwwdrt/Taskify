import React from "react";
import "./App.css";

function App() {
  // aliases: types-and-interface

  interface Person {
    name: string;
    age?: number;
  }

  interface Guy extends Person {
    profession: string;
  }

  type X = {
    a: string;
    b: number;
  };

  // type Y = X & {
  //   c: string;
  //   d: number;
  // };

  let y: Y = {
    c: "efdas",
    d: 42,
  };

  return <div className="App">Hello World</div>;
}

export default App;

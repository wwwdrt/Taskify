import React from "react";
import "./App.css";

function App() {
  //   Types
  // let name: string;
  // let age: number;
  // let isStudent: boolean;
  // let hobbies: string[];
  // let studies: number[];
  // let role: [number, string]; // tuples contains one of each
  // role = [5, "name"];

  // Objects
  // type Person = {
  //   name: string;
  //   age?: number; // ? optional property
  // };
  //
  // let person: Person = {
  //   name: "DRT",
  //   age: 24,
  // };
  //
  // console.log(person);
  //
  // let lotsOfPeople: Person[];

  // let age: number | string;
  // age = 24; // "String" or 24
  // console.log(age);
  //
  // function printName(name: string) {
  //   console.log(name);
  // }
  //
  // printName("DRT");

  // let printName: Function;

  // let printName: (name: string) => void; // void returns undefined
  // let printName: (name: string) => never; // never returns nothing
  // let name: any; // not recommended, why would we need ts then??
  // let personName: unknown; // recommended instead of any if you don't know what type is going to be.

  return <div className="App">Hello World</div>;
}

export default App;

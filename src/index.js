import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Footer = () => {
  return <footer>&copy; 2018</footer>;
};

const data = {
  age: 26
};

function App() {
  return (
    <div id="App">
      <Header />
      <Person mydata={data} name="Ulla" />
      <Person mydata={data} name="Liv" />
      <Person mydata={data} name="Ask" />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>This is React!</h1>
    </header>
  );
}

function Person(props) {
  console.log(props.name);
  return (
    <article>
      <h1>{props.name}</h1>
      <p>Hi mom! I'm {props.mydata.age} years old</p>
      <Skilles skilles={props.mydata.skilles} />
    </article>
  );
}

function Skilles(props) {
  return (
    <ul>
      <li>Skilles here:</li>
    </ul>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const data = [
    {
      name: "Erik",
      hobbies: ["Guitar", "beer"],
      email: "erik-crg@hotmail.com",
      kids: 0,
      bike: "A heavy one"
    },
    {
      name: "Svend-åge",
      hobbies: ["Se den store strikkedyst", "klippe tånegle"],
      email: "ingen",
      kids: 17
    },
    {
      name: "Somebicth",
      hobbies: ["Whine", "bruge penge"],
      email: "Somebicth@thatsright.com",
      kids: 2.5
    }
  ];

  const testpesoner = data.map(testperson => {
    return <Testperson {...testperson} />;
  });

  return (
    <div id="App">
      <header>Header</header>
      {testpesoner}
      <footer>Footer</footer>
    </div>
  );
}

function Testperson(props) {
  return (
    <article>
      <header>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
        <p>{props.kids}</p>
        <p>{props.bike}</p>
      </header>
      <h2>Hobbies</h2>
    </article>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

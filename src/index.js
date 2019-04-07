import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const data = [
    {
      name: "Erik",
      hobbies: ["Guitar", "beer"],
      email: "erik-crg@hotmail.com"
    },
    {
      name: "Svend-åge",
      hobbies: ["Se den store strikkedyst", "klippe tånegle"],
      email: "ingen"
    },
    {
      name: "Somebicth",
      hobbies: ["Whine", "bruge penge"],
      email: "Somebicth@thatsright.com"
    }
  ];

  const testpesoner = data.map(testperson => {
    return (
      <Testperson
        name={testperson.name}
        email={testperson.email}
        hobbies={testperson.hobbies}
      />
    );
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
      </header>
      <h2>Hobbies</h2>
    </article>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

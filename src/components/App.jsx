import React from "react";
import Testperson from "./Testperson";

export default function App() {
  const data = [
    {
      name: "Erik",
      hobbies: ["Guitar", "beer"],
      email: "erik-crg@hotmail.com",
      kids: 0,
      bike: "A heavy one",
      id: 1
    },
    {
      name: "Svend-åge",
      hobbies: ["Se den store strikkedyst", "klippe tånegle"],
      email: "ingen",
      kids: 17,
      id: 2
    },
    {
      name: "Somebicth",
      hobbies: ["Whine", "bruge penge"],
      email: "Somebicth@thatsright.com",
      kids: 2.5,
      id: 3
    }
  ];

  const testpesoner = data.map(testperson => {
    return <Testperson key={testperson.id} {...testperson} />;
  });

  return (
    <div id="App">
      <header>Header</header>
      {testpesoner}
      <footer>Footer</footer>
    </div>
  );
}

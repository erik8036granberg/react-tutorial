import React from "react";
import Testperson from "./Testperson";

export default function App() {
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

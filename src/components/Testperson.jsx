import React from "react";

export default function Testperson(props) {
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

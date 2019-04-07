import React from "react";

export default function Testperson(props) {
  return (
    <article className="testperson">
      <header>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
        <p>{props.kids}</p>
        <p>{props.bike}</p>
        <p>{props.id}</p>
      </header>
      <h2>Hobbies</h2>
    </article>
  );
}

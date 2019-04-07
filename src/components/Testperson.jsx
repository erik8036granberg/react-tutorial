import React from "react";

export default function Testperson(props) {
  // let bike = "";
  // if (props.bike) {
  //   bike = <p>Bike: {props.bike}</p>;
  // }

  // forkortet if-statement!!!!!
  // findes props.bike? ja = html-tag - nej = ""
  // const bike = props.bike ? <p>Bike: {props.bike}</p> : "";

  // de to metoder herover viker med {bike} i blokken herunder
  // {bike}
  // 3 metode herunder forkorter det yderligere
  return (
    <article className="testperson">
      <header>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
        <p>{props.kids}</p>
        <p>{props.id}</p>
        {props.bike && <p>Bike: {props.bike}</p>}
      </header>
      <h2>Hobbies</h2>
    </article>
  );
}

import { useEffect } from "react";

function Content({ nama }) {


  return (
    <div>
      <h1>{nama}</h1>
      <button onClick={() => alert("Hi Mario")}>press</button>
    </div>
  );
}

export default Content;

"use client";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [enabled, setEnabled] = useState(true);
  const at = () => {
    setEnabled(false);
  };

  return (
    <>
      <b
        style={{
          fontSize: "18px",
          color: "magenta",
          backgroundColor: "white",
          display: "block",
        }}
      >
        ???:어음...체욱대회 시작에 앞서...어...우리 단대소고 파이팅 한
        번...어...합시다.
        <span
          style={{
            display: "block",
            color: "magenta",
            marginTop: "50px",
            fontSize: "50px",
          }}
        >
          {" "}
          ???:단대부고 파이팅!!!
        </span>
      </b>
      <div style={{ fontSize: "30px", color: "magenta" }}>
        {count}번 파이팅함{" "}
      </div>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          if (count == 0) {
            setTimeout(at, 1000);
          }
        }}
        id="clickhere"
        style={{ padding: 100, fontSize: 60 }}
        disabled={!enabled}
      >
        파이팅!!
      </button>
    </>
  );
}

export default App;

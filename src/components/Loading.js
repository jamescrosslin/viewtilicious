import React from "react";

function Loading() {
  return (
    <div className="loading">
      {`Loading...`.split("").map((letter, i) => (
        <span
          className={`letter`}
          key={i}
          style={{ animationDelay: `${0.12 * i}s` }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}

export default Loading;

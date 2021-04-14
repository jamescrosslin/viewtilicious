import React from "react";

function Loading() {
  return (
    <div className="loading">
      {
        // transforms each letter in the loading string to a span
        `Loading...`.split("").map((letter, i) => (
          <span
            className={`letter`}
            key={i}
            // linear growth in delays leads to a mechanical wave-like animation
            style={{ animationDelay: `${0.12 * i}s` }}
          >
            {letter}
          </span>
        ))
      }
    </div>
  );
}

export default Loading;

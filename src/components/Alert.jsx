import React from "react";

function Alert({ message }) {
  return (
    <div className="Alert">
      <p>{message}</p>
      <button>Close</button>
    </div>
  );
}

export default Alert;

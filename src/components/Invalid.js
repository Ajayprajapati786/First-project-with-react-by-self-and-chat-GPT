import React from "react";

const Invalid = (props) => {
  const clickHandler = () => {
    props.onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ backgroundColor: "white", padding: 20, borderRadius: 5 }}>
        <h1>Invalid input</h1>
        <p>Please enter a valid name and age (non-empty values)</p>
        <button onClick={clickHandler}>Ok</button>
      </div>
    </div>
  );
};

export default Invalid;

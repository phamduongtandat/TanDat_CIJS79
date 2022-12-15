import React from "react";

function Footer() {
  return (
    <div
      className="footer"
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: 30,
        fontSize: "large",
      }}
    >
      <div> 5 tasks left !</div>
      <div> MindXtodolist</div>
    </div>
  );
}

export default Footer;

import React from "react";

export default function Footer() {
  let footerStyle = {
    // position: "relative",
    height : "7vh",
    width: "100%",
    // top:"36.5vh",
    textAlign: "center",
  };

  return (
    <footer className="bg-dark text-light text-center py-2" style={footerStyle}>
      <p className="text-center">Copyright © MyTodosList.com</p>
    </footer>
  );
}

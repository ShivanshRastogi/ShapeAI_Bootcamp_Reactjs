import React from "react";

function Footer() {
  var Current_Year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {Current_Year}</p>
    </footer>
  );
}

export default Footer;

import React from "react";
import "./Footer.css";


function Footer() {
  const rang = {
    fontSize: "80px",
    fontWeight: "600",
  };

  return (
    <div className="ftr">
    
      <p style={rang}>Terms and conditions</p>
    </div>
  );
}

export default Footer;

//Kebab case => Camelcase

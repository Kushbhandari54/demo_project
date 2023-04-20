import Navbar from "@/components/Navbar";
import React from "react";

const ContactUS = () => {
  return (
    <div>
      <Navbar />
      <h1>Contact US</h1>
      <style jsx>
        {`
          h1 {
            color: red;
            text-align: center;
            font-size: 2rem;
          }
        `}
      </style>
    </div>
  );
};

export default ContactUS;

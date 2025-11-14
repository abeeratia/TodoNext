import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import React from "react";

function layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default layout;

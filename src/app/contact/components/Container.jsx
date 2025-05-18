import React from "react";
import Contact from "./Contact";
import ContactForm from "./ContactForm";

const Container = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-start gap-6 pt-16 pb-20 lg:pb-0">
      <div className="w-full h-full">
        <Contact />
      </div>
      <div className="w-full h-full">
        <ContactForm />
      </div>
    </div>
  );
};

export default Container;

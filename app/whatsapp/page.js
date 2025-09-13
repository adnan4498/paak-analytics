"use client";
import React from "react";
import Image from "next/image";
import whatsappIcon from "../../public/whatsapp-icon.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/92322384577"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 "
    >
      <Image
        src={whatsappIcon}
        alt="WhatsApp"
        width={"0"}
        height={"0"}
        className="w-18"
      />
      {/* <span className="font-medium">123456789</span> */}
    </a>
  );
};

export default WhatsAppButton;

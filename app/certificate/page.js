"use client";
import React, { useRef } from "react";
import cerfiticateImg from "../../public/certificate-template.jpeg";
import Image from "next/image";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Page = () => {
  const certificateRef = useRef(null);

  const downloadPDF = async () => {
    const element = certificateRef.current;

    // Capture the certificate section
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    // Create PDF (landscape A4)
    const pdf = new jsPDF("landscape", "pt", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
    pdf.save("certificate.pdf");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      {/* Certificate with your original design */}
      <div ref={certificateRef} className="relative w-[1100px] h-[800px]">
        <Image
          src={cerfiticateImg}
          alt="Certificate"
          fill
          className="object-cover"
        />

        <div className="text-black absolute font-bold top-[309px] left-[184px] text-[13px]">
          BI-901525
        </div>

        <div className="text-center absolute top-[450px] left-[410px] text-4xl font-bold  text-black">
          Adnan Mustafa
        </div>

        <div className="text-center">
          <div className="text-center absolute top-[525px] left-[350px]  italic  text-black">
            <p className="text-3xl mb-3">Data Analysis in Python</p>
            <p className="text-xl"> Completed 3 Months Course on April 13, 2025 </p>
          </div>

          {/* <div className="text-center absolute top-[570px] left-[330px] text-xl italic  text-black">
            
          </div> */}
        </div>

         <div className="text-black text-[10px] absolute font-bold bg-transparent top-[775px] z-0 left-[410px] ">
          www.paakAnalyticsConsultancy.com/certificate/BI-901525
        </div>
      </div>

      {/* PDF Download Button */}

      <button
        onClick={downloadPDF}
        className="px-6 py-3 !bg-blue-600 text-white font-bold cursor-pointer rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Download Certificate as PDF
      </button>
    </div>
  );
};

export default Page;

// pages/pdf.tsx

import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { createServer } from 'http';
import fs from 'fs';
import PDFDocument from 'pdfkit';
import { Data } from '../../types/pdfDataTypes';

// Function to generate PDF from data
const generatePDF = (data: Data[]) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream('example.pdf')); // Write to a file
  doc.fontSize(16).text('Your PDF Content:', { align: 'center' });
  // Loop through data and add to PDF
  data.forEach(item => {
    doc.fontSize(12).text(`${item.name}: ${item.value}`);
  });
  doc.end();
};

const PDFPage = ({ data }: { data: Data[] }) => {
  const [pdfGenerated, setPdfGenerated] = useState(false);

  const handleGeneratePDF = () => {
    generatePDF(data);
    setPdfGenerated(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {pdfGenerated ? (
        <a href="/example.pdf" download="example.pdf" className="text-blue-500">
          Download PDF
        </a>
      ) : (
        <button onClick={handleGeneratePDF} className="bg-blue-500 text-white px-4 py-2 rounded">
          Generate PDF
        </button>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from your database
  const data: Data[] = [
    { name: 'Item 1', value: 'Value 1' },
    { name: 'Item 2', value: 'Value 2' },
    // Add more data as needed
  ];
  return { props: { data } };
};

export default PDFPage;

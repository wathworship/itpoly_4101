import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function PDFViewer() {
  return (
    <div style={{ width: "50%", height: "50vh" }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer
          fileUrl="./pdf/21901v1.pdf"
          style={{ height: "50%", width: "50%" }}
        />
      </Worker>
    </div>
  );
}

export default PDFViewer;

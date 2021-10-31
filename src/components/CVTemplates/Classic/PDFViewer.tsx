import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import ClassicTemplate from "./ClassicTemplate";

const PDFPreview = () => {
  return (
    <PDFViewer>
      <Document>
        <ClassicTemplate />
      </Document>
    </PDFViewer>
  );
};

export default PDFPreview;

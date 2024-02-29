import logo from './logo.svg';
import './App.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { PDFViewer, View, Text } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { ReactDOM } from 'react';
import resume from './assets/puvi.pdf';

const url = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
pdfjs.GlobalWorkerOptions.workerSrc = url


function App() {
  return (
    <div>
      <Document file={resume} onLoadError={console.error} >
        <Page size="A4" pageIndex={0} renderAnnotationLayer={false}  renderTextLayer={false}></Page>
      </Document>
    </div>

  );
}
export default App;

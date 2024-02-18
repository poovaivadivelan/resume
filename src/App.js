import logo from './logo.svg';
import './App.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { ReactDOM } from 'react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import resume from './resources/Poovaivadivelan.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


function App() {
  return (
    <div>
      <Document file={resume} onLoadError={console.error} style={{width: '100vw', height:'auto'}}>
        <Page pageIndex={0} renderAnnotationLayer={true}  renderTextLayer={false}></Page>
      </Document>
    </div>

  );
}
export default App;

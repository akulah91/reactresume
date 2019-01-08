import React, { Component } from 'react';
import './App.css';
import Cv from './Cv'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import ReactDOMServer from "react-dom/server";

import { Button, Icon} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
    {/* <Button  onClick={()=>{this.printCV();}} className="fab" size="huge" circular icon='print' />
       */}
      <Cv/>
      </div>
    );
  }
  printCV=()=>{
//     const input = document.getElementById('printable');

// html2canvas(input)
//   .then((canvas) => {
//     const imgData = canvas.toDataURL('image/png');

//     const pdf = new jsPDF();
//     pdf.addImage(imgData, 'PNG', 0, 0);
//     pdf.save("download.pdf");  
//   })

  const source = document.getElementById('printable');
  console.log(source.innerHTML)
  const pdf = new jsPDF('p', 'pt', 'letter');
  pdf.fromHTML(source,15,15,{pagesplit:true},(x)=>{
    console.log(x);
    pdf.save("myDocument.pdf");
  });
  // pdf.fromHTML(
  //   source,
  //   15,
  //   15,{pagesplit: true},
  //   function(bla){pdf.save('saveInCallback.pdf');});

    
  
    
  }
}

export default App;

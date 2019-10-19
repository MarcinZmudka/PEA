import fs from "fs";
class makeUML {
  constructor(numberOfFiles, numberOfVertex) {
    this.filesNumber = numberOfFiles;
    this.vertexNumber = numberOfVertex;
    this.text = "";
  }
  randomValue() {
    return Math.floor(Math.random() * 10) + 1;
  }
  firstLine() {
    this.text +=
      '<?xml version="1.0" encoding="UTF-8" standalone="no" ?><travellingSalesmanProblemInstance><name>br17</name>\n<source>TSPLIB</source><description>17 city problem (Repetto)</description><doublePrecision>15</doublePrecision><ignoredDigits>5</ignoredDigits>';
  }
  lastLine() {
    this.text += "</travellingSalesmanProblemInstance>";
  }
  writeFile(folder, name) {
    fs.writeFileSync(`./files/${folder}/${name}.xml`,this.text , "utf8");
    this.text = "";
  }
  makeGraph() {
    this.text += "<graph>\n";
    for (let i = 0; i < this.vertexNumber; i++) {
      this.text += `<vertex>\n`;
      for (let j = 0; j < this.vertexNumber; j++) {
        if(i == j){
            this.text += `<edge cost="${9999}">${j}</edge>\n`;
        }  else{
            this.text += `<edge cost="${this.randomValue()}">${j}</edge>\n`;            
        }
        
      }
      this.text += `</vertex>\n`;
    }
    this.text += "</graph>\n";
  }
  start(name) {
    for (let i = 0; i < this.filesNumber; i++) {
      this.firstLine();
      this.makeGraph();
      this.lastLine();
      this.writeFile(name,`${name}v${i}`);
    }
  }
}

export default makeUML;

import fs from "fs";
import convert from "xml-js";

function importer(name) {
  let nodes = [];
  try {
    const xml = fs.readFileSync(`./files/${name}.xml`, "utf8"); //czytanie pliu

    const result = convert.xml2json(xml, { compact: false, spaces: 0 }); //konwersja z xml na format json

    const all = JSON.parse(result); //konwersja z json na obiekt Javascriptu
    let i = 0;
    all.elements[0].elements[5].elements.map(node => (node.key = i++)); //nadanie każdemu wierzchołkowi inwidaulnego numeru
    nodes = all.elements[0].elements[5].elements; // wyłuskanie grafu
    nodes.map(node => node.visited = false);
  } catch (err) {
    console.error("Brak pliku o podanej nazwie w folderze files");
  }
  return nodes;
}
export default importer;

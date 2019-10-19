import fs from "fs";
import convert from "xml-js";

function importer(folder, name) {
  let nodes = [];
  try {
    const xml = fs.readFileSync(`./files/${folder}/n${folder}v${name}.xml`, "utf8");

    const result = convert.xml2json(xml, { compact: false, spaces: 0 });

    const all = JSON.parse(result);
    let i = 0;
    all.elements[0].elements[5].elements.map(node => (node.key = i++));
    nodes = all.elements[0].elements[5].elements;
  } catch (err) {
    console.log(err);
  }
  return nodes;
}
export default importer;

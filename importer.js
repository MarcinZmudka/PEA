var convert = require("xml-js");
const xml = require("fs").readFileSync("./p43.xml", "utf8");

const result = convert.xml2json(xml, { compact: false, spaces: 0 });
const all = JSON.parse(result);
let i = 0;
all.elements[0].elements[5].elements.map(node => (node.key = i++));

export default all.elements[0].elements[5].elements;

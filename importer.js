var convert = require("xml-js");
let nodes = [];
try{
    const xml = require("fs").readFileSync("./files/5_0.xml", "utf8");

    const result = convert.xml2json(xml, { compact: false, spaces: 0 });

    const all = JSON.parse(result);
    let i = 0;
     all.elements[0].elements[5].elements.map(node => (node.key = i++));
     nodes = all.elements[0].elements[5].elements;
}
catch(e){
    console.log(e);
}

export default nodes;

var convert = require('xml-js');
const xml = require('fs').readFileSync('./br17.xml', 'utf8');

const  result = convert.xml2json(xml, {compact: false, spaces: 0});
const all = JSON.parse(result);

export default all.elements[0].elements[5].elements;
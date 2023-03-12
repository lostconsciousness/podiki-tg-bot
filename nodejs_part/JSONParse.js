import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseBooleans } from 'xml2js/lib/processors.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename)

let json_data = fs.readFileSync(__dirname+'/podiki.json', "UTF-8", (e, data)=>{
    if(e) return console.log(e);
    let obj = JSON.parse(data)
    // console.log(obj.yml_catalog.shop[0].offers[0].offer[0]); 
})

let json_content = JSON.parse(json_data)

console.log(json_content.yml_catalog.shop[0].categories[0].category[0]);

export default json_content;
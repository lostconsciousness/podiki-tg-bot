import mongoose from 'mongoose';
import Post from './Post.js';
import fs from 'fs';

const url = "mongodb+srv://general2286:Trnn06771588990@cluster0.v4ycgje.mongodb.net/?retryWrites=true&w=majority";
await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}).then(console.log("connected maybe")).catch((e)=>{console.log(e);});

const data_heaters = await Post.find({categoryId: 238});

console.log(typeof(data_heaters));
let allDone = JSON.stringify(data_heaters,null,1)
fs.writeFile('C:/ecig_offer/eleventy_part/src/_data/heaters.json', allDone, (e)=>{
                if(e) return console.log(e);
                return console.log("success");
            })
// console.log(data[0].picture[0]);
// console.log(data[0].param[0]);

export default data_heaters;
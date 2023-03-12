import express from 'express';
import mongoose from 'mongoose';
import Post from './Post.js';
import json_content from './JSONParse.js';
import { parseBooleans } from 'xml2js/lib/processors.js';

const app = express();

const url = "mongodb+srv://general2286:Trnn06771588990@cluster0.v4ycgje.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json())

const posts = []


async function StartApp(){
    try{
        await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}).then(console.log("connected nahui")).catch((e)=>{console.log(e);});

        app.listen(8000,()=>{
            console.log("Server is started");
        })
        console.log(json_content.yml_catalog.shop[0].offers[0].offer.length);
        let i = 0;
        if(json_content.yml_catalog.shop[0].offers[0].offer.length!=undefined){
            while(i<json_content.yml_catalog.shop[0].offers[0].offer.length){
                const id = json_content.yml_catalog.shop[0].offers[0].offer[i].$.id,
                available = parseBooleans(json_content.yml_catalog.shop[0].offers[0].offer[i].$.available),
                price = parseInt(json_content.yml_catalog.shop[0].offers[0].offer[i].price),
                currencyId = json_content.yml_catalog.shop[0].offers[0].offer[i].currencyId[0],
                name = json_content.yml_catalog.shop[0].offers[0].offer[i].name[0],
                categoryId = parseInt(json_content.yml_catalog.shop[0].offers[0].offer[i].categoryId[0]),
                vendorCode = parseInt(json_content.yml_catalog.shop[0].offers[0].offer[i].vendorCode[0]),
                quantity_in_stock = parseInt(json_content.yml_catalog.shop[0].offers[0].offer[i].quantity_in_stock[0]),
                description = json_content.yml_catalog.shop[0].offers[0].offer[i].description[0],
                url = json_content.yml_catalog.shop[0].offers[0].offer[i].url[0],
                picture = json_content.yml_catalog.shop[0].offers[0].offer[i].picture,
                param = json_content.yml_catalog.shop[0].offers[0].offer[i].param;
    
                posts[i] = await Post.create({picture, param, id, available, price, currencyId, name, categoryId, vendorCode, quantity_in_stock, description, url});
                console.log(i);
                i++;
                
            }
        }
        
    }
    catch(e){
        console.log(e);
    } 
}

StartApp();
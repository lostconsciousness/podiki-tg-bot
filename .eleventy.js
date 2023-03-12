const {html} = require('common-tags');
const Card = require('./src/_includes/components/Card.js');

// import { html } from 'common-tags';
// import data_heaters from './nodejs_part/RetrieveDB.js';
// import Card from './src/_includes/components/Card.js';

let arr = [];


module.exports = function(eleventyConfig){
    
    eleventyConfig.addShortcode("Card", Card);
    // eleventyConfig.addShortcode("Card", function(){
    //     for(let i = 0; i < data_heaters.length; i++){
    //         arr[i] =  html`
    //             <p>dsfdsf</p>
    //             <img src = "${data_heaters[i].picture[0]}">
    //             <h2>${data_heaters[i].name}</h2>
    //             <button >${data_heaters[i].price} ${data_heaters.currencyId}</button>
    //         `;
    //     }
    //     return arr;
    // });
    return{
        dir:{
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
}
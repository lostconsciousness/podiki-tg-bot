const {html} = require('common-tags');

// import { html } from 'common-tags';

function Card({picture, name, price, currencyId}){
         return html`
         <div style =  "border: 1px dotted black; margin: 10px; width: 50%; justify-content: center; text-align: center; padding:10px; ">
            <img style = "width: 100px; height : 100px"src = ${picture}>
            <h2>${name}</h2>
            <button >${price} ${currencyId}</button>
        </div>
        `;
}

module.exports = Card;
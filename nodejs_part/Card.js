import { html } from 'common-tags';

function Card({picture, name, price, currencyId}){
    return html`
    <div>
    <img src = ${picture}>
    <h2>${name}</h2>
    <button>${price} ${currencyId}</button>
    </div>`
}

module.exports = Card;
class Offer{
    constructor(id, available, price, currencyId, name, categoryId, vendorCode, quantity_in_stock, description, url, picture, param){
        this.id = id;
        this.available = available;
        this.price = price;
        this.currencyId = currencyId;
        this.name = name;
        this.categoryId = categoryId;
        this.vendorCode = vendorCode;
        this.quantity_in_stock = quantity_in_stock;
        this.description = description;
        this.url = url;
        this.picture = picture;
        this.param = param;
    }
}
export default Offer;

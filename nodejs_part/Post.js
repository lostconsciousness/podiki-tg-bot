import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    id: {type: String, required: true},
    available: {type: Boolean, required: true},
    price: {type: Number, required: true},
    currencyId: {type: String, required: true},
    name: {type: String, required: true},
    categoryId: {type: Number, required: true},
    vendorCode: {type: Number, required: true},
    quantity_in_stock: {type: Number, required: true},
    description: {type: String, required: true},
    url: {type: String, required: true},
    picture: {type: Array, required: true},
    param: {type: Array, required: true}
})

export default mongoose.model('Post', Post);
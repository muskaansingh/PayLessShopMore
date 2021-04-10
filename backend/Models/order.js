const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const ProductInCartSchema = new mongoose.Schema({
    product: {
        type:ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
});

const ProductInCart = mongoose.model("ProductInCart", ProductInCartSchema)

const orderSchema = new mongoose.Schema({
    products: [ProductInCartSchema], 
    transaction_id: {},
    amount: {
        type: Number
    },
    address: String,
    updated:Date,  // this is basically the admin part where admin can tell where the order should be delivered!
    user: {
        type: ObjectId,
        ref: "User" // this user is comes from the userSchema
    }
},
{timestamps: true}
);


const Order = mongoose.model("Order", orderSchema);

module.exports = {Order, ProductInCart}
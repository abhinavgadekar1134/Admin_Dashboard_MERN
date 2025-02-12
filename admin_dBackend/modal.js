const mongoose = require('mongoose')

const foodItemsSchema = mongoose.Schema({
    ID: String,
    FoodName: String,
    Discription:String,
    FoodType:String,
    Price: String,
    foodimg:String

})

const ordersSchema = mongoose.Schema({
    Foodid: String,
    Date: String,
    FoodName:String,
    FoodType:String,
    Price:String,
    Quantity: String,
    TotalPrice:String,
    CustomerId:String,
    CustomerName:String,
    Note:String,
    OrderAddress:String
})

const customersSchema = mongoose.Schema({
    CustID: String,
    Password: String,
    Name:String,
    ContactNo:String,
    Mail:String
})

const contactSchema=mongoose.Schema({
    name: String,
    ID: String,
    title: String,
    Discription: String,
    Date:String
   
})
const adminSchema = mongoose.Schema({
    name:String,
    mail:String,
    password:String
})


module.exports = {foodItemsSchema,adminSchema,ordersSchema,customersSchema,contactSchema}

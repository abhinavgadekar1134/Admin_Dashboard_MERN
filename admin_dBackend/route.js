const express = require('express')
const upload = require("./upload")
const Controller = require('./controller')

const route = express.Router()

route.post('/postFoodItems',upload.upload.single('foodimg'), Controller.addFoodItems)
route.post('/postCustomers' ,Controller.addCustomers)
route.post('/postOrder' ,Controller.addorder)



route.get('/getOrders' ,Controller.getOrders)
route.get('/getfoodItems' ,Controller.getfoodItems)
route.get('/getCustomers' ,Controller.getCustomers)
route.get('/getContactData' ,Controller.getContactData)


route.get('/getFoodItemsById/:ID',Controller.findFoodItemsById)
route.get('/getCustomersById/:CustID',Controller.findCustomersById)


route.get('/adminlogin/:mail/:password',Controller.adminlogin)

route.put('/FoodUpdate/:ID',Controller.updateFoodItems)
route.put('/CustUpdate/:CustID',Controller.updateCustomers)


route.delete('/deleteFoodItems/:ID',Controller.deleteFoodItems)
route.delete('/deleteCustomers/:CustID',Controller.deleteCustomers)

route.delete('/deleteOrders/:Foodid',Controller.deleteOrders)


module.exports = route
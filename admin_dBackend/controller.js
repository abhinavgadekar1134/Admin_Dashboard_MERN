const modal = require('./modal')
const mongoose = require('mongoose')
const nodemailer = require("nodemailer");

mongoose.pluralize(null);
const FoodModal = mongoose.model('FoodItems', modal.foodItemsSchema)
const OrdersModal = mongoose.model('Orders', modal.ordersSchema)
const CustomersModal = mongoose.model('Customers', modal.customersSchema)
const ContactModal = mongoose.model('ContactUS', modal.contactSchema)
const adminModal = mongoose.model('Admin', modal.adminSchema)

// ------------------------------ FoodItems ---------------------------------
const addFoodItems = async (req, res) => {
    let foodimg;
    const { FoodName, ID, FoodType, Discription, Price } = req.body;
    if (req.file) {
        foodimg = req.file.path
    }
    try {
        const fooddata = new FoodModal({
            FoodName, ID, FoodType, Discription, Price ,foodimg
        })
        const data = await fooddata.save();

        res.status(200).send({ data })
    }
    catch (err) {
        console.log(err)
        res.status(400).send({ err })
    }
}
const updateFoodItems = async (req, res) => {
    let foodimg;

    try {
        const { ID } = req.params
        const { FoodName,FoodType, Discription, Price } = req.body
        if (req.file) {
            foodimg = req.file.path
        }
        const cdata = await FoodModal.updateOne(
            { ID },
            {
                $set: { FoodName, FoodType, Discription, Price,foodimg }
            }
        )
        if (cdata.modifiedCount > 0) {
            res.status(200).send({ msg: "Food Items data updated" })
        }
        else {
            res.status(200).send({ msg: "Food Items not updated" })

        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ msg: "Food Items table not found" })
    }
}
const getfoodItems = async (req, res) => {
    const fooddata = await FoodModal.find();

    try {
        res.status(200).send({ data: fooddata, msg: "success" })
    } catch (error) {
        console.log(error);
        res.status(400).send({ error });
    }
}
const findFoodItemsById = async (req, res) => {
    try {
        const { ID } = req.params
        const data = await FoodModal.findOne({ ID })
        res.status(200).send({ msg: "success", data })
    } catch (error) {
        console.log(error);
        res.status(400).send("Not found")
    }

}
const deleteFoodItems = async (req, res) => {

    try {
        const { ID } = req.params
        const data = await FoodModal.deleteOne({ ID })

        if (data.deletedCount > 0) {
            res.status(200).send({ msg: "Data deleted" })
        }
        else {
            res.status(200).send({ msg: "Data not deleted" })
        }

    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: "data cant delete" })
    }
}

// -------------------- End Food Items -------------------------
// -------------------- Orders -----------------
const addorder = async (req, res) => {
    
    const { Foodid, Date, FoodName, FoodType, Price, Quantity, TotalPrice, CustomerId, CustomerName, Note, OrderAddress  } = req.body;

    try {
        const custdata = new OrdersModal({
            Foodid, Date, FoodName, FoodType, Price, Quantity, TotalPrice, CustomerId, CustomerName, Note, OrderAddress
        })
        res.status(200).send({ custdata })
        const data = await custdata.save();

    }
    catch (err) {
        console.log(err)
        res.status(400).send({ err })
    }
}
const getOrders = async (req, res) => {
    const orders = await OrdersModal.find();

    try {
        res.status(200).send({ data: orders, msg: "success" })
    } catch (error) {
        console.log(error);
        res.status(400).send({ error });
    }
}
const findOrdersById = async (req, res) => {
    try {
        const { Foodid } = req.params
        const data = await OrdersModal.findOne({ Foodid })
        res.status(200).send({ msg: "success", data })
    } catch (error) {
        console.log(error);
        res.status(400).send("Not found")
    }

}
const deleteOrders = async (req, res) => {

    try {
        const { Foodid } = req.params
        const data = await OrdersModal.deleteOne({ Foodid })

        if (data.deletedCount > 0) {
            res.status(200).send({ msg: "Data deleted" })
        }
        else {
            res.status(200).send({ msg: "Data not deleted" })
        }

    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: "data cant delete" })
    }
}

// -------------------- End Orders -------------------------


// ------------------------------ Customers ---------------------------------


const addCustomers = async (req, res) => {

    const { CustID,Password,Name,ContactNo,Mail } = req.body;
  
    try {
        const custdata = new CustomersModal({
            CustID,Password,Name,ContactNo,Mail
        })
        const data = await custdata.save();

        res.status(200).send({ data })
    }
    catch (err) {
        console.log(err)
        res.status(400).send({ err })
    }
}
const updateCustomers = async (req, res) => {

    try {
        const { CustID } = req.params
        const { Password,Name,ContactNo,Mail } = req.body
        
        const cdata = await CustomersModal.updateOne(
            { CustID },
            {
                $set: {  Password,Name,ContactNo,Mail }
            }
        )
        if (cdata.modifiedCount > 0) {
            res.status(200).send({ msg: "Customers data updated" })
        }
        else {
            res.status(200).send({ msg: "Customers not updated" })

        }

        // res.status(200).send({ msg: "Food Items not updated" })

    }
    catch (err) {
        console.log(err);
        res.status(400).send({ msg: "Food Items table not found" })
    }
}
const getCustomers = async (req, res) => {
    const fooddata = await CustomersModal.find();

    try {
        res.status(200).send({ data: fooddata, msg: "success" })
    } catch (error) {
        console.log(error);
        res.status(400).send({ error });
    }
}
const findCustomersById = async (req, res) => {
    try {
        const { CustID } = req.params
        const data = await CustomersModal.findOne({ CustID })
        res.status(200).send({ msg: "success", data })
    } catch (error) {
        console.log(error);
        res.status(400).send("Not found")
    }

}
const deleteCustomers = async (req, res) => {

    try {
        const { CustID } = req.params
        const data = await CustomersModal.deleteOne({ CustID })

        if (data.deletedCount > 0) {
            res.status(200).send({ msg: "Data deleted" })
        }
        else {
            res.status(200).send({ msg: "Data not deleted" })
        }

    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: "data cant delete" })
    }
}

// -------------------- End Customers -------------------------

// -------------- Contact ---------------------------

const getContactData = async (req, res) => {
    const contdata = await ContactModal.find();

    try {
        res.status(200).send({ data: contdata, msg: "success" });
        // console.log(contdata);
    } catch (error) {
        console.log(error);
        res.status(400).send({ data: "cant fetch", error });
    }
}
// -------------- End Contact ---------------------------






// ----------Admin login ---------------------------------
const adminlogin = async (req, res) => {
    try {
        const { mail } = req.params
        const { password } = req.params

        const userdata = await adminModal.findOne({ mail })
        if (userdata.password == password) {
            res.status(200).send({ status: "success", mail: userdata.mail, password: userdata.password });
        }
        else {
            res.status(400).send('fail');
        }
        // res.status(200).send(userdata)
    } catch (error) {
        console.log(error);
        res.status(400).send("Not found")
    }

}


module.exports = {
     addFoodItems, updateFoodItems, getfoodItems, findFoodItemsById, deleteFoodItems,
     getOrders,findOrdersById,deleteOrders,addorder, adminlogin,
     addCustomers,updateCustomers,getCustomers,findCustomersById,deleteCustomers,
     getContactData
}


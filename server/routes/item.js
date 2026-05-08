const express = require("express")
const router = express.Router()
const User = require("../models/item")

router

.get('/getAllItems', async (req, res) => {
    try {
        const items = await Item.getAllItems()
        res.send(items)
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})

.post('/create', async (req, res) => {
    try{
        const newItem = await Item.createItem(req.body)
        res.send(newItem)
    } catch(err){
        res.status(401).send({message: err.message})
    }
})

.put('/update', async (req, res) => {
    try{
        const updatedItem = await Item.updateItem(req.body)
        res.send({message: "Item has been updated!"})
    } catch(err){
        res.status(401).send({message: err.message})
    }
})

.delete('/de;ete', async (req, res) => {
    try{
        await Item.deleteItem(req.body.item_id)
        res.send({message: "Item has been deleted!"})
    } catch(err){
        res.status(401).send({message: err.message})
    }
})



module.exports = router
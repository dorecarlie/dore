const express = require("express")
const router = express.Router()
const User = require("../models/item")

router.get('/getAllItems', async (req, res) => {
    try {
        const items = await Item.getAllItems()
        res.send(items)
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})

module.exports = router
const express = require('express')
const model = require('../models/burger.js')
const router = express.Router()

router.get("/", (req, res) => {
    model.all((data) => {
        let burgerObj = {
            burgers: data
        }
        console.log(burgerObj)

        res.render("index", burgerObj)
    })
})


router.post("/api/burgers", (req, res) => {
    model.add(req.body.name, (result) => {
        console.log(result)
        console.log(result.insertId)
    })
})

router.put("/api/burgers/:id", (req, res) => {
    model.update(req.params.id, (result) => {
        console.log(result)
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router
const orm = require('../config/orm.js')

const burgerLogic = {
    all: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res)
        })
    },
    add: (burgerName, cb) => {
        orm.insertOne(burgerName, (res) => {
            cb(res)
        })
    },
    update: (id, cb) => {
        orm.updateONe("burgers", id, true, (res) => {
            cb(res)
        })

    },
    // Deprecated
    delete: () => {
        orm.deleteOne("burgers", burgerName, (res) => {
            cb(res)
        })

    }
}




module.exports = burgerLogic
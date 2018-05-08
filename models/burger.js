const orm = requires('./config/orm.js')

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
    update: (burgerName, cb) => {
        orm.updateONe("burgers", burgerName, true, (res) => {
            cb(res)
        })

    },
    // Deprecated
    delete: () => {
        orm.deleteOne("burgers", bugerName, (res) => {
            cb(res)
        })

    }
}




module.exports = burgerLogic
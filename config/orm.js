const connection = require('./connection.js')

const orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
          if (err) throw err;
          console.log(result);
          cb(result)
        });
      },
    insertOne: (burgerName, cb) => {
        const queryString = "INSERT INTO burgers (burger_name) VALUES ?"
        connection.query(queryString, [burgerName], function (err, result) {
            if (err) throw err;
            console.log(result)
            cb(result)
        })
    },
    updateOne: (id, burger_name, devouredState, cb) => {
        const queryString = "UPDATE ?? SET devoured = ? WHERE id = ?"
        connection.query(queryString, [id, devoured, burger_name], function(err, result) {
            if (err) throw err;
            console.log(result)
            cb(result)
        })
    }
}

module.exports = orm
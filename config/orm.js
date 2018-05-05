import { builtinModules } from 'module';

const connection = require('./connection.js')


const orm = {
    selectAll: function (tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
          if (err) throw err;
          console.log(result);
          return(result)
        });
      },
    insertOne: (burgerName) => {
        const queryString = "INSERT INTO burgers (burger_name) VALUES ?"
        connection.query(queryString, [burgerName], function (err, result) {
            if (err) throw err;
            console.log(result)
            return(result)
        })
    },
    updateOne: (tableInput, burger_name, devouredState) => {
        const queryString = "UPDATE ?? SET devoured = ? WHERE burger_name = ?"
        connection.query(queryString, [tableInput, devoured, burger_name], function(err, result) {
            if (err) throw err;
            console.log(result)
            return(result)
        })
    }
}

modules.export = orm
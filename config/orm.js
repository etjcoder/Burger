var connectino = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = `SELECT * FROM ${tableInput};`

        connection.query(queryString, function(err, result){
            if (err) {throw err}
            cb(result);
        })
    },
    insertOne: function(tableName, columnName, columnValue, cb){
        var queryString = `INSERT INTO ${tableName} (${columnName}) VALUES (?);`

        connection.query(queryString, columnValue, function(err, result){
            if (err) {throw err};
            cb(result);
        })
    },
    updateOne: function(tableName, changeObj, condition, cb){
        var queryString = `UPDATE ${tableName} SET ${changeObj} WHERE ${condition}`
        connection.query(queryString, function(err, result){
            if (err) {throw err}
            cb(result);
        })
    }
}


module.exports = orm;
//From Activity 12-10 GreatBay
// "UPDATE auctions SET ? WHERE ?",[{highest_bid: answer.bid},{id: chosenItem.id}]





 
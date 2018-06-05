const mysql = require('mysql');
const connection = mysql.createConnection({
	user: 'root',
	database: 'reviews',

});

connection.connect();

module.exports.con = connection;
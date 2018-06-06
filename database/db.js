const mysql = require('mysql');
const connection = mysql.createConnection({
	user: 'root',
	database: 'reviews',

});

connection.connect((err) =>{
	if(err) {
	console.log('Error connecting to db:', err)
	}
	console.log('Connected to db')
});

module.exports.con = connection;
const express = require('express');
const morgan = require('morgan');
const connection = require('../database/db.js');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3002;

app.use(morgan('dev'));

app.use('/listing/:productID', express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());


app.get('/api/listing/:productID', (req, res) => {
	let query = `SELECT * FROM reviews WHERE productID=${req.params.productID}`;
  connection.con.query(query, (err, result) => {
  	if(err) {
  		res.status(500).send();
  	}
  	res.status(200).send(result)
  });
});


app.post('/api/listing/:productID', (req, res) => {
	console.log('this is req body',req.body)
	// let insertQuery = `INSERT INTO reviews 
 //            (stars, date, photo, review, name, itemDescription, customerAvatar, productID)
 //            VALUES (?,?)`;


})



app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

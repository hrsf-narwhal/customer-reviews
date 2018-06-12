const express = require('express');
const morgan = require('morgan');
const connection = require('../database/db.js');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3002;
const faker = require('faker');

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
	let date = new Date().toString().slice(0,15);
	let name = faker.name.findName();
	let productDesc = faker.commerce.productName();
	let stars = req.body.stars;
	let review = req.body.review;
	let productID = req.body.productID;
	connection.con.query(`INSERT INTO reviews (stars, date, review, name, itemDescription, productID)
            VALUES ('${stars}','${date}', '${review}', '${name}', '${productDesc}', '${productID}')`,
            (err, result) => {
            	if(err) {
            		res.status(500).send();
            	}
           	  res.status(201).send();
   });
})




app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

const faker = require('faker');
const connection = require('./db.js');


for (let i = 1000; i <= 1100; i++) {
	connection.con.query(`INSERT INTO products (id) VALUES (${i})`, function(err, result) {
		if(err) {
			console.log('Error inserting data into products table:',  err)
		}
		console.log('Inserted into products table');
	})
}	

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
};

for (let b = 1; b <= 1000; b++) {

	let stars = faker.random.number({min:0, max:5});
  let name = faker.name.findName();
  let date = faker.date.between('2017-01-01', '2018-06-01').toString().slice(0,10);
  let image = faker.image.fashion();
  let review = faker.lorem.sentences();
	let productDesc = faker.commerce.productName();
	let avatar = faker.image.avatar();
	let productID = getRndInteger(1000, 1100);

	connection.con.query(`INSERT INTO reviews ( stars, name, date, photo, review, itemDescription, customerAvatar, productID) VALUES (
		'${stars}', '${name}', '${date}', '${image}', '${review}', '${productDesc}', '${avatar}', '${productID}')`, function(err, result) {
			if(err) {
				console.log('Error inserting data into reviews table:', err)
			}
			  console.log('Inserted into reviews table');
  })
}
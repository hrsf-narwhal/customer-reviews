const puppeteer = require('puppeteer');
const pageURL = 'http://localhost:3002/';

let page;
let browser;
const width = 1280;
const height = 720;


beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
afterAll(() => {
  browser.close();
});


describe('search function', () => {
	test('initial title is correct', () => {

	});
});


// import React from 'react';
// // import Enzyme from 'enzyme';
// // import Adapter from 'enzyme-adapter-react-16';
// // import { shallow, render, mount } from 'enzyme';
// import Reviews from '../client/components/Reviews.jsx';
// // import ReviewListEntry from '../client/components/ReviewListEntry.jsx';
// // // import index from './client/index.js'
// // Enzyme.configure({ adapter: new Adapter() });
// // // const request = require('supertest');



// // describe('Tests are running', () => {
// // 	it('True should be true', () => {
// // 		expect(true).toBe(true);
// // 	})
// // })

// describe('Reviews', () => {
// 	it('should be defined', () => {
// 		expect(Reviews).toBeDefined();
// 	 });
// })
// // describe('Review Component', () => {
// // 	test('Review', () => {
// // 	const component = shallow(<ReviewListEntry/>)
// // 	console.log(component)
  




// // describe('Test the root endpoint', () => {
// // //   test('should respond with statusCode 200 on GET', () => {
// // //     return request(reviews)
// // //       .get('/')
// // //       .expect(200)
// // //       .catch(err => console.error(err));
// // //   });


		
// // // 	})

// //   // it('should be defined', () => {
// //   // 	expect(Reviews).toBeDefined();
// //   // })
// //   // 	const id = document.getElementById('reviews');
// //   // 	ReactDOM.render(<Reviews />, id);
// //   // })
// //  // make our assertion and what we expect to happen 
// //    test('should render the component', () => {
// //         const wrapper = mount(<Reviews/>);
// //         expect(wrapper.find('div')).toHaveLength(1);
// //     });

// // })
// //  // it('should respond to change event and change the state of the Review Component', () => {
// //  //   const output = shallow()
// //  //   expect(shallow(<Reviews/>).exists()).toBe(true)
// //  // })






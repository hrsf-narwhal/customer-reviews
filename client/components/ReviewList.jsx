import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

 const ReviewList = (props) => {

	return (
	 <div>
	 	<table>
		  <thead>
			  <tr>
			    <th>Reviews ***** ({props.reviews.length}) </th>
			  </tr>
		  </thead>
	    <tbody> {props.reviews.map((review, i) => {
	    	return (<ReviewListEntry key={i} review={review}/>)
	    })}
	  	</tbody>
		</table>
 </div>
	)

}

export default ReviewList;


// <table >
//           <thead>
//             <tr>
//               <th>Reviews (657) </th>   
//             </tr>
//           </thead>
//           <tbody>
//             <i className="fas fa-star"></i>
//             <i className="fas fa-star"></i>
//             <i className="fas fa-star"></i>
//             <i className="fas fa-star"></i>
//             <i className="fas fa-star"></i>
//             <tr>
//               <td></td>
//               <td></td>
//               <td>Date</td>   
//             </tr>
//           </tbody>
//         </table>


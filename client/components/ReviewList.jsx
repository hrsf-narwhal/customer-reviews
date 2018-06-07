import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import style from '../style/style.css';
 const ReviewList = (props) => {

	return (
		<div>
			<table>
			  <thead>
				  <tr>
				    <th>
				      Reviews  
				    	<i className="fas fa-star"></i>
				    	<i className="fas fa-star"></i>
				       	( {props.reviewsAll.length} ) 
				   	</th>
				  </tr>
			  </thead>
			  <tbody> 
				  {props.reviews.map((review, i) => {
				  	return (<ReviewListEntry key={i} review={review}/>)
				  })}
				  <button>+ More</button>
				</tbody>
			</table>
		</div>
  );
}

export default ReviewList;


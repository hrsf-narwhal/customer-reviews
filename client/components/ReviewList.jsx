import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

 const ReviewList = (props) => {

	return (
		<div>
			<table>
			  <thead>
				  <tr>
				    <th>
				    	<i className="fas fa-star"></i>
				   		Reviews ***** ({props.reviews.length}) 
				   	</th>
				  </tr>
			  </thead>
			  <tbody> 
				  {props.reviews.map((review, i) => {
				  	return (<ReviewListEntry key={i} review={review}/>)
				  })}
				</tbody>
			</table>
		</div>
  );
}

export default ReviewList;


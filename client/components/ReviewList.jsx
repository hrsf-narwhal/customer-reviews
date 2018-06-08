import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import style from '../style/style.css';
 

 const ReviewList = (props) => {
 	let button;
 	if (!props.clicked) {
 		button = <button onClick={props.click}>+ More</button>;
 	} else {
 		button = <button className={style.allReviewsButton}>Read All Reviews ({props.reviewsAll.length})</button>
 	}
 	let classStyle;
 	if (props.border) {
 		classStyle = style.tableBorder;
 	} else {
 		classStyle = '';
 	}

	return (
		
		<div>
			<table className={classStyle}>
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
				  { button }
				</tbody>
			</table>
		</div>
  );
}

export default ReviewList;


import React from 'react';


const ReviewListEntry = (props) => {

	return (
		<div>
			<div>
			  <span>{props.review.stars}</span>
			  <span>{props.review.date}</span>
				<img src={props.review.customerAvatar}/>
				<span>Reviewed by {props.review.name}</span>
				<span>{props.review.review}</span>
				<img src={props.review.photo}/>
			</div>
		</div>

	)
}



export default ReviewListEntry;
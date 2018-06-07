import React from 'react';
import style from '../style/style.css';

const ReviewListEntry = (props) => {
	
	
	return (
		<div>
			<div className={style.bottomBorder}>
			  <span className={style.date}>{props.review.date}</span>  		 
				<img src="https://www.etsy.com/images/avatars/default_avatar_75x75.png"/>	
	      <span className={style.review}>{props.review.review}
	      </span>
				<span className={style.customer}>Reviewed by <br/> {props.review.name}</span> 
			</div>
		</div>
	)
}
// <img src={props.review.customerAvatar}/>
 // // <span>{props.review.stars}</span>
	// 		  <i className="fas fa-star"></i>
	// 			<span className={style.review}>{props.review.review}</span>
export default ReviewListEntry;
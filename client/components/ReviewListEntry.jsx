import React from 'react';
import style from '../style/style.css';

const ReviewListEntry = (props) => {

	
	return (
			<tr>
			 <div className={style.bottomBorder}>
			  <td className={style.date}>{props.review.date}</td>  		 
				<img src="https://www.etsy.com/images/avatars/default_avatar_75x75.png"/>	
	      <td className={style.review}>{props.review.review}</td>
				<span className={style.customer}>Reviewed by <br/> {props.review.name}</span> 
				</div>	
			</tr>
	)
}

export default ReviewListEntry;


import React from 'react';
import style from '../style/style.css';
import ReactStars from 'react-stars';
import Highlighter from "react-highlight-words";


const ReviewListEntry = (props) => {
	return (
			 <div className={style.bottomBorder}>	 
				  <div className={style.date}>{props.review.date}</div>  		 
					<img className={style.avatar} src="https://www.etsy.com/images/avatars/default_avatar_75x75.png"/>	
					<ReactStars className={style.star}  value={props.review.stars} edit={false}/>
		      <div className={style.review}>
		      	<Highlighter  searchWords={[props.input]} autoEscape={true} textToHighlight={props.review.review}/>
		      </div>
					<span className={style.customer}>Reviewed by <br/> {props.review.name}</span> 
				  <img className={style.product} 
				  src={props.review.photo}/> 
				  <span className={style.description}>
				  {props.review.itemDescription}
				  </span>
				</div>	
		
	)
}

export default ReviewListEntry;


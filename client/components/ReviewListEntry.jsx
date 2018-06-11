import React from 'react';
import style from '../style/style.css';
import ReactStars from 'react-stars';
import Highlighter from "react-highlight-words";


const ReviewListEntry = (props) => {
 
	return (
			<tr>
			 <div className={style.bottomBorder}>	 
				  <td className={style.date}>{props.review.date}</td>  		 
					<img className={style.avatar} src="https://www.etsy.com/images/avatars/default_avatar_75x75.png"/>	
					<ReactStars className={style.star}  value={props.review.stars} edit={false}/>
		      <td className={style.review}>
		      	<Highlighter highlightClassName='YourHighlightClass'searchWords={[props.input]} autoEscape={true} textToHighlight={props.review.review}/>
		      </td>
					<span className={style.customer}>Reviewed by <br/> {props.review.name}</span> 
				  <img className={style.product} />
				  <span className={style.description}>
				  {props.review.itemDescription}
				  </span>
				</div>	
			</tr>
	)
}

export default ReviewListEntry;

 // src={`https://s3-us-west-1.amazonaws.com/hrsfitsyproductreviews/Itsy-photos+(1)/${props.review.productID}/${props.review.productID}-01.jpg`}
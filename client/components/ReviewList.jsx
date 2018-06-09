import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import style from '../style/style.css';
import ReactStars from 'react-stars'
 

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
  let rating = 0;
  props.reviewsAll.forEach((el)=> {rating = el.stars + rating})
  rating = Math.max(Math.ceil((rating/props.reviewsAll.length) * 10) / 10).toFixed(1);
  
	return (	

		<div>
			
			<table className={classStyle}>
			<form>
			  <label>
			    <input type="text" name="name" placeholder="Search within the reviews"/>
			  </label>
			  <input className={style.allReviewsButton} type="submit" value="Search" />
	     </form>
			  <thead>
				  <tr>
				    <th className={style.align}>
				      Reviews ( {props.reviewsAll.length} ) <ReactStars value={rating} edit={false}/>
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


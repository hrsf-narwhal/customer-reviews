import React from 'react';
import style from '../style/style.css';
import ReactStars from 'react-stars';


const ReviewPost = (props) => {

	const ratingChanged = (newRating) => {
		props.ratingChange(newRating)
  }

	return (
  	<div>
  	 <div className={style.write}> Start your review  </div>
	  	<ReactStars className={style.starMain} edit={true} size={25}  value={props.rating} onChange={ratingChanged}/>
	  	<textarea value={props.value} onChange={props.changeReview}/>
	  	<button onClick={props.submitReview}>Submit</button>
    </div>
  )
}


export default ReviewPost;
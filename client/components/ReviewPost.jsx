import React from 'react';
import style from '../style/style.css';
import ReactStars from 'react-stars';


const ReviewPost = (props) => {

	const ratingChanged = (newRating) => {
		props.ratingChange(newRating)
  }
	return (
  	<div className={style.postReview}>
  	 <div className={style.write}> Start your review  </div>
	  	<ReactStars className={style.starMain} edit={true} size={25}  value={Number(props.rating)} onChange={ratingChanged}/>
	  	<textarea value={props.value} onChange={props.changeReview}/>
	  	<button className={style.submit} onClick={props.submitReview}>Submit</button>
    </div>
  )
}


export default ReviewPost;
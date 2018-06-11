import React from 'react';
import style from '../style/style.css';
import ReactStars from 'react-stars';




const ReviewPost = (props) => {

	const ratingChanged = (newRating) => {
	console.log(newRating)
}

	return (

  	<div >
  	 <div className={style.write}> Start your review  </div>
	  	<ReactStars className={style.starMain} edit={true} size={25}/>
	  	<textarea value='text'/>
	  	<button >Submit</button>
    </div>
  )
}


export default ReviewPost;
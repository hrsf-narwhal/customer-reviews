import React from 'react';
import style from '../style/style.css';

 const Search = (props) => {
	return (
		<form onSubmit={props.search}>
	  	<input className={style.input} type="text" name="name" placeholder="Search within the reviews" value={props.input}  onChange={props.change}/>
		 	<button className={style.allReviewsButton} type="submit">Search </button>
		</form>
	)
 }


 export default Search;
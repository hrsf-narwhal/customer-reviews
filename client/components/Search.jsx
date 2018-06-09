import React from 'react';
import style from '../style/style.css';


 const Search = (props) => {
 	console.log('input', props.input)
 	console.log('search', props.search)
	return (
		<form onSubmit={props.search}>
		 
		    <input type="text" name="name" placeholder="Search within the reviews" value={props.input}  onChange={props.change}/>
		 
		   <input className={style.allReviewsButton} type="submit" />
		 </form>
	)
 }


 export default Search;
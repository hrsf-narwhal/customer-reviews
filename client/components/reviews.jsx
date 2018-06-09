import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import style from '../style/style.css';
import StarRatingComponent from 'react-star-rating-component';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      allReviews: [],
      currentReviews: [],
      clicked: false,
      borderOn: false,
      input: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  
  handleClick(e) {
    let moreReview = this.state.allReviews.slice(0,10);
    this.setState({
      currentReviews: moreReview,
      clicked: true,
      borderOn: true,
    })
  }
 
  componentDidMount() {
    let url = document.location.href.slice(30)
    axios.get(`/api/listing/${url}`)
      .then((res) => {
       let initial = res.data.slice(0,4);
       console.log(res.data)
        this.setState({
          allReviews: res.data,
          currentReviews: initial,
        })
      })
      .catch((err) => {
        console.log('AXIOS get error:', err);
      })
   } 
  handleSearch(e) {
    e.preventDefault();
    let value = this.state.input;
    let text = this.state.allReviews;
    let found = [];
    text.forEach((el)=> {
      if(el.review.includes(value)) {
        found.push(el)
      }
    })
    
      this.setState({
        currentReviews: found,
      })
    
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }
  

    render() {
      let output;
      if(this.state.currentReviews.length === 0) {
        output = <div>
        Sorry..We couldn't find any reviews that match your search criteria..
        <ReviewList input={this.state.input} change={this.handleChange} search={this.handleSearch} click={this.handleClick} border={this.state.borderOn} clicked={this.state.clicked} reviewsAll={this.state.allReviews} reviews={this.state.currentReviews} />       
        </div>
      } else {
        output = <ReviewList input={this.state.input} change={this.handleChange} search={this.handleSearch} click={this.handleClick} border={this.state.borderOn} clicked={this.state.clicked} reviewsAll={this.state.allReviews} reviews={this.state.currentReviews} />       
      }

      return (
        <div>  
          {output}
        </div>
      );
    }
}



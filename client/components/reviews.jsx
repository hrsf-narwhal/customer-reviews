import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import style from '../style/style.css';


export default class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      allReviews: [],
      currentReviews: [],
      clicked: false,
      borderOn: false,
      input: '',
      value: '',
      rating: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitReview = this.handleSubmitReview.bind(this);
    this.handleChangeReview = this.handleChangeReview.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleResponse = this.handleResponse.bind(this);

  }

  handleSubmitReview(e) {
    let url = document.location.href.slice(30)
    let product = url.slice(0,4)
    axios.post(`/api/listing/{url}`, {
      stars: this.state.rating,
      review: this.state.value,
      productID: product

    })
      .then((response) => {
        this.handleResponse();
      })
      .catch((err) => {
        console.log(err);
      })
  }
  handleRatingChange(newRating) {
    this.setState({
      rating: newRating
    })

  }
  handleChangeReview(e) {
     this.setState({
      value: e.target.value
     });

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
    this.handleResponse();
  }

   handleResponse() {
    let url = document.location.href.slice(30)
    axios.get(`/api/listing/${url}`)
      .then((res) => {
        console.log(res.data)
       let initial = res.data.slice(0,4);
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
        output = <div className={style.notFound}>
        <ReviewList input={this.state.input} change={this.handleChange} search={this.handleSearch} click={this.handleClick} border={this.state.borderOn} clicked={this.state.clicked} reviewsAll={this.state.allReviews} reviews={this.state.currentReviews} changeReview={this.handleChangeReview} value={this.state.value} ratingChange={this.handleRatingChange} rating={this.state.rating} submitReview={this.handleSubmitReview}/>       
       Sorry...We couldn't find any reviews that match your search criteria...
        </div>
      } else {
        output = <ReviewList input={this.state.input} change={this.handleChange} search={this.handleSearch} click={this.handleClick} border={this.state.borderOn} clicked={this.state.clicked} reviewsAll={this.state.allReviews} reviews={this.state.currentReviews} changeReview={this.handleChangeReview} value={this.state.value} ratingChange={this.handleRatingChange} rating={this.state.rating} submitReview={this.handleSubmitReview}/>       
      }
      return (
        <div>  
          {output}
        </div>
      );
    }
}



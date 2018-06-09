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
    };
    this.handleClick = this.handleClick.bind(this);

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
        this.setState({
          allReviews: res.data,
          currentReviews: initial,
        })
      })
      .catch((err) => {
        console.log('AXIOS get error:', err);
      })
   }   

    render() {
      return (
        <div>
          <ReviewList click={this.handleClick} border={this.state.borderOn} clicked={this.state.clicked} reviewsAll={this.state.allReviews} reviews={this.state.currentReviews} />
        </div>
      );
    }
}



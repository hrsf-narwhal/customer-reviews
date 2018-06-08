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
      rating: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderStarIcon = this.renderStarIcon.bind(this);
    this.renderStarIconHalf = this.renderStarIconHalf.bind(this);

  }
  renderStarIcon(index, value) {
    return (
      <div className={style.starOrange}>
        <i className={index <= value ? `fa fa-star` : `fa fa-star-o`} />
      </div>
    );
  }
  renderStarIconHalf() {
    return (
    <div className={style.starOrange}>
     <i className={"fa fa-star-half-full"} />
    </div>
    );
  } 
  // onStarClick(nextValue, prevValue, name) {
  //   this.setState({
  //     rating: nextValue
  //   });
  // }

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
        let stars = 0;
        res.data.forEach((el) => {
          stars = stars + el.stars
        })  
       let starRat = Math.max(Math.ceil(stars * 10) / 10, 2.8);
       console.log(stars)
       let initial = res.data.slice(0,4);
        this.setState({
          allReviews: res.data,
          currentReviews: initial,
          rating: starRat, 
        })
      })
      .catch((err) => {
        console.log('AXIOS get error:', err);
      })
   }   

    render() {
      const { rating } = this.state;
      return (
        <div>
          <div>
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent
          name="ratingStar"
          starCount={5}
          value={rating}
          starColor='#FFFFFF'
          emptyStarColor='#ea9a00'
          renderStarIcon={this.renderStarIcon}
          renderStarIconHalf={this.renderStarIconHalf}
        />
      </div>

          <ReviewList click={this.handleClick} border={this.state.borderOn} clicked={this.state.clicked} reviewsAll={this.state.allReviews} reviews={this.state.currentReviews} />
        </div>
      );
    }
}



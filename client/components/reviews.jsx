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
    };
  }

  componentDidMount() {
    let url = document.location.href.slice(30)
    axios.get(`/api/listing/${url}`)
      .then((res) => {
        let initial = [];
        let limit = 0;
        res.data.forEach((d)=> {
          while(limit < 4){
            initial.push(d)
            limit++
          }
        })
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
        <ReviewList reviewsAll={this.state.allReviews} reviews={this.state.currentReviews} />
        </div>
      );
    }
}



import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      data: [],


    };
  }

  componentDidMount() {
    let url = document.location.href.slice(30)
    axios.get(`/api/listing/${url}`)
      .then((res) => {
        this.setState({
          data: res.data
        })
        console.log(res.data)
      })
      .catch((err) => {
        console.log('AXIOS get error:', err);
      })
   }   
    

    render() {
      return (
        <div>
        <ReviewList reviews={this.state.data} />
        </div>
      );
    }
}



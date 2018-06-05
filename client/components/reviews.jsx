import React from 'react';
import axios from 'axios';


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
      })
      .catch((err) => {
        console.log('AXIOS get error:',err);
      })
   }   
    
  
    render() {
      return (
        <table >
          <thead>
            <tr>
              <th>Reviews (657) </th>   
            </tr>
          </thead>
          <tbody>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <tr>
              <td></td>
              <td></td>
              <td>Date</td>   
            </tr>
          </tbody>
        </table>
      );
    }
}



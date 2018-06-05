import React from 'react';


export default class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
    };
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
            <td>Review</td>
            <td>Date</td>   
          </tr>
        </tbody>
      </table>
    );
  }
}



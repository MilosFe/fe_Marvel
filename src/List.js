import React, { Component } from "react";
import { connect } from "react-redux";
import Avenger from './Avenger';

class List extends Component {

  render() {
    let avengers;
    if (this.props.avengers.length !== 0 ) {
      console.log(this.props.avengers);
      avengers = this.props.avengers[0].data.results.map(function(avenger, index) {
     return    <Avenger  key={index} avenger={avenger}/>
      });
    }

    return (
        <section className="cards">
     <div className="container">
        <div className="row">
            <div className="col-12 col-md-12 col-sm-12">
                <p className="card__title">Results: </p>
         </div>
    </div>
    <div className='row'>
      {avengers}
    </div>
   </div>
  </section>
    );
  }
}

const map = state => {
  return {
    avengers: state.avengers  };
};


export default connect(map)(List);

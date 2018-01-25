import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getAvengers} from './actions/actions';

class Search extends Component {
componentWillMount(){
    // console.log(this.props);
}
    getAvengers(e){
        var avengers = this.refs.avengers.value;
        this.props.getAvengers(avengers);
            e.preventDefault(); 
    }
    render() {
        return (
             <form action="">
            <div className="form-group">
              <label >Search for your hero</label>
              <input type="text"  id="hero" onKeyUp={this.getAvengers.bind(this)} className='input' ref="avengers" placeholder="Capetain america?" />
            </div>
          </form>
   
        );
    }
}
const map = state => {
return {
    avengers : state.avengers
       }
};

const mapToDispatch = dispatch => {
    return bindActionCreators(
      {
        getAvengers
      },
      dispatch
    );
  };
  export default connect(map, mapToDispatch)(Search);



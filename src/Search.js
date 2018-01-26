import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getAvengers, getLocalStorage} from './actions/actions';


class Search extends Component {
componentWillMount(){

  if (localStorage.getItem("names") !== null) {
   this.props.getLocalStorage();
  }else {
    var stored ={
      0: {
          data:{
              results: []
          }
      }   
      
  }  
    localStorage.setItem("names", JSON.stringify(stored));
  }
 

}
    getAvengers(e){
        var avengers = this.refs.avengers.value;
        if (avengers === ''){
         this.props.getLocalStorage();
         return
        }
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
        getAvengers,
        getLocalStorage
      },
      dispatch
    );
  };
  export default connect(map, mapToDispatch)(Search);



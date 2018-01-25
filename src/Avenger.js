import React, { Component } from 'react';
import { connect } from "react-redux";
class Avenger extends Component {
    componentWillMount(){
        var x = this.props.avenger.thumbnail.path+"."+this.props.avenger.thumbnail.extension
        console.log(x);
    }
    render() {
      
        return (
            <div className  ="col-3 col-md-6 col-sm-12">
          <div className="card">
            <div className="cover">
              <img src={ this.props.avenger.thumbnail.path +"."+this.props.avenger.thumbnail.extension } alt="" className="cover__img"></img>
            </div>
            <h3 className="card__name">{this.props.avenger.name}</h3>
            <div className="card__bookmark">Bookmark</div>
          </div>
        </div>
        );
    }
}

export default connect()(Avenger);  
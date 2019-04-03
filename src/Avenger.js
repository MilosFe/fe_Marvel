import React, { Component } from 'react';
import { connect } from 'react-redux';

class Avenger extends Component {
	bookmarking() {
		console.log('done');
	}
	bookmark(a, e) {
		let avenger = this.props.avenger;
		let stored = JSON.parse(localStorage.getItem('names'));
		stored[0].data.results.push(avenger);
		localStorage.setItem('names', JSON.stringify(stored));
	}
	render() {
		return (
			<div className='col-3 col-md-6 col-sm-12'>
				<div className='card'>
					<div className='cover'>
						<img
							src={
								this.props.avenger.thumbnail.path +
								'.' +
								this.props.avenger.thumbnail.extension
							}
							alt=''
							className='cover__img'
						/>
					</div>
					<h3 className='card__name'>{this.props.avenger.name}</h3>
					<div className='card__bookmark' onClick={this.bookmark.bind(this)}>
						Bookmark
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(Avenger);

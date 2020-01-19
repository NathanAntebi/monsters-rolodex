import React, { Component } from 'react'
import './Card.css'

class Card extends Component{


	render(){
		const{ id, name, email } = this.props.user
		return(
			<div className="card-container">
			<img src={`https://robohash.org/${id}?set=set2`}
			/>
				<h2 key={id}>{name}</h2>
				<p>{email}</p>
				</div>
		)
	}
}

export default Card
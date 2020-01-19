import React, { Component } from 'react'
import './SearchField.css'

export default class SearchField extends Component{

	render(){
		const { placeholder, handleChange } = this.props
		return(
			<div>
			<input className= 'search'
				type="search" 
				placeholder= {placeholder} 
				onChange={handleChange} />
			</div>
			 )
	}
}
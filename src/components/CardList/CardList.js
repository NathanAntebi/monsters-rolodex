import React, { Component } from 'react';
import Card from '../Card/Card.js'
import './CardList.css'





class CardList extends Component{

 
render(){
	const { monsters } = this.props;
  return (
      <div className='card-list'>
       {
        monsters.map(user => <Card user={user} />)
       }
      </div>
  );
}
}


export default CardList;
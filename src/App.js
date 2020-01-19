import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList/CardList.js'
import SearchField from  './components/SearchField/SearchField.js'


class App extends Component{

  constructor(){
    super();

    this.state = {
      users: [
      

      ],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => this.setState({users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }


render(){
  const { users, searchField } = this.state;
  const filteredMonsters = users.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
       <SearchField placeholder="Search Monsters" handleChange={ this.handleChange } />
       <CardList monsters= {filteredMonsters} />
      </div>
  );
  }
}

export default App;

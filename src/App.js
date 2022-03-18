import React from 'react';
import Axios from 'axios'
import './components/styles/style.css'
import './App.css';
import SearchBar from './components/searchBar';
import IssuesList from './components/issuesList';

class App extends React.Component{
  state = {
    results: 0
  }
  sendSerch = (number) => {
    Axios.get(`https://api.github.com/repos/facebook/react/issues/${number}`).then((response) => {
      this.setState({ results: response.number })
    }).catch((error) => {
      console.log(error);
    })

  }

  render(){
    return(
      <div className='container'>
        <h1>React Issues</h1>
        <SearchBar />
        <div>
          
        </div>
      </div>
    )
  }
}

export default App;

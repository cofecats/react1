import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import './App.css';
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(
            m => m.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="App">
                <h1>Super title</h1>
                <SearchBox placeholder={"mosters search"}
                    handleChange={this.handleChange}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users' )
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }
}

export default App;

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Table from "./Table";
import Form from './Form'

class App extends Component{

    removeCharacter = (index) => {
        const {characters} = this.state
        //to manipulate the state
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = (character)=>{
        this.setState({characters: [...this.state.characters, character]})
    }

    state = {
        characters : []
    }
    render(){

        return(
            <div className="container">
                <Table characterData = {this.state.characters} removeCharacter = {this.removeCharacter}/>
                <Form handelSubmit = {this.handleSubmit}/>
            </div>
        )
    }
}
export default App;
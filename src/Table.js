import React, {Component} from 'react';

//simple component
const TableHeader = () =>{
    return(
            <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
            </thead>
        )
}


//simple component
const TableBody = () => {
    return(
        <tbody>
        <tr>
            <td>Charlie</td>
            <td>Janitor</td>
        </tr>
        <tr>
            <td>Huiyi</td>
            <td>Bouncer</td>
        </tr>
        <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
        </tr>
        <tr>
            <td>Dennis</td>
            <td>Bartender</td>
        </tr>
        </tbody>
    )
}

//class component
class Table extends Component{
    render(){
        return(
            <table>
                <TableHeader/>
                <TableBody/>
            </table>
        )
    }
}

export default Table;
import React, {Component} from 'react';
//class
class GuestList extends Component {
    render(){
        return(
            <div>
                <h2>hello from GuestList component</h2>
        <p>GuestList props:{JSON.stringify(this.props)}</p>
            </div>
        )//end return
    }//end render
}//end class

//export
export default GuestList
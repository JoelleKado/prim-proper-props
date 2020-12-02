import React, {Component} from 'react';
//class
class Footer extends Component {
    render(){
        return(
            <div>
                <h2>hello from Footer component</h2>
        <p>Footer props:{JSON.stringify(this.props)}</p>
            </div>
        )//end return
    }//end render
}//end class

//export
export default Footer
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <h2>hello from Header component</h2>
                {/* <p>Header props:{JSON.stringify(this.props)}</p> */}
            </div>
        )//end return
    }//end render
}//end class

//export
export default Header
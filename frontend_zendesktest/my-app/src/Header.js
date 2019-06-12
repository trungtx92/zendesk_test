import React from 'react'
import {Link} from 'react-router-dom'
// header will contain a children component
const Header = ({children}) => {

    // stype of CSS 
    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30,
        color:'red',
    };

    // define the structure of Header: Header + Children
    return (
        <div className="mainHeader">
            <h3 style={style}><Link to="/">All Tikets</Link></h3>
            
        </div>
    )
}

export default Header;
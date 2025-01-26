import React from 'react'
import './Header.css'

function Header(props) {
    return (
        <>
            <h3 id="header">{props.name}</h3>
        </>
    )
}

export default Header
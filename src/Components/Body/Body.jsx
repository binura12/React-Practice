import React from 'react'
import './Body.css'

function Body(props) {
    return (
        <>
            <h3 id="main">main Content</h3><br/>
            {props.children}
            <br />
        </>
    )
}

export default Body
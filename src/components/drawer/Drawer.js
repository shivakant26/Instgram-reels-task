import React from 'react'
import "./drawer.css"
const Drawer = (props) => {
    console.log("hii")
    return (
        <div className="custom-drawer">
            <button onClick={props.onClose}>Close Drawer</button>
            <h2>Custom Drawer Content</h2>
            <p>This is a custom drawer that slides up from the bottom.</p>
        </div>
    )
}

export default Drawer
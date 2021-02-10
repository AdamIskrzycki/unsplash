import React from 'react';
import "./BrowserInput.css";

const BrowserInput = (props) => {
    return <input type='text'
        className="BrowserInput"
        placeholder="Search free high-resolution photos "
        value={props.value}
        onChange={props.changed}
        onKeyPress={props.onPress}></input>
}

export default BrowserInput;
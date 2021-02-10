import React, { useEffect } from 'react';
import "./Browser.css";
import { useState } from 'react';
import BrowserInput from '../BrowserInput/BrowserInput';
import { Redirect } from 'react-router-dom'

const Browser = () => {

    const [inputValue, setInputValue] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [photos, setPhotos] = useState([]);

    const onInputChange = (e) => {
        if (inputValue.length >= 2) {
            console.log("No prompts found")
        }
        setInputValue(e.target.value)
    }

    const handleKeyPress = (e) => {
        if(inputValue.length !== 0) {    
            if (e.code === "Enter") {
                setIsSearching(true);
            }
        }
    }


    return (
        <>
            {isSearching ? <Redirect to={`/galery/${inputValue}`} /> : null}
            <div className="BrowserContainer">
                <section className="UnsplashContainer">
                    <header className="UnsplashHeader">UNSPLASH</header>
                    <p>The internet source of freely-usable images</p>
                    <p>Powered by creators everywhere</p>
                    <BrowserInput value={inputValue} changed={onInputChange} onPress={handleKeyPress} />
                </section>
            </div>
        </>
    )
}

export default Browser;
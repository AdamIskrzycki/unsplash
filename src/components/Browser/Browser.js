import React, { useEffect } from 'react';
import "./Browser.css";
import { useState } from 'react';
import BrowserInput from '../BrowserInput/BrowserInput';
import { useHistory } from 'react-router-dom'

const Browser = () => {

    const [inputValue, setInputValue] = useState("");
    const [hints, setHints] = useState([]);

    const history = useHistory()

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleKeyPress = (e) => {

        if (e.code === "Enter") {
            goToGalery(null);
        }

    }

    const goToGalery = (e) => {
            if(e === null) {
            history.push(`/galery/${inputValue}`)
            } else history.push(`/galery/${document.getElementById("Hint").innerHTML}`)  // FIX e.target.value for paragraph
        
    }

    useEffect(() => {
        if (inputValue.length >= 2) {
            const fetchData = async () => {
                try {
                    const response = await fetch(`https://api.unsplash.com/search?query=${inputValue}&client_id=RIvvLcDMXmoibV0w0qpbOnwDWWWNeh5YuomXUrbgsuQ`)
                    const data = await response.json();
                    setHints(data.photos.results);
                }
                catch (err) {
                    console.log(err)
                }
            }

            fetchData();
        }
    }, [inputValue])

    //TODO
    //Galery component - photo preview (modal)
    //Galery component - fix searchbar
    //Browser component - fix scrollbar when there is a lot of hints rendered
    //General styling


    return (
        <>
            <div className="BrowserContainer">
                <section className="UnsplashContainer">
                    <header className="UnsplashHeader">UNSPLASH</header>
                    <p>The internet source of freely-usable images</p>
                    <p>Powered by creators everywhere</p>
                    <BrowserInput value={inputValue} changed={onInputChange} onPress={handleKeyPress} />
                    {inputValue ? <div className="HintsContainer">
                        {hints.map(hint => {
                            return <p id="Hint" onClick={goToGalery}>{hint.alt_description}</p>
                    })}
                    </div> : null}
                    {/* <select onChange={goToGalery} className="Dropdown">
                        <option>Select One</option>
                        {hints.map(hint => {
                            return <option value={hint.alt_description}>{hint.alt_description}</option>
                        })}
                    </select> */}
                </section>
            </div>
        </>
    )
}

export default Browser;
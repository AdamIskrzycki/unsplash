import React from "react";
import "./BrowserInput.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const BrowserInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [hints, setHints] = useState([]);
  const [hintsVisibility, setHintsVisibility] = useState(true);

  const history = useHistory();

  useEffect(() => {
    if (inputValue.length >= 2) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.unsplash.com/search?query=${inputValue}&client_id=RIvvLcDMXmoibV0w0qpbOnwDWWWNeh5YuomXUrbgsuQ`
          );
          const data = await response.json();
          setHints(data.photos.results);
        } catch (err) {
          console.log(err);
        }
      };

      fetchData();
    }
  }, [inputValue]);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      goToGalery(null);
    }
  };

  const goToGalery = (e, descripion) => {
    setHintsVisibility(true);
    if (e === null) {
      history.push(`/galery/${inputValue}`);
    } else history.push(`/galery/${descripion}`);
  };

  const hideHints = (e) => {
    // setTimeout(() => setHintsVisibility(false), 80)    // bad solution, try other approaches
    try {
      if (e.relatedTarget.className === "Hint") {
        setHintsVisibility(true);
      }
    }
    catch {
      setHintsVisibility(false);
    }
  };

  const showHints = () => {
    setHintsVisibility(true);
  };

  return (
    <>
      <input
        type="text"
        className="BrowserInput"
        placeholder="Search free high-resolution photos"
        value={inputValue}
        onChange={onInputChange}
        onKeyPress={handleKeyPress}
        onFocus={showHints}
        onBlur={hideHints}
      ></input>
      {inputValue.length > 2 && hintsVisibility ? (
        <div className="HintsContainer">
          {hints.map((hint) => {
            return (
              <p
                tabIndex='0'
                className="Hint"
                onBlur={hideHints}
                onClick={(e) => goToGalery(e, hint.alt_description)}
              >
                {hint.alt_description}
              </p>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default BrowserInput;

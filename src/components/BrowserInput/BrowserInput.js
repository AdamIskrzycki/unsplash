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
    if (inputValue.length > 2) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.unsplash.com/search?query=${inputValue}&client_id=RIvvLcDMXmoibV0w0qpbOnwDWWWNeh5YuomXUrbgsuQ`
          );
          const data = await response.json();
          console.log('data', data)
          setHints(data.related_searches);
          console.log("hints: ", hints);
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
    if (inputValue !== "") {
      if (e === null) {
        history.push(`/galery/${inputValue}`);
      } else history.push(`/galery/${descripion}`);
    } else alert("You didn't search anything!")
  };

  const hideHints = (e) => {
    try {
      if (e.relatedTarget.className === "Hint") {
        setHintsVisibility(true);
      }
    } catch {
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
      {inputValue.length > 2 && hintsVisibility && hints.length !== 0 ? (
        <div className="HintsContainer">
          {hints.map((hint) => {
            return (
              <p
                tabIndex="0"
                className={hint.title === null ? "HiddenHint" : "Hint"}
                onBlur={hideHints}
                onClick={(e) => goToGalery(e, hint.title)}
              >
                {hint.title}
              </p>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default BrowserInput;

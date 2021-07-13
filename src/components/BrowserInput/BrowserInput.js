import React from "react";
import "./BrowserInput.css";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const BrowserInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [relatedSearches, setRelatedSearches] = useState([]);


  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (inputValue.length > 2) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.unsplash.com/search?query=${inputValue}&client_id=RIvvLcDMXmoibV0w0qpbOnwDWWWNeh5YuomXUrbgsuQ`
          );
          const data = await response.json();
          setRelatedSearches(data.related_searches);
        } catch (err) {
          console.log(err);
        }
      };

      fetchData();
    }
  }, [inputValue]);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
    console.log('location: ', location);
  };

  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      goToGalery(null);
    }
  };

  const goToGalery = (e, descripion) => {
    if (inputValue !== "") {
      if (e === null) {
        history.push(`/galery/${inputValue}`);
      } else history.push(`/galery/${descripion}`);
    } else alert("You didn't search anything!")
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
      ></input>
      <section className="RelatedSearchesContainer">
            {relatedSearches && inputValue.length > 2 && location.pathname === '/'
              ? relatedSearches.map((search) => {
                  return <div className="RelatedSearch" onClick={(e) => goToGalery(e, search.title)}>{search.title}</div>;
                })
              : null}
      </section>
    </>
  );
};

export default BrowserInput;

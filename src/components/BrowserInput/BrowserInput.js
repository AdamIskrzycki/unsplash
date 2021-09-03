import React from "react";
import "./BrowserInput.css";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

const BrowserInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [relatedSearches, setRelatedSearches] = useState([]);
  const [noSearches, setNoSearches] = useState(false);

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
          console.log('response', response);
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
    setNoSearches(false);
  };

  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      goToGalery(null);
    }
  };

  const goToGalery = (e, descripion) => {
    if (inputValue.length > 0 && relatedSearches.length !== 0) {
      if (e === null) {
        history.push(`/galery/${inputValue}`);
      } else history.push(`/galery/${descripion}`);
    } else setNoSearches(true);
  };

  return (
    <>
      <section className="inputContainer">
      <input
        type="text"
        className="BrowserInput"
        placeholder="Search free high-resolution photos"
        value={inputValue}
        onChange={onInputChange}
        onKeyPress={handleKeyPress}
      >
      
      </input>
        <div className="searchIcon" style={{color: location.pathname === "/" ? "white" : "black"}} onClick={(e) => goToGalery(e, inputValue)}>
          <SearchIcon fontSize='large'/>
        </div>
      </section>
      <section className="RelatedSearchesContainer">
            {relatedSearches && inputValue.length > 2 && location.pathname === '/'
              ? relatedSearches.map((search) => {
                  return <div className="RelatedSearch" onClick={(e) => goToGalery(e, search.title)}>{search.title}</div>;
                })
              : null} 
             <div className="noSearches" style={{display: noSearches ? "block" : "none"} }>
               There are no results for the given phrase
             </div> 
      </section>
    </>
  );
};

export default BrowserInput;

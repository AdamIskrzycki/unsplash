import React from "react";
import "./BrowserInput.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

const BrowserInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  //const [relatedSearches, setRelatedSearches] = useState([]);
  const [noSearches, setNoSearches] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (inputValue.length > 2) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${inputValue}&client_id=RIvvLcDMXmoibV0w0qpbOnwDWWWNeh5YuomXUrbgsuQ`
          );
          const data = await response.json();
          console.log('response', data);
          // setRelatedSearches(data.related_searches);
          // setRelatedSearches([])
        } catch (err) {
          console.log(err);
        }
      };

      fetchData();
    }
  }, [inputValue]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setNoSearches(false);
  };

  const goToGalery = (e: null | React.MouseEvent<HTMLDivElement>, descripion?: string) => {
    if (inputValue.length > 0) { // && relatedSearches.length !== 0
      if (e === null) {
        navigate(`/galery/${inputValue}`);
      } else navigate(`/galery/${descripion}`);
    } else setNoSearches(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      goToGalery(null);
    }
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
        onKeyDown={handleKeyPress}
      >
      
      </input>
        <div className="searchIcon" style={{color: location.pathname === "/" ? "white" : "black"}} onClick={(e) => goToGalery(e, inputValue)}>
          <SearchIcon fontSize='large'/>
        </div>
      </section>
      <section className="RelatedSearchesContainer">
            {/* {relatedSearches && inputValue.length > 2 && location.pathname === '/'
              ? relatedSearches.map((search) => {
                  return <div className="RelatedSearch" onClick={(e) => goToGalery(e, search.title)}>{search.title}</div>;
                })
              : null}  */}
             <div className="noSearches" style={{display: noSearches ? "block" : "none"} }>
               There are no results for the given phrase
             </div> 
      </section>
    </>
  );
};

export default BrowserInput;

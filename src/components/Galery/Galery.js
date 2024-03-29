import React, { useEffect, useState } from "react";
import BrowserInput from "../BrowserInput/BrowserInput";
import "./Galery.css";
import "../BrowserInput/BrowserInput.css";
import { useParams, useHistory } from "react-router-dom";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";

const Galery = () => {
  const { searchTag } = useParams();
  const [photos, setPhotos] = useState([]);
  const [relatedSearches, setRelatedSearches] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState(null);
  const [currentImagePersonName, setCurrentImagePersonName] = useState(null);
  const [currentImagePlace, setCurrentImagePlace] = useState(null);


  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search?query=${searchTag}&client_id=RIvvLcDMXmoibV0w0qpbOnwDWWWNeh5YuomXUrbgsuQ`
        );
        const data = await response.json();
        setPhotos(data.photos.results);
        setRelatedSearches(data.related_searches);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [searchTag]);

  const getImageInformation = (imageUrl, imagePersonName, imagePlace) => {
    setOpenModal(true);
    setCurrentImageUrl(imageUrl);
    setCurrentImagePersonName(imagePersonName);
    setCurrentImagePlace(imagePlace);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const searchSource = (descripion) => {
       history.push(`/galery/${descripion}`);
  };

  return (
    <>
      <nav className="NavBar">
        <BrowserInput/>
      </nav>
      <section className="GaleryContainer">
        {searchTag ? (
          <p className="SearchTag">{searchTag}</p>
        ) : (
          <p>no searchtag provided</p>
        )}
        <div>
          <div className="RelatedSearchesContainer">
            {relatedSearches
              ? relatedSearches.map((search) => {
                  return <div className="RelatedSearch" onClick={() => searchSource(search.title)}>{search.title}</div>;
                })
              : null}
          </div>
          <div className="GaleryGrid">
            <Dialog open={openModal} onClose={handleModalClose}>
              <DialogTitle>Taken by: {currentImagePersonName}</DialogTitle>
              <DialogContent>
                <img className="ModalImagePreview" src={currentImageUrl}></img>
              </DialogContent>
              <DialogTitle>{currentImagePlace}</DialogTitle>
            </Dialog>
            {photos.map((photo) => {
              return (
                <>
                  <div key={photo.id}>
                    <img
                      className="Image"
                      src={photo.urls.small}
                      onClick={() => {
                        getImageInformation(
                          photo.urls.regular,
                          photo.user.name,
                          photo.user.location
                        );
                      }}
                    />
                    <div className="IndividualTagsContainer">
                      {photo.tags.map((tag) => {
                        return <p className="IndividualTag" onClick={() => searchSource(tag.title)}>{tag.title}</p>;
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Galery;

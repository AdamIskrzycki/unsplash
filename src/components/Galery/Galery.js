import React, { useEffect, useState } from "react";
import BrowserInput from "../BrowserInput/BrowserInput";
import "./Galery.css";
import { useParams } from "react-router-dom";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";

// check masonry grid for photos display

const Galery = () => {
  const { searchTag } = useParams();
  const [photos, setPhotos] = useState([]);
  const [relatedSearches, setRelatedSearches] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState(null);
  const [currentImagePersonName, setCurrentImagePersonName] = useState(null);
  const [currentImagePlace, setCurrentImagePlace] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search?query=${searchTag}&client_id=RIvvLcDMXmoibV0w0qpbOnwDWWWNeh5YuomXUrbgsuQ`
        );
        const data = await response.json();
        console.log("data: ", data);
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

  return (
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
                return <div className="RelatedSearch">{search.title}</div>;
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
                      return <p className="IndividualTag">{tag.title}</p>;
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Galery;

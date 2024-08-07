import React, { useEffect, useState } from "react";
import BrowserInput from "../BrowserInput/BrowserInput";
import "./Galery.css";
import "../BrowserInput/BrowserInput.css";
import { useParams, useNavigate } from "react-router-dom";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";


interface PhotosTypes {
  id: string,
  urls: {
    small: string,
    regular: string,
  },
  user: {
    name: string,
    location: string
  },
  tags: [{
    title: string,
  }]
}



const Galery: React.FC = () => {
  const { searchTag } = useParams<{searchTag: string}>();
  const [photos, setPhotos] = useState<PhotosTypes[]>([]);
  const [relatedSearches, setRelatedSearches] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState<null | string>(null);
  const [currentImagePersonName, setCurrentImagePersonName] = useState<null | string>(null);
  const [currentImagePlace, setCurrentImagePlace] = useState<null | string>(null);


  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${searchTag}&client_id=RIvvLcDMXmoibV0w0qpbOnwDWWWNeh5YuomXUrbgsuQ`
        );
        const data = await response.json();
        setPhotos(data.results)
        // console.log('photos', photos)

        // find a way to show some realated searches - go through the api response and look for appropriate fields to display

        // setRelatedSearches(data.related_searches);
        // setRelatedSearches([])
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [searchTag]);

  const getImageInformation = (imageUrl: string, imagePersonName: string, imagePlace: string) => {
    setOpenModal(true);
    setCurrentImageUrl(imageUrl);
    setCurrentImagePersonName(imagePersonName);
    setCurrentImagePlace(imagePlace);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const searchSource = (descripion: string) => {
       navigate(`/galery/${descripion}`);
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
          {/* <div className="RelatedSearchesContainer">
            {relatedSearches
              ? relatedSearches.map((search) => {
                  return <div className="RelatedSearch" onClick={() => searchSource(search.title)}>{search.title}</div>;
                })
              : null}
          </div> */}
          <div className="GaleryGrid">
            <Dialog open={openModal} onClose={handleModalClose}>
              <DialogTitle>Taken by: {currentImagePersonName}</DialogTitle>
              <DialogContent>
                <img className="ModalImagePreview" src={currentImageUrl!}></img>
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

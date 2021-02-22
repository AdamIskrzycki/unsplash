import React, { useEffect, useState } from 'react';
import BrowserInput from '../BrowserInput/BrowserInput';
import './Galery.css';
import { useParams } from 'react-router-dom'
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";


const Galery = () => {

    const { searchTag } = useParams()
    const [photos, setPhotos] = useState([]);
    const [relatedSearches, setRelatedSearches] = useState();
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.unsplash.com/search?query=${searchTag}&client_id=RIvvLcDMXmoibV0w0qpbOnwDWWWNeh5YuomXUrbgsuQ`)
                const data = await response.json();
                console.log("data: ", data);
                setPhotos(data.photos.results);
                setRelatedSearches(data.related_searches)
            }
            catch (err) {
                console.log(err)
            }
        }


        fetchData();
    }, [searchTag])

    const handleModalOpen = () => {
        setOpenModal(true);
    }

    const handleModalClose = () => {
        setOpenModal(false);
    }

    return (
        <nav className="NavBar">
            <Dialog open={openModal} onClose={handleModalClose}>
                <DialogTitle>TEST TITLE</DialogTitle>
                <DialogContent>TEST CONTENT</DialogContent>
            </Dialog>
            <BrowserInput value={searchTag} />
            {searchTag ? <p className="SearchTag">{searchTag}</p> : <p>no searchtag provided</p>}
            <div>
                <div className="RelatedSearchesContainer">
                    {relatedSearches ? relatedSearches.map(search => {
                        return <div className="RelatedSearch">{search.title}</div>
                    }) : null}
                </div>
                <div className="GaleryGrid">
                    {photos.map(photo => {
                        return (
                            <div key={photo.id}>
                                <img className="Image" src={photo.urls.small} onClick={handleModalOpen}></img>
                                <div className="IndividualTagsContainer">
                                    {photo.tags.map(tag => {
                                        return <p className="IndividualTag">{tag.title}</p>
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Galery;
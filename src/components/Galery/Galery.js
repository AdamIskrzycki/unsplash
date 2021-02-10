import React, { useEffect, useState } from 'react';
import BrowserInput from '../BrowserInput/BrowserInput';
import './Galery.css';
import { useParams } from 'react-router-dom'


const Galery = () => {

    const { searchTag } = useParams()
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.unsplash.com/search?query=${searchTag}&client_id=ToDo`)
                const data = await response.json();
                console.log("data: ", data)
                setPhotos(data.photos.results);
                console.log("photos: ", photos)
            }
            catch (err) {
                console.log(err)
            }
        }

        fetchData();
    }, [searchTag])

    return(
        <nav className="NavBar">
            {searchTag ? <span>Your search tag is {searchTag}</span> : <span>no searchtag provided</span>}
            <BrowserInput />
            <div>
                {photos.map(photo => {
                    return <img src={photo.urls.small}></img>
                })}
            </div>
        </nav>
    )
}

export default Galery;
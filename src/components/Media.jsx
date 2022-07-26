import React, { useEffect, useState } from 'react';
import './Media.css'
import trendingIcon from './images/trendingIcon.svg';
import artists from './images/artists.svg'
import clips from './images/clips.svg'
import stories from './images/stories.svg'
import { fetchSearchedGifs, fetchTrendingGifs } from '../services/giphyApi';
import TrendingGifs from './TrendingGifs';
import giphyArtists from '../artists';


const Media = () => {
    const [trending, setTrendingGifs] = useState([]);
    const [artistContainer, setArtistsContainer] = useState([]);

    const randomizeData = (content) => {
        return content.data.sort(() => Math.random() - 0.5);
    }

    const getTrendingGifs = async () => {
        const trending = await fetchTrendingGifs();
        setTrendingGifs(randomizeData(trending.data))
    };

    const getGifArtists = async () => {
        const artists = await Promise.all(
            giphyArtists.map(async (giphyArtist) => {
                return fetchSearchedGifs(giphyArtist).then((res) => res.data.data);
            })
        );
        setArtistsContainer(artists.flat());
    };

    useEffect(() => {
        getTrendingGifs();
        getGifArtists();
    }, []);

    console.log(artistContainer, ' what is in artist ? ');

    return (
        // SECTION CONTAINER
        <div className='media'>
            {/* SECTION */}
            <div className="row">
                {/* SECTION TITLE  */}
                <div className="row-header">
                    <img src={trendingIcon} alt="Trending" />
                    <h1>Trending</h1>
                </div>
                {/* SECTION CONTENT  */}
                <div className='trending-container'>
                    {/* loop through trending giphs */}
                    {trending?.map((trendingGifs, index) => {
                        return <TrendingGifs giphy={trendingGifs} key={index} />
                    })}
                </div>
            </div> 
            {/* END SECTION .row */}

            {/* SECTION */}
            <div className="row">
                {/* SECTION TITLE  */}
                <div className="row-header">
                    <img src={artists} alt="Artists" />
                    <h1>Artists</h1>
                </div>
                {/* SECTION CONTENT  */}
                <div className='artists-container'>
                    {artistContainer.map((giphyArtists) => {
                        return <h2>{giphyArtists.title}</h2>
                    })}
                </div>
            </div>
            {/* END SECTION .row */}

            {/* SECTION */}
            <div className="row">
                {/* SECTION TITLE  */}
                <div className="row-header">
                    <img src={clips} alt="Clips" />
                    <h1>Clips</h1>
                </div>
                {/* SECTION CONTENT  */}
                <div className='clips-container'>
                    <p>Content</p>
                </div>
            </div>
            {/* END SECTION  .row*/}

            {/* SECTION */}
            <div className="row">
                {/* SECTION TITLE  */}
                <div className="row-header">
                    <img src={stories} alt="Stories" />
                    <h1>Stories</h1>
                </div>
                {/* SECTION CONTENT  */}
                <div className='stories-container'>
                    <p>Content</p>
                </div>
            </div>
            {/* END SECTION  .row*/}

        </div>
        // .media
    );
}

export default Media;
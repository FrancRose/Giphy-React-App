import React from "react";
import "./TrendingGifs.css";

const TrendingGifs = ({ giphy }) => {
    return (
        <div className="trending-gif" key={giphy.id}>
            <img src={giphy.images.downsized.url} 
                    alt={giphy.title} 
            />
            
        </div>
    )
}

export default TrendingGifs;
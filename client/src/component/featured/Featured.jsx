import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { getRandomFeaturedMovie } from "../service/api";

const Featured = ({ type, setGenre }) => {

    const [content,setContent] = useState({});
    
    useEffect(()=>{
        const getRandomContent = async()=>{
            const response = await getRandomFeaturedMovie(type);
            setContent(response);
        }
        getRandomContent();
    },[type]);

    return (
        <div className="featured">
            {
                type && (
                    <div className="category">
                        <span>{type === "movies" ? "Movies" : "Series"}</span>
                        <select name="genre" id="genre" onChange={(e)=>setGenre(e.target.value)}>
                            <option>Genre</option>
                            <option value="adventure">Adventure</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="historical">Historical</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Sci-fi</option>
                            <option value="thriller">Thriller</option>
                            <option value="western">Western</option>
                            <option value="animation">Animation</option>
                            <option value="drama">Drama</option>
                            <option value="documentary">Documentary</option>
                        </select>
                    </div>
                )
            }
            <img
                width="100%"
                src={content.img}
                alt="home image"
            />
            <div className="info">
                <img
                    src={content.imgSm}
                    alt=""
                />
                <span className="desc">
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

Featured.propTypes = {
    type: PropTypes.string,
    setGenre: PropTypes.func
}

export default Featured
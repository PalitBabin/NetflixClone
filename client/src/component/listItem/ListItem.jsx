import { Add, PlayArrow,ThumbDownOutlined , ThumbUpAltOutlined } from "@mui/icons-material";
import "./listItem.scss";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getMovie } from "../service/api";
import {useNavigate} from "react-router-dom";


const ListItem = ({index,item}) => {

  const [isHovered,setIsHovered] = useState(false);
  const [movie,setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(()=>{
    const getMovieFromList = async()=>{
      const response = await getMovie(item);
       setMovie(response);
    }
    getMovieFromList();
  },[item]);

  const handleClick = ()=>{
    navigate("/watch", {state: { movie: movie}});
  }
  return (
    
    <div 
    className="listItem" 
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}
    style={{left : isHovered && ((index * 225) -50) + (index * 2.5)}}
    onClick={()=>handleClick()}
    >
        <img src={movie.img} alt="movies item" />
        {
          isHovered && (
        <>
        <video src={movie.trailer} autoPlay={true} loop />
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon"/>
            <Add className="icon"/>
            <ThumbUpAltOutlined className="icon"/>
            <ThumbDownOutlined className="icon"/>
          </div>
          <div className="itemInfoTop">
            <span>{movie.duration}</span>
            <span className="limit">+{movie.limit}</span>
            <span>{movie.year}</span>
          </div>
          <div className="desc">
           {movie.desc}
          </div>
          <div className="genre">{movie.genre}</div>
        </div>
        </>
        )}
    </div>
  
  )
}

ListItem.propTypes = {
  index: PropTypes.number,
  item:PropTypes.string
}


export default ListItem;
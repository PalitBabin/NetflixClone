import { ArrowBackOutlined } from "@mui/icons-material";
import { Link, useLocation} from "react-router-dom";
import "./watch.scss";

const Watch = () => {


 const location = useLocation();
const movie = location.state.movie;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
      </Link>
        <div className="video-container">
        <video 
        className="video"
        autoPlay
        controls
        src={movie.video} />
   </div>
   </div>

  )
}

export default Watch
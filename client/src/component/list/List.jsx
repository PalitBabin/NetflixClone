import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import './list.scss';
import ListItem from '../listItem/ListItem';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {v4 as uuid} from "uuid";

const List = ({list}) => {

    const listRef = useRef();
    const [slideNumber,setSlideNumber] = useState(0);
    const [isMoved,setIsMoved] = useState(false);
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
    const handleClick = (direction)=>{
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x -50;
        
        if(direction === "left" && slideNumber > 0){
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
            setSlideNumber(slideNumber -1);
        }
        if(direction === "right" && slideNumber < 10 -clickLimit){
            
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
            setSlideNumber(slideNumber + 1);
        }
    }
    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined 
                className="sliderArrow left" 
                style={{display: !isMoved && "none"}}
                onClick={()=>handleClick("left")}

                />
                <div className="container" ref={listRef}>
                    {
                        list.content.map((item,i)=>(
                            <ListItem key={uuid()} index={i} item={item}/>
                        ))
                    }
                    
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>
            </div>
        </div>
    )
}

List.propTypes = {
    list:PropTypes.object
}
export default List;
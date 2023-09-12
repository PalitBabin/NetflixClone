import Featured from '../../featured/Featured';
import List from '../../list/List';
import Navbar from '../../navbar/Navbar';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './home.scss';
import { getRandomMoviesList } from '../../service/api';
import { v4 as uuid } from 'uuid';

const Home = ({type}) => {

    const [lists,setLists] = useState([]);
    const [genre,setGenre] = useState("");

    useEffect(()=>{
        const getRandomLists = async()=>{
                const response = await getRandomMoviesList(type,genre);
                setLists(response);
        }
        getRandomLists();
    },[genre, type]);

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} setGenre={setGenre}/>
            {
                lists && lists.map((list)=>(
                    <List key={uuid()} list={list}/>
                ))
            }
            
        </div>

    );
}

Home.propTypes = {
    type:PropTypes.string
}
export default Home;
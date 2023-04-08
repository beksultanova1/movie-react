import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {APİ_KEY} from "../APİ/api";
import MovieCard from "../companents/MovieCard";
import {LanguageContext} from "../context";

const TopRated = () => {
    const [topRated, setTopRated] = useState([])
    const array = [1, 2,3,4,5,6,7,8,9,10]
    const [active, setActive] = useState(1)
    const {language, dark} = useContext(LanguageContext)
    const getTopRated = (key) =>{
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${active}`)
            .then((res) =>{setTopRated(res.data.results)})
    }
    useEffect(() => {
        getTopRated(APİ_KEY)
    }, [active, language])
    return (
        <div id="topRated" style={{background: dark === true ? "white" : "#0b457e"}}>
            <div className="container">
                <h1 style={{color: dark === true ? "#0b457e" : "white"}}>Top Rated</h1>
               <div className="topRated">
                   {
                     topRated.map((el)=>{
                         return(
                             <MovieCard el={el}/>
                         )
                     })
                   }
               </div>
                <div className="topRated--pages">
                    {
                        array.map((btn)=>(<button onClick={() =>{setActive(btn)}}>{btn}</button>))
                    }
                </div>
            </div>
        </div>
    );
};

export default TopRated;


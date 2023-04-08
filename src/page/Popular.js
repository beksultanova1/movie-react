import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {APİ_KEY} from "../APİ/api";
import MovieCard from "../companents/MovieCard";
import {LanguageContext} from "../context";

const Popular = () => {
    const [popular, setPopular] = useState([])
    const [pages, setPages] = useState( 1)
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)

    console.log(language)
    const getPopular = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${pages}`)
            .then((res)=>{
                console.log(res.data.results)
                setPopular(res.data.results)
            })
    }
    useEffect(() => {
       getPopular(APİ_KEY)
    }, [pages, language])
    return (
        <div id="popular" style={{background: dark === true ? "white" : "#0b457e"}}>
            <div className="container">
                <h1 style={{color: dark === true ? "#0b457e" : "white"}}>POPULAR</h1>
                <div className="popular">
                    {
                       popular.map((el)=>{
                           return(
                               <MovieCard el={el} id={el.id}/>
                           )
                       })
                    }
                </div>
                <div className="popular--pages">
                           <div className="popular--pages__btn">
                               <button onClick={()=> {setPages(pages + 1)}}>next</button>
                               <h1>{pages}{pages ? pages === -0 : setPages(1)}</h1>
                               <button onClick={()=> {setPages(pages -1)}}>back</button>
                           </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;
import React, {useState, useEffect} from 'react';
import axios from "axios";
import {APİ_KEY} from "../APİ/api";
import {Link, useParams} from "react-router-dom";
import MovieCard from "../companents/MovieCard";

const Search = () => {
    const [movieSearch, setMovieSearch] = useState([])
    const {movieName} = useParams()
    const getSearch = (key) => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
            .then((res) =>{
                setMovieSearch(res.data.results)
            })
    }
    useEffect(()=>{
       getSearch(APİ_KEY)
    }, [movieName])
    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    <h1>Добро пожаловать.</h1>
                    <h3>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>
                    {
                        movieSearch.map((el)=>(
                           <MovieCard el={el}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;

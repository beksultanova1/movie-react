import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {APİ_KEY} from "../../APİ/api";
import {Link} from "react-router-dom";
import {LanguageContext} from "../../context";


const ActorMovie = ({personId}) => {
    const [actorMovie, setActorMovie] = useState([])
    const {language} = useContext(LanguageContext)
    const getActorMovie = (key) =>{
        axios(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${key}&language=${language}`)
            .then((res)=>{
                setActorMovie(res.data.cast)
            })
    }
    useEffect(()=>{
        getActorMovie(APİ_KEY)
    }, [language])
    console.log(actorMovie)
    return (
        <div id="actorMovie">
            <div className="container">
                <h2>Известность за</h2>
               <div className="actorMovie">
                   {
                       actorMovie.map((el) => {
                           return(
                               <div className="actorMovie--card">
                                   <Link to={`/movie/movie_details/${el.id}`}>
                                   {
                                     el.poster_path ? <img width={160} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.poster_path}`} alt=""/>
                                     : <img width={160} src={`https://www.themoviedb.org/t/p/w1280/4ZlJ6Ik6F84ePKNABynbVCly8eQ.jpg`} alt=""/>
                                   }
                                   </Link>
                                   <h3>{el.title}</h3>
                               </div>
                           )
                       })
                   }

               </div>
            </div>
        </div>
    );
};

export default ActorMovie;
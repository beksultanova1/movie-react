import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APİ_KEY} from "../../APİ/api";
import {AiFillHeart, AiFillProfile, AiFillStar} from "react-icons/ai";
import {FaBookmark} from "react-icons/fa";
import Actors from "../Actors";
import TopRated from "../../page/TopRated";
import Trailer from "../Trailer";
import {LanguageContext} from "../../context";


const MovieDetails = () => {
    const [details, setDetails] = useState({})
    const {id} = useParams()
    const {language} = useContext(LanguageContext)
    const getDetails = (key) =>{
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=${language}`)
            .then((res)=>{
                console.log(res.data)
                setDetails(res.data)
            })
    }
    useEffect(()=>{
         getDetails(APİ_KEY)
    }, [language])
    const {poster_path, original_title, release_date, overview, runtime, genres ,backdrop_path, vote_average} = details
    return (
  <>
      <div  id="details" style={{
          background: backdrop_path ? `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}") no-repeat center/cover` : `url("https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2022-12/disney.jpeg?h=d1cb525d&itok=v7uL_3xt")`
      }}>
          <div className="container">
              <div className="details">
                  <div className="details--img">

                      {
                          poster_path ?
                          <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt="img"/>
                          : <img src={`https://www.theparkpixie.com/wp-content/uploads/2021/10/disney-plus-just-beyond-683x1024.jpg`} width={200} alt="img"/>
                      }
                  </div>
                  <div className="details--info">
                      <h1>{original_title}</h1>
                      <div className="details--info__icons">
                          <h2>{Math.round(vote_average * 10)}<sup>%</sup></h2>
                          <h6>Rating</h6>
                          <div className="details--info__icons--icon1">
                              <h5><AiFillProfile/></h5>
                              <h5><AiFillHeart/></h5>
                              <h5><FaBookmark/></h5>
                              <h5><AiFillStar/></h5>
                          </div>
                      </div>
                      <div className="details--info__genres">
                          {
                              genres?.map((el)=>{
                                  return(
                                      <h4>{el.name}</h4>
                                  )
                              })
                          }
                      </div>
                      <h3><span style={{color: "#fff", fontSize: "22px", fontWeight: "900"}}>Release_date: </span>{release_date}</h3>
                      <h3><span style={{color: "#fff", fontSize: "22px", fontWeight: "900"}}>Runtime: </span>{Math.floor(runtime / 60)}<small>hour</small> {runtime % 60} <small>min</small></h3>
                      <h4><span style={{color: "#fff", fontSize: "22px", fontWeight: "900"}}>Overview: </span>{overview}</h4>
                  </div>
              </div>
          </div>
      </div>
      <Actors id={id}/>
      <Trailer id={id}/>
  </>

    );
};

export default MovieDetails;
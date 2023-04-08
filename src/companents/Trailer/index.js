import React, {useState, useEffect} from 'react';
import axios from "axios";
import {APİ_KEY} from "../../APİ/api";

const Trailer = ({id}) => {
    const [video, setVideo] = useState([])

    const getVideo = (key) =>{
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then((res)=>{
                setVideo(res.data.results)
            })
    }
    useEffect(()=>{
        getVideo(APİ_KEY)
    })
    console.log(video)
    return (
        <div id="video">
            <div className="container">
                <div className="video">
                    {
                       video.map((el)=>(
                           <div className="video--card">
                               <iframe width="366" height="243" src={`https://www.youtube.com/embed/${el.key}`}
                                       title="FAST X | Official Trailer" frameBorder="0"
                                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                       allowFullScreen></iframe>
                           </div>
                       ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Trailer;
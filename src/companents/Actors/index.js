import React, {useState, useEffect} from 'react';
import axios from "axios";
import {APİ_KEY} from "../../APİ/api";
import user from "../../img/user — копия.jpeg"
import Slider from "react-slick";
import {Link} from "react-router-dom"


const Actors = ({id}) => {
    const [actors, setActors] = useState([])
    const getActors = (key) =>{
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
            .then((res)=>{
                setActors(res.data.cast)
            })
    }
    useEffect(()=>{
        getActors(APİ_KEY)
    }, [])
    console.log(actors)
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div id="actors">
            <div className="container">
                <h1>В главных ролях</h1>
                <div className="actors">
                    <Slider {...settings}>
                        {
                            actors.map((el)=>(
                                <div className="actors--card">
                                    <Link to={`/actor/actor_details/${el.id}`}>
                                        {el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${el.profile_path}`} alt="img"/>
                                            : <img style={{width: "230px"}}src={user} alt="img"/>}
                                        <h4>{el.name}</h4>
                                    </Link>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};


export default Actors;
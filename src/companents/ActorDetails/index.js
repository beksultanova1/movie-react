import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {APİ_KEY} from "../../APİ/api";
import {useParams} from "react-router-dom";
import ActorMovie from "../ActorMovie";
import {LanguageContext} from "../../context";

const ActorDetails = () => {
    const [actorDetails, setActorDetails] = useState({})
    const [bio, setBio] = useState(300)
    const {personId} = useParams()
    const {language} = useContext(LanguageContext)
    const getActorDetails = (key) =>{
        axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=${language}`)
            .then((res)=> {
                setActorDetails(res.data)
            })
    }
    const more = (text) => {
        if (bio === 300){
            setBio(text.length)
        }else {
            setBio(300)
        }
    }
    useEffect(()=>{
        getActorDetails(APİ_KEY)
    }, [language])
    const {profile_path, birthday, name, biography,place_of_birth, also_known_as} = actorDetails
    console.log(actorDetails)
    return (
        <div id="actorDetails">
            <div className="container">
                <div className="actorDetails">
                    <img style={{width: "400px", borderRadius: "20px"}} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${profile_path}`} alt=""/>
                    <div className="actorDetails--info">
                        <h1  style={{fontWeight: 700}}>{name}</h1>
                        <h3 style={{fontWeight: 700}}>Дата рождения: {birthday}</h3>
                        <h3 style={{fontWeight: 700}}>Место рождения: {place_of_birth}</h3>
                        <h4 style={{fontWeight: 700}}>Также известность как:</h4>
                        <div className="actorDetails--info__about">
                            {
                                also_known_as?.map((el)=>(
                                    <p>{el}</p>
                                ))
                            }
                        </div>
                        <h4 style={{fontWeight: 900, margin: "10px 10px 0  0"}}>Биография:</h4>
                        <h4>{biography?.slice(0, bio)}</h4>
                        <h6 onClick={()=>{
                            more(biography)
                        }}>{bio === 300? "Читать ещё" : "Закрыть"}</h6>
                       <ActorMovie personId={personId}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActorDetails;
import React, {useState, useEffect} from 'react';
import axios from "axios";
import {APİ_KEY} from "../APİ/api";
import Slider from "react-slick";
import img0 from  "../img/DisneyPlushomescreen.webp"
import img1 from  "../img/disney_plus.jpeg"
import img2 from  "../img/5dcadfd13afd372dea55acf8.webp"
import img3 from  "../img/5dcb2b5079d757036a25a013.webp"
import img01 from  "../img/Watch-Disney-Plus-From-Anywhere-f-1.png"
import img4 from  "../img/canceldisneyplus3.png"

const Home = () => {
    const [home, setHome] = useState([])
    const getHome = (key) =>{
        axios(`https://api.themoviedb.org/3/movie{movie_id}?api_key=${key}&language=en-US`)
            .then((res)=>{
                console.log(res.data)
                setHome(res.data)
        })
    }
    useEffect(()=>{
        getHome(APİ_KEY)
    }, [])
    console.log(home)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div id="home">
             <div className="container">
                 <div className="home">
                         <h1 style={{color: "white", fontWeight: "700", textAlign: "center"
                         }}>The 100 Best Movies on Disney+ (April 2023)</h1>
                         {
                             <Slider {...settings}>
                                  <img width={300} height={400} src={img01} alt="#"/>
                                  <img width={300} height={400} src={img1} alt=""/>
                                  <img width={300} height={400} src={img0} alt=""/>
                                  <img width={300} height={400} src={img2} alt=""/>
                                  <img width={300} height={400} src={img3} alt=""/>
                                  <img width={300} height={400} src={img4} alt=""/>
                                  <img width={300} height={400} src={img3} alt=""/>
                                  <img width={300} height={400} src={img3} alt=""/>
                                  <img width={300} height={400} src={img4} alt=""/>
                                  <img width={300} height={400} src={img2} alt=""/>
                             </Slider>
                         }
                 </div>
             </div>
        </div>
    );
};

export default Home;

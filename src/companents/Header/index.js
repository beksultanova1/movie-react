import React, {useContext, useState} from 'react';
import Logo from "../../img/logo.png"
import {Link, NavLink, useNavigate} from "react-router-dom";
import {LanguageContext} from "../../context";
import {BsFillBrightnessHighFill} from "react-icons/bs";
import {MdDarkMode} from "react-icons/md";


const Header = () => {
    const [search, setSearch] = useState("")
    const nav = useNavigate()
    const {setLanguage} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    return (
        <div id="header" style={{
            background: dark === true ? "#0b457e" : "white"
        }}>
          <div className="container">
              <div className="header">
                  <Link to={"/"}><img src={Logo} alt="movieApp"/></Link>
                  <div className="header--nav">
                      <NavLink className="header--nav__link" to={"/"} style={{
                          color: dark === true ? "white" : "#0b457e"
                      }}>Home</NavLink>
                      <NavLink className="header--nav__link" to={"/popular"} style={{
                          color: dark === true ? "white" : "#0b457e"
                      }}>Popular</NavLink>
                      <NavLink className="header--nav__link" to={"/topRated"} style={{
                          color: dark === true ? "white" : "#0b457e"
                      }}>TopRated</NavLink>
                  </div>
                  <div className="header--nav__btn">
                      <div className="header--btn">
                          <input type="text" placeholder="Поиск" onChange={(e)=>{
                                setSearch(e.target.value)
                          }}
                                 onKeyDown={(e) =>{
                                     if (e.key === "Enter"){
                                         nav(`/search/search_movie/${search}`)
                                     }
                                 }}/>
                          <button>Search</button>
                              <select onChange={(e) => setLanguage(e.target.value)}>
                                  <option value="ru-RU">Russian</option>
                                  <option value="en-US">English</option>
                                  <option value="tr-TR">Turkish</option>
                              </select>
                      </div>
                  </div>
                  <div className="header--dark">
                      <button onClick={()=> setDark(false)}><BsFillBrightnessHighFill/></button>
                      <button onClick={()=> setDark(true)}><MdDarkMode/></button>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default Header;
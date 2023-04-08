import React, {useContext} from 'react';
import {LanguageContext} from "../../context";

const Footer = () => {
    const {dark} = useContext(LanguageContext)
    return (
        <div id="footer" style={{
            background: dark === true ? "#0b457e" : "white"
        }}>
            <div className="container">
                <div className="footer">
                    <h2  style={{color: dark === true ? "white" : "#0b457e"}}>** Beksultanova Eldana Muratbekovna **</h2>
                    <h3  style={{color: dark === true ? "white" : "#0b457e"}}>--- Disney Media and Entertainment Distribution ---</h3>
                </div>
            </div>
        </div>
    );
};

export default Footer ;
import React from "react";
import "./Nav.css"
import worldIcon from "../assets/Fill 213.svg"

export default function(){
    return(
        <nav className="nav">
            <img src={worldIcon} alt="" className="nav-icon"/>
            <h1 className="nav-title">my travel journal.</h1>
        </nav>
    )
} 
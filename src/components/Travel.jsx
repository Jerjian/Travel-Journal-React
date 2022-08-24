import React from "react";
import "./Travel.css"
import mapIcon from "../assets/mapsImg.svg"

//props.description
export default function(props){
    return(
        <>
        <div className="Travel">
            <img className="travel-img" src={props.description.imageUrl} alt="img-not-found" />
            <div className="travel-info">
                <div className="travel-info-nav">
                    <img className="travel-info-nav-img" src={mapIcon} alt="" />
                    <h1 className="travel-info-nav-country">{props.description.location}</h1>
                    <a className="travel-info-nav-googleMap" href={props.description.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="travel-info-title">{props.description.title}</h1>
                <h4 className="travel-info-date">{props.description.startDate} - {props.description.endDate}</h4>
                <p className="travel-info-description">{props.description.description}</p>
            </div>
        </div>
        {props.description.title!=="Geirangerfjord" && <hr />}
        </>
    )
}
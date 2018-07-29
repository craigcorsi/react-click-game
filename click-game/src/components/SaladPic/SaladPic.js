import React from "react";
import "./SaladPic.css";

const SaladPic = props => (
    <div className="salad-pic-container"
        id={props.id}
        onClick={props.onClick}
    >
        <img
            className="salad-pic"
            alt={props.name}
            src={props.image}
        />
    </div>
);

export default SaladPic;
import React from "react";
import "./PaintingPic.css";

const PaintingPic = props => (
    <div className="painting-pic-container"
        data-id={props.id}
        onClick={props.onClick}
    >
        <img
            className="painting-pic"
            alt={props.name}
            src={props.image}
            data-id={props.id}
        />
    </div>
);

export default PaintingPic;

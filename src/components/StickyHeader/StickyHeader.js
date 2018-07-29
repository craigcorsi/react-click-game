import React from "react";
import "./StickyHeader.css";

const StickyHeader = props => (
    <header className="sticky-header">
        <h4>Salad Click!</h4>
        <p>{props.message}</p>
        <p>Score: &nbsp;
            <span id="current-score">{props.currentScore}</span>
            &nbsp; | Top Score: &nbsp;
            <span id="top-score">{props.topScore}</span> </p>
    </header>
);

export default StickyHeader;
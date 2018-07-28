import React from "react";
import "./StickyHeader.css";

const StickyHeader = props => (
    <header className="sticky-header">
        <h4>Salad Click!</h4>
        <p>Click an image to begin!</p>
        <p>Score: &nbsp;
            <span id="currentScore">0</span> 
        &nbsp; | Top Score: &nbsp;
            <span id="top-score">0</span> </p>
    </header>
);

export default StickyHeader;
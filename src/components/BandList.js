import React from "react";

const BandList = props => {
    const renderBands = props.bands.map((band, index) => <li key={index}>{band.name}</li>);

    return (
        <div>
           <ul>{renderBands}</ul>
        </div>

    )
};

export default BandList;
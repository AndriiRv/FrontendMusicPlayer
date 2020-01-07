import React from 'react';
// import './css/preload.css';

function Preload() {

    return (
        <div className="Preload" id="preloader">
            <div className="mainPreloader">
                <span className="animation"/>
                <br/>Please wait<br/>
                <small>Music Player is loading...</small>
            </div>
        </div>
    );
}

export default Preload;
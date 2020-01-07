import React from 'react';

function Player() {

    const styleController = {
        marginTop: "500px"
    };

    return (
        <div id="player">
            <div id="smallPlayer">
                <audio controls id="audioId" hidden className="audioClass" style={{width: "500px"}} src=""
                       preload="auto"
                       autoPlay/>
            </div>
            <canvas id="canvas"/>
            <div id="left">
                <button id="soundWaveButton"/>
            </div>
            <div id="main">
                <div id="themeLogo"/>
                <div id="controller" style={styleController}>
                    <button id="prevTrackButton" className="nextPrevButtons"/>
                    <button id="playButton"/>
                    <button id="pauseButton"/>
                    <button id="nextTrackButton" className="nextPrevButtons"/>
                </div>
                <div id="common">
                    <button id="loopButton"/>
                    <h3 id="titleOfTrackInPlayer" className="titleOfTrackClass"/>

                    <div className="setFavourite">
                        <form method="post" action="/favourite">
                            <input className="setFavouriteClass" name="trackTitle" type="submit" value=""/>
                        </form>
                    </div>

                    <div id="barAllPlayed">
                        <div id="barPlay"/>
                    </div>

                    <div id="time">
                        <div id="currentTime"/>
                        <div id="duration"/>
                    </div>
                </div>

                <div id="volume">
                    <button id="volumeMin"/>
                    <label htmlFor="volumeSlider"/>
                    <input id="volumeSlider" type="range" min="0" max="1" step="0.01" defaultValue="0.5"/>
                    <button id="volumeMax" disabled/>
                </div>
                <div id="backToList">
                    <button id="backToListButton"/>
                </div>

            </div>
            <div id="right">
                <div id="searchTrackInSystem">
                    <button className="downloadButton"/>
                    <button id="findInGoogle"/>
                    <button id="findInYouTube"/>
                </div>
            </div>
        </div>
    );
}

export default Player;
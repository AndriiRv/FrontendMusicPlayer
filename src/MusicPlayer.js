import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SelectSort from "./SelectSort";
import MainTable from "./MainTable";
import Footer from "./Footer";
import Preload from "./Preload";
import Player from "./Player";

import "bootstrap/dist/css/bootstrap.css";
import './css/player.css';
import './css/style.css';
import './css/audio/controllerAudio.css';
import './css/audio/volume.css';
import './css/audio/volumeRange.css';
import './css/backToTop.css';
import './css/menu.css';
import './css/preload.css';

function MusicPlayer() {

    return (
        <div className="MusicPlayer">
            <Preload/>
            <Player/>
            <Router>
                <div className="App">
                    <SelectSort/>
                    <Switch>
                        <Route path="/track" exact component={MainTable("/track")}/>
                        <Route path="/title=DESC" component={MainTable("/title=DESC")}/>
                        <Route path="/date=DESC" component={MainTable("/date=DESC")}/>
                    </Switch>
                </div>
            </Router>

            <Footer/>
        </div>
    );
}

export default MusicPlayer;
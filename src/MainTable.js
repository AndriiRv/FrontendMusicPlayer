import React, {Component} from 'react';

function MainTable(e) {
    return class extends Component {

        state = {
            tracks: []
        };

        componentDidMount() {
            fetch(e)
                .then(res => res.json())
                .then(tracks => this.setState({
                    tracks
                }));
        }

        render() {

            const listOfTrack = this.state.tracks.map((track, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <div className="titleOfTrackInTable" value={track.fullTitle}>
                                {track.fullTitle}</div>
                            <div>{track.length}</div>
                            <div>{track.date} {track.time}</div>
                            <div>{track.size} MB</div>
                        </td>
                    </tr>
                )
            });

            return (
                <table id="mainTable" className="table table-bordered table-hover">
                    <tbody>
                    {listOfTrack}
                    </tbody>
                </table>
            )
        }

    }
}

export default MainTable;
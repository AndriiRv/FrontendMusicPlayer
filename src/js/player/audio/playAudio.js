import $ from "jquery";

let titleOfTrackInTable = $(".titleOfTrackInTable");
let titleOfTrackInPlayer = $('#titleOfTrackInPlayer');
const audio = $("#audioId");
let durationSelector = $("#duration");
let currentTimeSelector = $("#currentTime");
let hrefTitleForDownload;
let barAllPlayed = $("#barAllPlayed");
let barPlay = $("#barPlay");
let intervalVolumeBoost = null;

function volumeBoost() {
    clearInterval(intervalVolumeBoost);
    let volumeBoost = 0;

    intervalVolumeBoost = setInterval(function () {
        if (audio.get(0).currentTime <= 1.5) {
            audio.get(0).volume = 0;
        }
        volumeBoost += 0.01;
        audio.get(0).volume = volumeBoost;

        if (audio.get(0).volume >= 0.3) {
            clearInterval(intervalVolumeBoost);
        }
    }, 100);
}

titleOfTrackInTable.click(function(){
    volumeBoost();

    playButton.hide();
    pauseButton.show();
    titleOfTrackInTable.css({
        "background": "none",
        "color": "white"
    });
    let nameOfTrack = $(this).text();

    for (let i = 0; i <= String(nameOfTrack).length; i++) {
        if (nameOfTrack.includes('[')) {
            nameOfTrack = nameOfTrack.replace('[', '%5B').replace(']', '%5D');
        }
        if (nameOfTrack.includes('#')) {
            nameOfTrack = nameOfTrack.replace('#', '%23');
        }
    }

    // let currentTrack = $('#titleOfTrackInPlayer');
    titleOfTrackInPlayer.empty();
    audio.attr("src", "play/" + nameOfTrack);

    for (let j = 0; j <= String(nameOfTrack).length; j++) {
        if (nameOfTrack.includes('%5B')) {
            nameOfTrack = nameOfTrack.replace('%5B', '[').replace('%5D', ']');
        }
        if (nameOfTrack.includes('%23')) {
            nameOfTrack = nameOfTrack.replace('%23', '#');
        }
    }

    titleOfTrackInTable.filter(function () {
        return $(this).text() === nameOfTrack;
    }).css({
        "background": "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,151,244,1) 0%, rgba(64,26,186,1) 49%, rgba(172,22,224,1) 86%)",
        "color": "white"
    });

    hrefTitleForDownload = nameOfTrack;
    nameOfTrack = nameOfTrack.replace(".mp3", "");

    $("#titleOfTab").html(nameOfTrack);

    console.log("Manual select: " + nameOfTrack);
    titleOfTrackInPlayer.append(nameOfTrack);
    audio.get(0).onloadedmetadata = function () {
        let duration = audio.get(0).duration;
        getTime(duration, durationSelector);
    };
    setInterval(function () {
        let currentTime = audio.get(0).currentTime;
        getTime(currentTime, currentTimeSelector);
        barPlay.width((audio.get(0).currentTime / audio.get(0).duration) * 100 + '%');
    }, 10);
});

barAllPlayed.on('click', function (e) {
    let allWidth = barAllPlayed.width();
    let currentXByDiv = e.pageX - barAllPlayed.offset().left;
    audio.get(0).currentTime = (currentXByDiv * audio.get(0).duration) / allWidth;
    barPlay.width((audio.get(0).currentTime / audio.get(0).duration) * 100 + '%');
});

function getTime(time, selector) {
    let hr = Math.floor(time / 3600).toString();
    let min = Math.floor((time - (hr * 3600)) / 60).toString();
    let sec = Math.floor(time - (hr * 3600) - (min * 60)).toString();
    if (min.length === 1) {
        min = "0" + min;
    }
    if (sec.length === 1) {
        sec = "0" + sec;
    }
    if (hr.length === 1) {
        hr = "0" + hr;
    }
    selector.html(hr + ":" + min + ':' + sec);
}
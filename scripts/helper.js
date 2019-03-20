class Helper {
    playPauseAndUpdate(song) {
        player.playPause(song);
        const songTime = player.currentlyPlaying.duration;
        $('#time-control .total-time').text(songTime);
    }
}

const helper = new Helper();
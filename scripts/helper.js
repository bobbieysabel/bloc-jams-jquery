class Helper {
    playPauseAndUpdate(song) {
        player.playPause(song);
        const songTime = player.getDuration();
        $('#time-control .total-time').text(songTime);
        alert(songTime);
    }
}

const helper = new Helper();
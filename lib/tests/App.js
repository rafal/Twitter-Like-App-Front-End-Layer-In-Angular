function Player() {
}
Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};

Player.prototype.pause = function() {
  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};

Player.prototype.showDateDiff = function (date) {
        var today = new Date().getTime();
        var diff = today - date;
        var days = diff / 1000 / 60 / 60 / 24;
        var months = days / 30;
        var years = months / 12;
        if (days < 1) {
            return "Today";
        }
        else {
            if (days < 30) {
                return "" + Math.round(days) + "d";
            }
            else {
                if (days < 365) {
                    return "" + Math.round(months) + "m";
                }
                else {
                    return "" + Math.round(years) + "y";
                }
            }
        }
    };

module.exports = Player;

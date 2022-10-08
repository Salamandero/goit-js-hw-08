import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";   

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
const LOCAL_STOTAGE_KEY = "videoplayer-current-time";
const currentTime = localStorage.getItem(LOCAL_STOTAGE_KEY);


const onPlay = function (data) {
     
     const updateTime = data.seconds;
      localStorage.setItem(LOCAL_STOTAGE_KEY, updateTime);
 };

player.on('timeupdate', throttle(onPlay, 1000)); 

player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";   

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCAL_STOTAGE_KEY = "videoplayer-current-time";

//      const seconds = player.on('timeupdate', function() {
//          console.log('seconds', data.seconds);
//          localStorage.setItem(LOCAL_STOTAGE_KEY, "seconds");
//     }); 

//    player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });
        
// player.setCurrentTime(5.456);
// *****
// player.on('timeupdate', function (data) {
//             console.log('seconds', data.seconds);
//         //  console.log('seconds', data.seconds);
//       localStorage.setItem("videoplayer-current-time", "data.seconds");
//     }); 

// const sec = localStorage.getItem("videoplayer-current-time");
// player.setCurrentTime(sec);


// player.on('timeupdate', function(data) {
//     console.log(data.seconds)
// localstorage.setItem(LOCAL_STOTAGE_KEY, data.seconds)
// });
// player.setCurrentTime(5);
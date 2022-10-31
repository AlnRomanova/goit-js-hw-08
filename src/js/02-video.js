import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
  const player = new Player(iframe);


player.on('timeupdate', throttle(function(currentTime) {
    localStorage.setItem('videoplayer-current-time', currentTime.seconds);
  }, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(savedTime).then(function(seconds) {
  }).catch(function(error) {
    switch (error.name) {
    case 'RangeError':
    break;

    default:
    break;
    }
  });




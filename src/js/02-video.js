import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(checkTimeUpdate, 1000));

const savedTime = localStorage.getItem(TIME_KEY);
if (savedTime) {
  player.setCurrentTime(savedTime);
}

function checkTimeUpdate({ seconds }) {
  localStorage.setItem(TIME_KEY, seconds);
}

import SpotifyService from '../services/spotify';
const spotifyService = new SpotifyService();

const spotify = () => {
  const $wrapper = document.querySelector('[data-spotify="wrapper"] p');
  const $song = document.querySelector('[data-spotify="song"]');
  const $artist = document.querySelector('[data-spotify="artist"]');

  return spotifyService
    .then(res => {
      console.log(res);
      $wrapper.classList.remove('hide');
      $song.innerHTML = res.data.item.name;
      $artist.innerHTML = res.data.item.artists[0].name;
    })
    .catch(err => {
      $wrapper.classList.add('hide')
    });
};

export default spotify;
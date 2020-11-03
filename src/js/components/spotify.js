import SpotifyService from '../services/spotify';
const spotifyService = new SpotifyService();

const spotify = () => {
  const $wrapper = document.querySelector('[data-spotify="wrapper"]');
  const $song = document.querySelector('[data-spotify="song"]');
  const $artist = document.querySelector('[data-spotify="artist"]');

  return spotifyService
    .then(response => {
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          $song.innerHTML = json.item.name;
          $artist.innerHTML = json.item.artists[0].name;
        });
      } else {
        $wrapper.classList.add('hide')
      }
    })
    .catch(err => {
      console.log(err);
      $wrapper.classList.add('hide')
    });
};

export default spotify;
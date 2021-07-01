import { getNowPlaying, getAuth } from "../services/spotify";

const spotify = () => {
  const $wrapper = document.querySelector('[data-spotify="wrapper"] p');
  const $song = document.querySelector('[data-spotify="song"]');
  const $artist = document.querySelector('[data-spotify="artist"]');

  getAuth();

  getNowPlaying()
    .then((res) => {
      console.log(res);
      $wrapper.classList.remove("hide");
      $song.innerHTML = res.data.item.name;
      $artist.innerHTML = res.data.item.artists[0].name;
    })
    .catch((err) => {
      if (err.status == 401) spotifyService.getAcessToken();

      $wrapper.classList.add("hide");
    });
};

export default spotify;

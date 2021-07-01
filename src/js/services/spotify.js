import axios from "axios";
import { environment } from "../../../environments/environment";

export const getAuth = () => {
  const clientId = environment.spotify_client_id;
  const clientSecret = environment.spotify_client_secret;

  axios({
    url: "https://accounts.spotify.com/authorize",
    method: "get",
    params: {
      client_id: clientId,
      response_type: "code",
      redirect_uri: "http://127.0.0.1:4000/callback",
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH",
    },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {});
};

export const getNowPlaying = (accessToken) => {
  return axios({
    url: "https://api.spotify.com/v1/me/player/currently-playing?market=BR",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

import axios from 'axios';

const SpotifyService = () => {
  const acessToken = 'BQBNU21Y9CPJdgqFxL4OVKXOyr_m-ZfZjRY0BQO4xd5QXxqqevHNjlAWv8z84bAKTD-PBQwc4rJFdyHg-H2cbEeX4uXaTHvU72WptK1nSUuzyy8-qLtprhoVrpzbsxdijs3-QSYb7wV0xBPIt4jIOzqgpHqmUsyaY9qLQUAzxbc';

  return axios({
    url: 'https://api.spotify.com/v1/me/player/currently-playing?market=BR',
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${acessToken}`,
    }
  });
};

export default SpotifyService;
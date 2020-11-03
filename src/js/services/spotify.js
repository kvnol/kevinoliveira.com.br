const SpotifyService = () => {
  return fetch('https://api.spotify.com/v1/me/player/currently-playing?market=BR', {
    headers: new Headers({
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer BQBzNKVOISbuPuaU9ZoOiJp4Ms8n5ponaivmubY6PYP3JY175Si2c3m5X2jDCbB5jJR_iEudHdbLlzf6T5dHlI6Gko_yEnoNIYbPkqFMFLNwR1Ke2yPhKvY4IGQ2xzSBQ_H1gXc4tGJL32PDqDHToUdnzT-MBK2Tw5aq-o-LNyc",
    })
  });
};

export default SpotifyService;
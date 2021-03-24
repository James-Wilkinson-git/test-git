const apiToken = 'KyPR9Aaj3MFnDgtTi4VN8Qt6lk9A7oHI';
export default function getDragRaceGifs(offset) {
  const pages = offset ?? 0;
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiToken}&q=drag%20race%20uk&limit=25&offset=${pages}&rating=g&lang=en`
  )
    .then((response) => response.json())
    .then((json) => json.data);
}

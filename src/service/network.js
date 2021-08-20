export function fetchData(url) {
    const urlServer = process.env.REACT_APP_API_URL;
    const URL = `${urlServer}preview?url=${url}`;
    return fetch(URL)
        .then((response) => response.json())
        .then((data) => data);
}
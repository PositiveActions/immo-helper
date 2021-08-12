export function fetchData(url) {
    const URL = `http://localhost:3001/preview?url=${url}`;
    return fetch(URL)
        .then((response) => response.json())
        .then((data) => data);
}
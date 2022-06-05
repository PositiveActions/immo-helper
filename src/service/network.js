export function fetchData(url) {
    const urlServer = 'https://immo-helper.herokuapp.com/';
    const URL = `${urlServer}preview?url=${url}`;
    return fetch(URL)
        .then((response) => response.json())
        .then((data) => data);
}
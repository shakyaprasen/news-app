export function getNews(apiKey) {
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
}

export function getNewsFromSource(apiKey, { source, searchKey }) {
  return fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}&q=${searchKey}`);
}

export function getSources(apiKey) {
  return fetch(`https://newsapi.org/v2/sources?apiKey=${apiKey}`);
}

export function errorCall() {
  return fetch('https://newsapi.org/v2/sources?apiKey');
}

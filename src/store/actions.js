import { getNews, getSources, getNewsFromSource } from '../api/calls';
import { APIKEY, SET_NEWS_ARTICLES, SET_SOURCES } from './consts';

export default {
  fetchNewsList({ commit }) {
    return getNews(APIKEY)
      .then(resp => resp.json())
      .then((response) => {
        commit(SET_NEWS_ARTICLES, response.articles);
      })
      .catch(err => console.error(err, 'Failed to fetch news'));
  },
  fetchNewsFromSource({ commit }, { source = '', searchKey = '' }) {
    return getNewsFromSource(APIKEY, { source, searchKey })
      .then(resp => resp.json())
      .then((response) => {
        commit(SET_NEWS_ARTICLES, response.articles);
      })
      .catch(err => console.error(err, 'Failed to fetch news'));
  },
  fetchNewsSources({ commit }) {
    return getSources(APIKEY)
      .then(resp => resp.json())
      .then((response) => {
        commit(SET_SOURCES, response.sources);
      })
      .catch(err => console.error(err));
  },
  fetchNewsAndSources({ dispatch }) {
    return Promise.all([dispatch('fetchNewsList'), dispatch('fetchNewsSources')])
      .catch(err => console.error(err, 'error'));
  },
};

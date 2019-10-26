import { getNews, getSources, getNewsFromSource } from '../api/calls';
import {
  APIKEY,
  SET_NEWS_ARTICLES,
  SET_SOURCES,
  SUCCESSFUL_CALL,
} from './consts';


export default {
  fetchNewsList({ commit }) {
    return getNews(APIKEY)
      .then(resp => resp.json())
      .then((response) => {
        if (response.status === SUCCESSFUL_CALL) {
          commit(SET_NEWS_ARTICLES, response.articles);
        } else {
          throw new Error(response.message);
        }
      });
  },
  fetchNewsFromSource({ commit }, { source = '', searchKey = '' }) {
    return getNewsFromSource(APIKEY, { source, searchKey })
      .then(resp => resp.json())
      .then((response) => {
        if (response.status === SUCCESSFUL_CALL) {
          commit(SET_NEWS_ARTICLES, response.articles);
        } else {
          throw new Error(response.message);
        }
      });
  },
  fetchNewsSources({ commit }) {
    return getSources(APIKEY)
      .then(resp => resp.json())
      .then((response) => {
        if (response.status === SUCCESSFUL_CALL) {
          commit(SET_SOURCES, response.sources);
        } else {
          throw new Error(response.message);
        }
      });
  },
  fetchNewsAndSources({ dispatch }) {
    return Promise.all([dispatch('fetchNewsList'), dispatch('fetchNewsSources')]);
  },
};

import { SET_NEWS_ARTICLES, SET_SOURCES } from './consts';

export default {
  [SET_NEWS_ARTICLES](state, articles) {
    state.newsList = articles;
  },
  [SET_SOURCES](state, sources) {
    state.sources = sources;
  },
};

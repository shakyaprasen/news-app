import {
  SET_NEWS_ARTICLES,
  SET_SOURCES,
  UPDATE_HISTORY,
} from './consts';

export default {
  [SET_NEWS_ARTICLES](state, articles) {
    state.newsList = articles;
  },
  [SET_SOURCES](state, sources) {
    state.sources = sources;
  },
  [UPDATE_HISTORY](state, article) {
    state.history = [{ ...article }, ...state.history];
  },
};

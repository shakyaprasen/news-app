<template>
  <v-layout
    wrap
  >
    <news-card
      v-for="(news, index) in newsList"
      :key="index"
      :index="index"
      :news-data="news"
      class="ml-4 mt-3"
      @selected="emitSelected"
    />
  </v-layout>
</template>

<script>

import { mapState } from 'vuex';
import NewsCard from '../components/NewsCard.vue';

export default {
  name: 'List',
  components: {
    NewsCard,
  },
  computed: mapState({
    newsList: state => state.newsList,
    sources: state => state.sources,
  }),
  methods: {
    emitSelected(item) {
      this.$emit('detail', item);
    },
  },
};
</script>

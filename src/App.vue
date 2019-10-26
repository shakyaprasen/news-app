<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <v-btn text tile href="/">News APP</v-btn>
      </v-toolbar-title>
    </v-app-bar>

    <v-content id="sources">
      <v-row >
        <v-col cols="4" class="pl-5">
          <v-overflow-btn
            :items="sources"
            label="Select Source"
            target="#sources"
            item-text="name"
            item-value="id"
            v-model="source"
          ></v-overflow-btn>
        </v-col>
        <v-col cols="4" class="d-flex align-end">
          <v-text-field
            v-model="searchKey"
            label="Search Text"
          ></v-text-field>
        </v-col>
        <v-col cols="4" class="d-flex align-center">
          <v-btn @click="clearSource">
            Clear
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <router-view />
      </v-row>
    </v-content>
  </v-app>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    source: '',
    searchKey: '',
  }),
  watch: {
    source(newsSource) {
      if (newsSource) {
        this.filterFromNewsList();
      }
    },
    searchKey(searchKey) {
      if (searchKey) {
        this.filterFromNewsList();
      }
    },
  },
  computed: mapState({
    newsList: state => state.newsList,
    sources: state => state.sources,
  }),
  created() {
    this.fetchNewsAndSources();
  },
  methods: {
    ...mapActions(['fetchNewsAndSources', 'fetchNewsFromSource']),
    clearSource() {
      this.source = '';
      this.searchKey = '';
      this.filterFromNewsList();
    },
    filterFromNewsList() {
      this.fetchNewsFromSource({ source: this.source, searchKey: this.searchKey });
    },
  },
};
</script>

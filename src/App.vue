<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link :to="{ name: 'list' }">
          <v-btn text tile>
            News App
          </v-btn>
        </router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-content id="sources">
      <v-row v-if="$route.name === 'list'">
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
        <v-col cols="1" class="d-flex align-center">
          <v-btn color="primary" @click="clearSource">
            Clear
          </v-btn>
        </v-col>
        <v-col cols="2" class="d-flex align-center">
          <v-btn color="red" @click="sendWrongAPI">
            ERROR API
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="pl-5">
          <v-list>
            <v-subheader><b>HISTORY</b></v-subheader>
            <v-list-item
              v-for="(item, i) in history"
              :key="i"
            >
              <v-list-item-content>
                <v-list-item-title>
                  <span :title="item.title">{{ item.title }}</span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <router-view
            :details="selectedNews"
            @detail="handleShowDetail"
          />
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import { errorCall } from './api/calls';
import { SUCCESSFUL_CALL } from './store/consts';

export default {
  name: 'App',
  data: () => ({
    source: '',
    searchKey: '',
    selectedNews: {},
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
    history: state => state.history,
  }),
  created() {
    this.fetchNewsAndSources()
      .catch(error => this.$toastr.e(error));
  },
  methods: {
    ...mapActions(['fetchNewsAndSources', 'fetchNewsFromSource']),
    clearSource() {
      this.source = '';
      this.searchKey = '';
      this.fetchNewsAndSources();
    },
    filterFromNewsList() {
      this.fetchNewsFromSource({ source: this.source, searchKey: this.searchKey })
        .catch(error => this.$toastr.e(error));
    },
    sendWrongAPI() {
      return errorCall()
        .then(res => res.json())
        .then((response) => {
          if (response.status !== SUCCESSFUL_CALL) {
            this.$toastr.e(response.message, response.code);
          }
        })
        .catch(error => this.$toastr.e(error.message));
    },
    handleShowDetail(detail) {
      this.selectedNews = detail;
    },
  },
};
</script>

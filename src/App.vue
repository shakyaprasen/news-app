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
      <loading :loading="loading" />
      <v-row v-if="$route.name === 'list'">
        <v-col cols="12" sm="6" md="2" lg="2" xl="2" class="pl-5">
          <v-overflow-btn
            :items="sources"
            label="Select Source"
            target="#sources"
            item-text="name"
            item-value="id"
            v-model="source"
          ></v-overflow-btn>
        </v-col>
        <v-col cols="12" sm="6" md="2" lg="2" xl="2" class="d-flex align-end pl-5">
          <v-text-field
            v-model="searchKey"
            label="Search Text"
          ></v-text-field>
        </v-col>
        <v-col cols="3" sm="3" md="1" lg="1" xl="1" class="d-flex align-center pl-5">
          <v-btn color="primary" @click="clearSource">
            Clear
          </v-btn>
        </v-col>
        <v-col cols="3" sm="3" md="2" lg="1" xl="1" class="d-flex align-center">
          <v-btn color="red" @click="sendWrongAPI">
            ERROR API
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3" lg="3" xl="3" class="pl-5">
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
import LoadingMixin from './mixins';

export default {
  name: 'App',
  mixins: [LoadingMixin],
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
    this.enableLoading();
    this.fetchNewsAndSources()
      .catch(error => this.$toastr.e(error))
      .finally(this.disableLoading);
  },
  methods: {
    ...mapActions(['fetchNewsAndSources', 'fetchNewsFromSource']),
    clearSource() {
      this.source = '';
      this.searchKey = '';
      this.enableLoading();
      this.fetchNewsAndSources()
        .finally(this.disableLoading);
    },
    filterFromNewsList() {
      this.enableLoading();
      this.fetchNewsFromSource({ source: this.source, searchKey: this.searchKey })
        .catch(error => this.$toastr.e(error))
        .finally(this.disableLoading);
    },
    sendWrongAPI() {
      this.enableLoading();
      return errorCall()
        .then(res => res.json())
        .then((response) => {
          if (response.status !== SUCCESSFUL_CALL) {
            this.$toastr.e(response.message, response.code);
          }
        })
        .catch(error => this.$toastr.e(error.message))
        .finally(this.disableLoading);
    },
    handleShowDetail(detail) {
      this.selectedNews = detail;
    },
  },
};
</script>

<style scoped>
.app-header {
  z-index: 99;
}
</style>

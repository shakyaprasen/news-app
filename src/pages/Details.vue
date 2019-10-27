<template>
  <v-container class="grey lighten-5 detail-container" fluid>
    <v-row
      class="mb-1"
      justify="center"
      no-gutters
    >
      <v-col>
        <details-tool-bar
          :details="titleAndUrl"
          @edit="showRenameModal"
        />
      </v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col><i>{{ details.author }}</i></v-col>
    </v-row>
    <v-img
      v-if="details.urlToImage"
      :src="details.urlToImage"
      aspect-ratio="1"
      class="grey lighten-2"
      max-height="400"
      alt="news-image"
    />
    <v-row
      class="mb-6 mt-6"
      justify="center"
      no-gutters
    >
      <v-col>
        <p>
          {{ details.content }}
        </p>
      </v-col>
    </v-row>
    <title-rename-modal
      v-if="mountRenameModal"
      ref="renameModal"
      :news-title="titleAndUrl.title"
      @saved="newTitleHandler"
    />
  </v-container>
</template>

<script>

import DetailsToolBar from '../components/DetailsToolBar.vue';

export default {
  name: 'Details',
  components: {
    DetailsToolBar,
    TitleRenameModal: () => import('../components/TitleRenameModal.vue'),
  },
  props: {
    details: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    mountRenameModal: false,
    newTitle: '',
  }),
  computed: {
    titleAndUrl() {
      return { title: this.newTitle || this.details.title, url: this.details.url };
    },
  },
  created() {
    if (!this.details || !Object.keys(this.details).length) {
      this.$router.push({ name: 'list' });
    }
  },
  methods: {
    showRenameModal() {
      if (this.mountRenameModal) {
        this.$refs.renameModal.show();
      } else {
        this.mountRenameModal = true;
      }
    },
    newTitleHandler(title) {
      this.newTitle = title;
    },
  },
};
</script>

<style scoped>
.detail-container {
  max-width: 900px;
}
</style>

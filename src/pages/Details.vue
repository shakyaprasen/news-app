<template>
  <v-container class="px-6 grey lighten-5 detail-container" fluid>
    <v-row
      class="mb-4"
      justify="center"
      no-gutters
    >
      <v-col>
        <details-tool-bar
          @edit="showRenameModal"
        />
      </v-col>
    </v-row>
    <v-img
      src="https://picsum.photos/id/11/500/300"
      lazy-src="https://picsum.photos/id/11/10/6"
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Harum maiores modi quidem veniam,
          expedita quis laboriosam, ullam facere adipisci, iusto,
          voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Harum maiores modi quidem veniam, expedita quis laboriosam,
          ullam facere adipisci, iusto,
          voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.
        </p>
      </v-col>
    </v-row>
    <title-rename-modal
      v-if="mountRenameModal"
      ref="renameModal"
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
  data: () => ({
    mountRenameModal: false,
  }),
  methods: {
    showRenameModal() {
      if (this.mountRenameModal) {
        this.$refs.renameModal.show();
      } else {
        this.mountRenameModal = true;
      }
    },
  },
};
</script>

<style scoped>
.detail-container {
  max-width: 900px;
}
</style>

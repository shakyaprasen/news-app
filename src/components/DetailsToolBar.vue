<template functional>
  <v-toolbar min-width="100%">
    <div class="d-flex justify-space-between align-center news-header__toolbar">
      <h2 class="news-header__title" :title="props.details.title">{{ props.details.title }}</h2>
      <div class="ml-4">
        <v-btn icon @click="listeners['edit']()" title="Edit">
          <v-icon>mdi-file-edit-outline</v-icon>
        </v-btn>
        <v-btn icon :href="props.details.url" target="_blank" title="Source">
          <v-icon>mdi-arrow-right-box</v-icon>
        </v-btn>
      </div>
    </div>
  </v-toolbar>
</template>

<script>

export default {
  name: 'DetailsToolBar',
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.news-header__title {
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.news-header__toolbar {
  width: 100%;
}
</style>

<template functional>
  <v-toolbar min-width="100%">
    <h2>News Heading</h2>
    <div class="ml-4">
      <v-btn icon @click="listeners['edit']('')">
        <v-icon>mdi-file-edit-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-arrow-right-box</v-icon>
      </v-btn>
    </div>
  </v-toolbar>
</template>

<script>

export default {
  name: 'DetailsToolBar',
};
</script>

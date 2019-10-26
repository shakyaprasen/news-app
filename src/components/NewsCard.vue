<template>
  <v-card class="d-inline-block mx-auto">
    <v-container>
      <v-row>
        <v-col cols="auto" class="font-weight-bold">
          News Headline
        </v-col>
        <v-col class="px-2 py-0 d-flex justify-end align-center">
          <v-btn icon href="/#/news-detail/1">
            <v-icon>mdi-arrow-right-box</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-img
            height="200"
            width="250"
            src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'NewsCard',
};
</script>

<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="d-inline-block mx-auto">
        <v-container>
          <v-row>
            <v-col cols="auto" class="font-weight-bold truncate">
              {{ newsData.title }}
            </v-col>
            <!-- <v-col class="px-2 py-0 d-flex justify-end align-center">
              <v-btn icon :href="`/#/news-detail/${index}`">
                <v-icon>mdi-arrow-right-box</v-icon>
              </v-btn>
            </v-col> -->
          </v-row>
          <v-row justify="space-between">
            <v-col cols="auto">
              <v-img
                height="200"
                width="250"
                :src="newsData.urlToImage || ''"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
         <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
            <v-btn :href="`/#/news-detail/${index}`">Details</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    newsData: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.truncate {
  width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

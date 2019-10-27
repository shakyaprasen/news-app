<template>
  <v-overlay :value="loading" z-index="1">
    <v-progress-circular indeterminate size="64"/>
  </v-overlay>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    loading: {
      type: Boolean,
    },
  },
};
</script>

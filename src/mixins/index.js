export default {
  components: {
    Loading: () => import('../components/loading/Loading.vue'),
  },
  data: () => ({
    loading: false,
  }),
  methods: {
    enableLoading() {
      this.loading = true;
    },
    disableLoading() {
      this.loading = false;
    },
  },
};

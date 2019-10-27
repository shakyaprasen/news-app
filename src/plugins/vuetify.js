import Vue from 'vue';
import Vuetify, {
  VBtn, VIcon, VToolbar, VSpacer,
} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VBtn,
    VIcon,
    VToolbar,
    VSpacer,
  },
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});

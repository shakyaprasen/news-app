<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">News Title</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="title"
                    :counter="$options.MAX_CHAR"
                    :rules="titleRules"
                    label="Title"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="hide">Close</v-btn>
          <v-btn color="blue darken-1" text @click="hide" :disabled="!valid">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

const MAX_CHAR = 30;

export default {
  name: 'TitleRenameModal',
  watch: {
    dialog: {
      immediate: true,
      handler(value) {
        if (value) {
          this.$emit('shown');
        } else {
          this.reset();
          this.$emit('hidden');
        }
      },
    },
  },
  MAX_CHAR,
  data: () => ({
    valid: true,
    dialog: false,
    title: '',
    titleRules: [
      v => (v && v.length <= MAX_CHAR) || 'Title must be less than 30 characters',
    ],
  }),
  mounted() {
    this.show();
  },
  methods: {
    hide() {
      this.dialog = false;
    },
    show() {
      this.dialog = true;
    },
    reset() {
      this.title = '';
      this.valid = true;
    },
  },
};
</script>

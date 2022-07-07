<template>
  <h4>Edit Word</h4>
  <form class="form-group">
    <label class="form-label" for="wordslug">Word</label>
    <input
      class="form-input"
      placeholder="Word"
      name="word"
      v-model="word"
      disabled
    />
    <label class="form-label" for="shortdef">Short Definition</label>
    <input
      v-model="shortdef"
      class="form-input"
      placeholder="Short Definition"
      name="shortdef"
    />
    <label class="form-label" for="longdef">Long Definition</label>
    <textarea
      v-model="longdef"
      class="form-input"
      placeholder="Long Definition"
      name="longdef"
      rows="7"
    ></textarea>
    <br />
    <input
      @click="editWord()"
      name="submit"
      type="button"
      value="Edit"
      class="btn btn-primary input-group-btn"
    />
  </form>
</template>

<script>
import { getWordFromSlug } from "@/services/apiCalls.js";

export default {
  name: "EditWordComponent",
  props: ["wordslug"],
  emits: ["editWord"],
  data() {
    return {
      shortdef: "",
      longdef: "",
      wordSlugAPI: "",
      word: ""
    };
  },
  methods: {
    editWord() {
      const payload = {
        wordslug: this.wordslug,
        word: this.word,
        shortdef: this.shortdef,
        longdef: this.longdef
      };
      this.$emit("editWord", payload);
    },
    getWordInfo(wordslug) {
      let wordPromise = getWordFromSlug(wordslug);
      wordPromise.then((res) => {
        this.shortdef = res.data.shortdef;
        this.longdef = res.data.longdef;
        this.word = res.data.word;
        this.wordSlugAPI = res.data.wordslug;
        console.log(res.data);
      });
    },
  },
  mounted() {
    this.getWordInfo(this.$route.params.wordslug);
  },
};
</script>

<template>
  <div class="definitionSection">
    <img class="definitionImage" :src="'/flags/' + word.wordslug + '.jpg'" />
    <h1>{{ word.word }}</h1>
    <h6>
      <i>{{ word.shortdef }}</i>
    </h6>
    <p>{{ word.longdef }}</p>
  </div>
</template>

<script>
import { getWordFromSlug } from "@/services/apiCalls";

export default {
  name: "DefinitionView",
  data() {
    return {
      word: {},
    };
  },
  methods: {
    getWordInfo(wordslug) {
      let wordPromise = getWordFromSlug(wordslug);
      wordPromise.then((res) => {
        this.word = res.data;
      });
    },
  },
  mounted() {
    this.getWordInfo(this.$route.params.wordslug);
  },
};
</script>

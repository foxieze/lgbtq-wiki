<template>
  <div class="definitionSection">
    <div class="panel float-right">
      <div class="panel-header text-center">
        <h4>{{ word.word }}</h4>
        <h6>Flag</h6>
        <img
          class="definitionImage"
          :src="'/flags/' + word.wordslug + '.png'"
        />
      </div>
      <div class="panel-body">
        <h5 class="text-center">Categories</h5>
        <table class="table text-center">
          <tbody>
            <tr>
              <th>Type</th>
              <td>{{ word.category }}</td>
            </tr>
            <tr v-if="word.attractionCategory">
              <th>Attraction</th>
              <td>{{ word.attractionCategory }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="definitionText">
      
      <h1>{{ word.word }}</h1>
      
      <h6>
        <i>{{ word.shortdef }}</i>
      </h6>
      <div>
        <label>Aliases: </label>
        <span v-for="alias in word.aliases" :key="alias" class="chip">{{ alias }}</span>
      </div>
      <div v-html="renderedDefinition"></div>
    </div>
  </div>
</template>

<script>
import { getWordFromSlug } from "@/services/apiCalls";
import { marked } from 'marked';

export default {
  name: "DefinitionView",
  data() {
    return {
      word: {},
      renderedDefinition: '',
      aliases: []
    };
  },
  methods: {
    getWordInfo(wordslug) {
      let wordPromise = getWordFromSlug(wordslug);
      wordPromise.then((res) => {
        this.word = res.data;
        this.renderedDefinition = marked(this.word.longdef);
      });
    }
  },
  mounted() {
    this.getWordInfo(this.$route.params.wordslug);
  }
};
</script>

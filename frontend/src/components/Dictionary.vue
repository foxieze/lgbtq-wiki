<template>
  <div class="dict-table-container">
    <table class="table text-center">
      <thead>
        <th>Word</th>
        <th>Short Definition</th>
      </thead>
      <tbody>
        <tr v-for="word in words" :key="word.id">
          <td>
            <img
              :src="'/flags/' + word.wordslug + '.jpg'"
              class="dictflag"
            /><router-link :to="{ path: '/word/' + word.wordslug }">
              {{ word.word }}
            </router-link>
          </td>

          <td>{{ word.shortdef }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getAllWordsFromAPI } from "@/services/apiCalls";

export default {
  name: "DictionaryComponent",
  data() {
    return {
      words: [],
    };
  },
  methods: {
    getAllWords() {
      let words = getAllWordsFromAPI();
      words.then((response) => {
        console.log(response);
        this.words = response.data;
      });
    },
  },
  mounted() {
    this.getAllWords();
  }
};
</script>

<template>

  <div class="dictsearch-container">
      <input v-model="searchQuery" class="form-input dictsearchbox text-center" type="text" placeholder="Search..." />
  </div>
<br/>
  <div class="dict-table-container">
    <table class="table text-center">
      <thead>
        <th>Word</th>
        <th>Short Definition</th>
      </thead>
      <tbody>
        <tr v-for="word in filteredDictionary" :key="word.id">
          <td>
            <img
              :src="'/flags/' + word.wordslug + '.png'"
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
      searchQuery: ""
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
  },
  computed:  {
    filteredDictionary() {
      return this.words.filter(word => {
        return word.word.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  }
};
</script>

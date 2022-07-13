<template>
  <h4>Create Word</h4>
  <form class="form-group">
    <!-- Word Input -->
    <label class="form-label" for="word">Word</label>
    <input v-model="word" class="form-input" placeholder="Word" name="word" />
    <!-- Word Slug Input -->
    <label class="form-label" for="wordslug">Word Slug</label>
    <input
      v-model="wordslug"
      class="form-input"
      placeholder="Word Slug"
      name="wordslug"
    />
    <!-- Aliases Input -->
    <label class="form-label" for="aliases">Aliases</label>
    <input
      v-model="aliases"
      class="form-input"
      placeholder="Aliases"
      name="aliases"
    />
    <!-- Category Input -->
    <label class="form-label" for="category">Category</label>
    <label class="form-radio">
      <input
        v-model="category"
        type="radio"
        name="category"
        value="Attraction"
        checked
      />
      <i class="form-icon"></i> Attraction
    </label>
    <label class="form-radio">
      <input v-model="category" type="radio" name="category" value="Gender" />
      <i class="form-icon"></i> Gender
    </label>
    <label class="form-radio">
      <input v-model="category" type="radio" name="category" value="Relationship" />
      <i class="form-icon"></i> Relationship
    </label>
    <!-- Attraction Category Input -->
    <div v-if="checkCategoryForAttraction()">
      <label class="form-label" for="category">Attraction Category</label>
      <label class="form-radio">
        <input
          v-model="attractionCategory"
          type="radio"
          name="attractionCategory"
          value="Attraction"
          checked
        />
        <i class="form-icon"></i> Sexual
      </label>
      <label class="form-radio">
        <input
          v-model="attractionCategory"
          type="radio"
          name="attractionCategory"
          value="Gender"
        />
        <i class="form-icon"></i> Romantic
      </label>
    </div>
    <!-- Short Definition Input -->
    <label class="form-label" for="shortdef">Short Definition</label>
    <input
      v-model="shortdef"
      class="form-input"
      placeholder="Short Definition"
      name="shortdef"
    />
    <!-- Long Definition Input -->
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
      type="button"
      @click="createWord()"
      class="btn btn-primary input-group-btn"
      value="Create"
    />
  </form>
</template>

<script>
export default {
  name: "CreateWordComponent",
  emits: ["createWord"],
  data() {
    return {
      word: "",
      wordslug: "",
      shortdef: "",
      longdef: "",
      category: "Attraction",
      attractionCategory: "",
      aliases: "",
    };
  },
  methods: {
    createWord() {
      var jsonAliases;
      if (this.aliases) {
        let formattedAliases = this.aliases
          .split(",")
          .map((item) => item.trim());
        jsonAliases = JSON.parse(JSON.stringify(formattedAliases));
      } else {
        jsonAliases = undefined;
      }

      if (this.category != "Attraction") {
        this.attractionCategory = undefined
      }

      const payload = {
        word: this.word,
        wordslug: this.wordslug,
        shortdef: this.shortdef,
        longdef: this.longdef,
        category: this.category,
        attractionCategory: this.attractionCategory,
        aliases: jsonAliases,
      };
      this.$emit("createWord", payload);
    },
    checkCategoryForAttraction() {
      if (this.category == "Attraction") {
        return true;
      } else {
        this.attractionCategory = undefined;
        return false;
      }
    },
  },
};
</script>

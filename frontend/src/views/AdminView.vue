<template>
  <div class="accordion">
    <input type="checkbox" id="accordion-1" name="accordion-checkbox" hidden />
    <label class="accordion-header" for="accordion-1">
      <i class="icon icon-arrow-right mr-1"></i>
      Create Word
    </label>
    <div class="accordion-body">
      <CreateWordComponent
        @createWord="wordCreate($event)"
      ></CreateWordComponent>
    </div>
  </div>
  <div class="accordion">
    <input type="checkbox" id="accordion-2" name="accordion-checkbox" hidden />
    <label class="accordion-header" for="accordion-2">
      <i class="icon icon-arrow-right mr-1"></i>
      Edit Word
    </label>
    <div class="accordion-body">
      <label class="form-label" for="wordslug">Word Slug</label>
      <input
        v-model="editWordSlug"
        class="form-input"
        placeholder="Word Slug"
        name="wordslug"
      />
      <br />
      <router-link :to="'/admin/edit/' + editWordSlug">
        <input name="submit" type="button" class="btn btn-primary input-group-btn" value="Edit" />
      </router-link>
    </div>
  </div>
  <div class="accordion">
    <input type="checkbox" id="accordion-3" name="accordion-checkbox" hidden />
    <label class="accordion-header" for="accordion-3">
      <i class="icon icon-arrow-right mr-1"></i>
      Delete Word
    </label>
    <div class="accordion-body">
      <DeleteWordComponent
        @deleteWord="wordDelete($event)"
      ></DeleteWordComponent>
    </div>
  </div>
  <input type="button" value="Logout" class="btn btn-error" @click="logout()" />
</template>

<script>
import CreateWordComponent from "@/components/CreateWord.vue";
import DeleteWordComponent from "@/components/DeleteWord.vue";
import { createWord, deleteWord } from "@/services/apiCalls.js";
import router from "@/router";
import { logoutUser } from "@/services/auth";

export default {
  name: "AdminView",
  components: {
    CreateWordComponent,
    DeleteWordComponent,
  },
  data() {
    return {
      editWordSlug: "",
    };
  },
  methods: {
    wordCreate(data) {
      createWord(data).then(() => {
        router.push('/');
      });
      
    },
    wordDelete(wordslug) {
      deleteWord(wordslug).then(() => {
        router.push('/');
      });
      
    },
    logout() {
      logoutUser().then(() => {
        router.push('/');
      });
    }
  },
};
</script>

<template>
  <div class="home">
    <EditWordComponent
      :wordslug="$route.params.wordslug"
      @editWord="wordEdit($event)"
    ></EditWordComponent>
  </div>
</template>

<script>
import EditWordComponent from "@/components/EditWord.vue";
import router from "@/router";
import { editWord } from "@/services/apiCalls.js";
export default {
  name: "EditView",
  components: {
    EditWordComponent,
  },
  methods: {
    wordEdit(data) {
      let wordPromise = editWord(data);
      wordPromise.then((res) => {
          console.log("Word edited: " + res);
          router.push('/');
      });
    }
  }
};
</script>

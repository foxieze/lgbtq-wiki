<template>
  <div class="home">
    <DictionaryComponent></DictionaryComponent>
  </div>
</template>

<script>
import DictionaryComponent from "@/components/Dictionary.vue";
export default {
  name: "HomeView",
  components: {
    DictionaryComponent
  },
};
</script>

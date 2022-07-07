<template>
  <div class="home">
    <div class="hero-sm hero text-center">
      <div class="hero-body">
        <h1 class="dictherotitle">Dictionary</h1>
        <h4 class="dictherosubtitle">Simple search for LGBTQIA+ vocabulary</h4>
      </div>
    </div>
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

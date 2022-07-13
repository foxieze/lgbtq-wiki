<template>
  <div class="home">
    <div class="hero-sm hero text-center">
      <div class="hero-body">
        <h1 class="dictherotitle">Dictionary</h1>
        <h4 class="dictherosubtitle">Simple search for LGBTQIA+ vocabulary</h4>
        <p>
          If you don't understand any of this, I'd recommend taking a look at
          <router-link to="/help/meaning">some of the help pages</router-link>!
          Or if you'd like help with something else,
          <router-link to="/help/somethingelse"
            >please check this out!</router-link
          >
          We're here to support you!
        </p>
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
    DictionaryComponent,
  },
  mounted() {
    document.title = "Home - LGBTQ Wiki";
  },
};
</script>

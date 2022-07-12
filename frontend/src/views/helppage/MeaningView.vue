<template>
  <div class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="/">Dictionary</a>
    </li>
    <li class="breadcrumb-item">
      <a>Help</a>
    </li>
    <li class="breadcrumb-item">
      <a>Meaning</a>
    </li>
  </div>

  <div class="text-center">
    <h3>That's ok!!</h3>
    <p>
      We've all been there at some point, whether we've known we've been gay for
      30 years or just 20 minutes! This page is here to help
      <strong>people just like you!</strong>
    </p>
    <div style="width: fit-content; margin: auto;">
    <p>I think the first 2 most important concepts to understand are as follows:</p>
    <ul class="text-left">
        <li>There are <router-link to="/help/attraction">different types of attraction</router-link></li>
        <li>You really <strong>don't have to label</strong> how you feel!</li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpMeaningView",
};
</script>

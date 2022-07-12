<template>
  <div class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="/">Dictionary</a>
    </li>
    <li class="breadcrumb-item">
      <a>Help</a>
    </li>
  </div>

  <div class="helpPageButtons">
      <router-link to="/help/meaning">
    <a class="btn btn-primary">I don't know what any of this means!</a>
    </router-link>
    <a disabled class="btn btn-primary">It's something else...</a>
  </div>
</template>

<script>
export default {
  name: "HelpIndexView"
}
</script>

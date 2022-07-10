<template>
  <header class="navbar">
    <section class="navbar-section">
      <router-link to="/" class="navbar-brand mr-2">Dictionary</router-link>
      <a href="/help" class="btn btn-link">Help!</a>
    </section>
    <section class="navbar-section">
      <router-link to="/admin" class="btn btn-link">Admin</router-link>
    </section>
  </header>
  <div class="main">
    <router-view>
    </router-view>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.075s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="wrapper">
    <Header></Header>
    <Home></Home>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Mono:ital,wght@0,400;0,700;1,400&display=swap');

body {
  box-sizing: border-box;

  min-height: 550px;
  height: 100vh;

  background: rgb(164,32,109);
  background: linear-gradient(90deg, rgba(164,32,109,1) 50%, rgba(255,255,255,1) 50%);

  font-family: 'Red Hat Mono', monospace;
}

@media screen and (max-width: 767px) {
  body {
    background: rgb(164,32,109);
    background: linear-gradient(180deg, rgba(164,32,109,1) 50%, rgba(255,255,255,1) 50%);
  }
}

#__nuxt {
  height: 100%;
}

#__layout {
  height: 100%;
}

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}

</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
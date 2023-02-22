<template>
  <div class="wrapper">
    <Header />
    <div class="cv">
      <nuxt-content :document="article" />
    </div>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Mono:ital,wght@0,400;0,700;1,400&display=swap');

body {
  box-sizing: border-box;

  min-height: 550px;
  height: 100vh;

  margin: 0px;
  padding: 0.5em;

  font-family: 'Red Hat Mono', monospace;
  /*background: rgb(164,32,109);
  background: linear-gradient(90deg, rgba(164,32,109,1) 50%, rgba(255,255,255,1) 50%);*/

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

.nuxt-content {
  padding: 2em;
}

table + h3 {
  margin-top: 3em;
}

</style>

<script lang="ts">
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('/', params.slug).fetch();
      return { article }
    }
  }
</script>
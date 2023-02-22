<template>
  <div class="wrapper home">
    <div class="background-container"></div>
    <Header />
    <Home />
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Mono:ital,wght@0,400;0,700;1,400&display=swap');

body {
  box-sizing: border-box;
  
  height: 100vh;
  min-height: 800px;

  margin: 0px;
  padding: 0.5em;

  font-family: 'Red Hat Mono', monospace;
  /*background: rgb(164,32,109);
  background: linear-gradient(90deg, rgba(164,32,109,1) 50%, rgba(255,255,255,1) 50%);*/

}

.background-container {
  position: absolute;
  z-index: -10;

  top: 0px;
  left: 0px;

  width: 50%;
  height: 100%;

  background-image: linear-gradient(to top, rgba(245, 246, 252, 0.10), rgba(117, 19, 93, 0.90)), url("/self.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
}

@media screen and (max-width: 767px) {
  body {
    /* background: rgb(164,32,109);
    background: linear-gradient(180deg, rgba(164,32,109,1) 50%, rgba(255,255,255,1) 50%); */
  }

  .background-container {
    width: 100%;
    height: 50%;

    background-image: linear-gradient(to top, rgba(245, 246, 252, 0.10), rgba(117, 19, 93, 0.90)), url("/self.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
  name: 'IndexPage'
})
</script>
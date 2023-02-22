<template>
    <div>
        <nav class="navbar">
            <div class="container">
                <div class="navbar-header">
                    <a href="/">Mathew A. Jacqmin-Kramer</a>
                </div>
                <div class="menu navbar-right">
                        <a href="mailto:mathew@mathewkramer.io" title="mathew@mathewkramer.io" key="1">Contact</a>
                        <NuxtLink v-for="page in pages" v-bind:key="page.key" class="menu-item" :to="page.url" :title="page.title">{{ page.title }}</NuxtLink>
                        <!-- <a href="javascript: void(0);" v-on:click="" class="theme-switch">Dark<i class="fa fa-sun"></i></a>&nbsp; -->
                </div>
            </div>
        </nav>
        <nav class="navbar-mobile" style="display: none;">
            <div class="container">
                <div class="navbar-header">
                    <div>
                        <a href="javascript:void(0);" class="theme-switch"><i class="iconfont icon-sun"></i></a>&nbsp;
                        <NuxtLink v-for="page in pages" class="menu-item" :to="page.url" :title="page.title">{{ page.title }}</NuxtLink>
                    </div>
                    <div class="menu-toggle">
                        <span></span><span></span><span></span>
                    </div>
                </div>

                <div class="menu" id="mobile-menu">
                    <a class="menu-item" href="url" title="title">Link</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>

nav {
    z-index: 10;
}

.navbar {
    height: 4em;
    line-height: 1.5em;
    padding-top: 1em;
    font-size: 1em;
    width: 100%;
}

.navbar .container {
    width: auto;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.navbar .navbar-right {
    display: flex;
    justify-content: space-between;
}

.navbar a {
    margin: 0em 1em 0em 1em;
    color: rgb(164,32,109);
}

@media screen and (max-width: 767px) {
  .navbar .bgwhite a {
    color: rgb(164,32,109);
  }
  .home .navbar a {
    margin: 0em 1em 0em 1em;
    color: white;
  }

}

.navbar .navbar-header {
    font-weight: bold;    
    color: rgb(164,32,109);
}

.home .navbar .navbar-header a {
    font-weight: bold;
    color: #fff;
}

.navbar .navbar-header a {
    color: rgb(164,32,109);
}

</style>

<script>
export default {
  name: 'Header',
  props: ['bgwhite'],
  data() {
  return {
    pages: [{ url: 'cv', title: 'CV', key: 2 }],
    }
  },
  emits: {
  }
}
</script>
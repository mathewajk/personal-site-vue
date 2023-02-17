<template>
    <div>
        <nav class="navbar">
            <div class="container">
                <div class="navbar-header header-logo">
                    <a href="url">Title</a>
                </div>
                <div class="menu navbar-right">
                        <NuxtLink v-for="page in pages" class="menu-item" :to="page.url" :title="page.title">{{ page.title }}</NuxtLink>
                        <a href="javascript:void(0);" class="theme-switch">Toggle<i class="fa fa-sun"></i></a>&nbsp;
                </div>
            </div>
        </nav>
        <nav class="navbar-mobile" id="nav-mobile" style="display: none;">
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

<script>
export default {
  name: 'Header',
  data() {
  return {
    parentMessage: 'Parent',
    pages: [{ url: '/', title: 'Home' }, { url: 'blog', title: 'Blog' }]
    }
  }
}
</script>
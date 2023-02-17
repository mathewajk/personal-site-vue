<template>
    <div>
        <nav class="navbar">
            <div class="container">
                <div class="navbar-header header-logo">
                    <a href="url">Title</a>
                </div>
                <div class="menu navbar-right">
                        <a class="menu-item" href="url" title="Link title">Link name</a>
                        <a href="javascript:void(0);" class="theme-switch">Toggle<i class="iconfont icon-sun"></i></a>&nbsp;
                </div>
            </div>
        </nav>
        <nav class="navbar-mobile" id="nav-mobile">
            <div class="container">
                <div class="navbar-header">
                    <div>  <a href="javascript:void(0);" class="theme-switch"><i class="iconfont icon-sun"></i></a>&nbsp;<a href="Url">Title</a></div>
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
}
</script>
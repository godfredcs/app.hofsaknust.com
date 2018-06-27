<template>
<div class="subnavbar">
  <div class="subnavbar-inner">
    <div class="container">
      <ul class="mainnav">
        <router-link to="/timeline" tag="li" active-class="active">
          <a><i class="icon-dashboard"></i><span>Timeline</span></a>
        </router-link>
        <router-link to="/posts" tag="li" active-class="active">
          <a><i class="icon-list-alt"></i><span>Posts</span></a>
        </router-link>
        <router-link to="/something" tag="li" active-class="active">
          <a><i class="icon-facetime-video"></i><span>App Tour</span></a>
        </router-link>
        <router-link to="/charts" tag="li" active-class="active">
          <a href="charts.html"><i class="icon-bar-chart"></i><span>Charts</span></a>
        </router-link>
        <router-link to="/shortcodes" tag="li" active-class="active">
          <a href="shortcodes.html"><i class="icon-code"></i><span>Shortcodes</span></a>
        </router-link>
        <li class="dropdown">
          <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
          <i class="icon-long-arrow-down"></i><span>Drops</span> <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <router-link to="/icons" tag="li"><a href="icons.html">Icons</a></router-link>
            <router-link to="/faq" tag="li"><a href="faq.html">FAQ</a></router-link>
          </ul>
        </li>
      </ul>
    </div><!-- /container -->
  </div><!-- /subnavbar-inner -->
</div><!-- /subnavbar -->
</template>

<script>
export default {
  name: 'SubNavbar'
}
</script>

<style scoped>

</style>

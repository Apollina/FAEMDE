<template>
  <div>
    <vs-navbar v-model="activeItem"
               :color="colorx"
               text-color="rgba(255,255,255,.6)"
               active-text-color="rgba(255,255,255,1)"
               class="nabarx">

      <vs-navbar-title style="color: rgba(255,255,255,1)">
        FAEMDE app
      </vs-navbar-title>

      <vs-spacer></vs-spacer>

      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">About us</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data () {
    return {
      colorx: '#3A3A3A',
      activeItem: 0,
      navItems: [
        {
          name: 'Home',
          link: '/',
          index: 1
        },
        {
          name: 'About us',
          link: '/about',
          index: 2
        }
      ]
    }
  }
}
</script>

<style scoped>

  .vs-navbar {
    padding: 10px;
  }

  a {
    font-size: 1rem;
  }

</style>

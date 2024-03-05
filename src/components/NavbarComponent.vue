<script >
import { RouterLink } from 'vue-router'
import { useCounterStore } from '../stores/counter'
// import { ref } from 'vue'
import { reactive } from 'vue'
export default {
  name: 'NavbarComponent',
  setup() {
    const store = useCounterStore()
    const navigationitems = reactive([
      {
        navname: 'Home',
        navlink: '/'
      },
      {
        navname: 'About',
        navlink: '/about'
      },
      {
        navname: 'Contact',
        navlink: '/contact'
      },
      {
        navname: 'Gallery',
        navlink: '/gallery'
      },
      {
        navname: 'Blog',
        navlink: '/blog'
      },
      {
        navname: 'Testimonial',
        navlink: '/testimonial'
      }
    ])
    const logout = () => {
      store.logout()
    }
    return {
      navigationitems,
      store,
      logout
    }
  }
}
</script>
<template>
  <v-app-bar color="black">
    <img src="/images/bvm2.png" height="100px" />
    <nav>
      <RouterLink
        v-for="(navigationitems, i) in navigationitems"
        :key="i"
        tag="li"
        style="color: white"
        class="navitems"
        :to="store.isLogin ? navigationitems.navlink : '/login'"
        >{{ navigationitems.navname }}</RouterLink
      >
    </nav>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <div v-if="!store.isLogin">
      <v-btn to="/login">Login</v-btn>
      <v-btn to="/signup">Sign Up</v-btn>
    </div>
    <div v-else>
      <v-btn @click="logout">Log Out</v-btn>
    </div>
  </v-app-bar>
</template>
<style>
.navitems {
  color: white;
  padding-right: 10px;
  transition: 0.5s;
}
.navitems:hover {
  color: red;
  cursor: pointer;
}
nav li:active {
  color: rgb(236, 19, 19);
  cursor: pointer;
}
</style>
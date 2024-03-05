<script setup>
// @ is an alias to /src
import NavbarComponent from '../NavbarComponent.vue'
import { RouterView } from 'vue-router'
</script>
<template>
  <v-app>
    <v-main>
      <div class="headercontainer">
        <NavbarComponent />
      </div>
      <div class="maincontent">
        <RouterView />
      </div>
    </v-main>
  </v-app>
</template>

  <style>
.headercontainer {
  position: absolute;
  top: 0px;
  width: 100%;
}
.footercontainer {
  position: absolute;
  bottom: 0px;
  width: 100%;
}
.maincontent {
  margin-bottom: 5pc;
}
</style>

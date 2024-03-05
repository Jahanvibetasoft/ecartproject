<script>
import { ref } from 'vue'
export default{
    setup(){
      const show = ref(false)
      return{
        show
    }
    }
}
</script>

<template>
    <v-card
      class="mx-auto productcard"
      max-width="344"
    >
      <v-img
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></v-img>
  
      <v-card-title>
        Top western road trips
      </v-card-title>
  
      <v-card-subtitle>
        1,000 miles of wonder
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          variant="text"
        >
          Explore
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            Jahanvi 
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </template>
  <style>
.productcard{
    margin-top: 2pc;
}
  </style>
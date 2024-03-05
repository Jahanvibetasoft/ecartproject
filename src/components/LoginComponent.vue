<script>
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'

export default {
  setup() {
    const store = useCounterStore()
    const form = ref(null);
    const data = ref({
      valid: true,
      username: '',
      usernameRules: [(v) => !!v || 'Username is Required'],
      email: '',
      emailRules: [
        (v) => !!v || 'Email is Required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => (v && v.length > 8) || 'Password must be greater than 8 characters'
      ]
    })
     const loginbutton = () => {
      form.value.validate();
      console.log(data.value.email)
      if (data.value.valid) {
        store.loginbutton({
        username: data.value.username,
        password: data.value.password,
        email: data.value.email
      });
      } else {
        console.log("Form is invalid");
      }
      form.value.reset();
    }
    return {
      data,
      loginbutton,
      store,
      form
    }
  }
}
</script>
<template>
  <div class="col-6 formrow">
    <v-form class="vform" v-model="data.valid" ref="form">
      <h1>Login Form</h1>
      <v-text-field
        v-model="data.username"
        :rules="data.usernameRules"
        label="Username"
        prepend-icon="mdi-account"
        required
      ></v-text-field>
      <v-text-field
        v-model="data.email"
        :rules="data.emailRules"
        label="E-mail"
        prepend-icon="mdi-email"
        required
      ></v-text-field>
      <v-text-field
        v-model="data.password"
        :rules="data.passwordRules"
        label="Password"
        prepend-icon="mdi-lock"
        required
      ></v-text-field>
      Don't Have an Account
      <v-btn
        class="text-none text-subtitle-1 loginbutton"
        color="#5865f2"
        variant="text"
        to="/signup"
        ><strong>Signup</strong></v-btn
      >
      <v-btn :disabled="!data.valid" color="primary" v-on:click="loginbutton">Login</v-btn>
    </v-form>
  </div>
</template>
<style>
.vform {
  width: 400px;
  margin-top: 2pc;
  border-radius: 2px;
  border: 2px solid white;
  padding: 2pc;
  border-radius: 18px;
  box-shadow: 1px 1px 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  background: white;
  left: 25pc;
  position: relative;
    top: 56px;
}
.formrow {
  margin-left: 2pc;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  font-weight: 600;
}
h1 {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  position: relative;
  left: 5.9pc;
}
</style>


import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
  state() {
    return {
      isLogin: false,
      user: null,
      users: [],
      count:0
    }
  },
  actions: {
    loginbutton(loginuser) {
      const loginusers = this.users.find(
        (user) =>
          user.email === loginuser.email &&
          user.username === loginuser.username &&
          user.password === loginuser.password
      )
      if (loginusers) {
        this.isLogin = true
      }
    },
    logout() {
      this.isLogin = false
    },
    signupbutton(newuser) {
      this.users.push(newuser)
      console.log(this.users)
      this.user = newuser
    }
  }
})

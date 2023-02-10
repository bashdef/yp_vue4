<template>
  <div>
    <router-link to="/">Home</router-link>
    <br>
    <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
    <br>
    <router-link v-if="!isLoggedIn" to="/register">Register</router-link>
    <span v-if="isLoggedIn"><a @click="logout">Logout</a></span>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import Login from "@/components/Login";

export default {
  components: {
    Login,
  },
  computed: {
    isLoggedIn : function () {return this.$store.getters.isLoggedIn}
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
          .then(() => this.$router.push('/login'))
    }
  }
}
</script>
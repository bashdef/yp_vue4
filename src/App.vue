<template>
  <div>
    <div class="nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link v-if="!isLoggedIn" to="/products" class="nav-link">Products</router-link>
      <router-link v-if="!isLoggedIn" to="/login" class="nav-link">Login</router-link>
      <router-link v-if="!isLoggedIn" to="/register" class="nav-link">Register</router-link>
      <span v-if="isLoggedIn"><a @click="logout" class="nav-link">Logout</a></span>
      <router-view></router-view>
    </div>
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
.nav-link {
  text-decoration: none;
  padding-right: 20px;
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
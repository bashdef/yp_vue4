<template>
  <form class="register" @submit.prevent="register">
    <h1>Sign up</h1>
    <label for="">Username</label>
    <input type="text" required v-model="fio">
    <label for="">Email</label>
    <input type="email" required v-model="email">
    <label for="">Password</label>
    <input type="password" required v-model="password">
    <hr />
    <button type="submit">Login</button>
  </form>
</template>
<style>
.register {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  margin: 0 auto;
}
.register input, button {
  border: 1px solid black;
  border-radius: 5px;
}
hr {
  margin: 10px 0;
}
</style>
<script>
export default {
  data() {
    return {
      fio: '',
      email: '',
      password: '',
      API_url: ''
    };
  },
  methods: {
    register() {
      const API_url = 'signup'
      const userData = {
        fio: this.fio,
        email: this.email,
        password: this.password,
      };
      this.$store
          .dispatch('AUTH_REQUEST', {user: userData, url: API_url})
          .then(() => this.$router.push('/login'))
      console.log(localStorage.myAppToken)
    }
  }
};
</script>
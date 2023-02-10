
<template>
  <div v-for="product in isProducts.data" :key="product.id">
    <p>{{product.name}} - {{product.price}} - {{product.description}}</p>
  </div>
</template>
<style>

</style>
<script>
import {mapGetters} from 'vuex'
export default {
  async mounted() {
    this.$store.dispatch('fetchProducts')
  },
  computed: mapGetters(['isProducts'])
}
</script>
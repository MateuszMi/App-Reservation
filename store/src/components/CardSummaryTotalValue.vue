<template>
  <div>
    <h3>Cart Total: ${{ cardTotal.toFixed(2) }}</h3>

    <router-link
      v-if="cardTotal > 1"
      class="view-product-button"
      :class="{ active: $route.name === 'Form' }"
      to="/form"
      >Go to payment</router-link
    >
  </div>
</template>
<script>
export default {
  props: ["products"],
  computed: {
    cardTotal() {
      return this.$store.getters.cardTotal;
    },
  },
};
</script>

<style scoped>
.view-product-button {
  margin-bottom: 50px;
  padding: 15px;
  width: 150px;
  margin: 0 auto;
  border: none;
  background-color: black;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
.view-product-button:hover {
  background-color: gray;
  color: #000;
}
</style>

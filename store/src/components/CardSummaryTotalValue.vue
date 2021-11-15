<template>
  <div>
    <h3>Cart Total: ${{ cardTotal.toFixed(2) }}</h3>
    <button class="view-product-button">Pay by ...</button>
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
  border: none;
  background-color: black;
  color: white;
  border-radius: 5px;
}
.view-product-button:hover {
  background-color: gray;
  color: #000;
}
</style>

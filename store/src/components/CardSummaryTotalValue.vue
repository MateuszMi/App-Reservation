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

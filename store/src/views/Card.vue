<template>
  <div>
    <h1>Your Cart</h1>
    <CardItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    <CardSummaryTotalValue :product="product" />
  </div>
</template>

<script>
import CardItem from "../components/CardItem.vue";
import CardSummaryTotalValue from "../components/CardSummaryTotalValue.vue";
export default {
  components: {
    CardItem,
    CardSummaryTotalValue,
  },
  computed: {
    products() {
      return this.$store.getters.cardItems;
    },
  },
};
</script>

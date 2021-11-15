<template>
  <div class="card__container">
    <div class="header">
      <h3>{{ product.product_name }}</h3>
      <h4>In Cart: {{ product.counter }}</h4>
      <h4>{{ product.price }}</h4>
      <h4>Total Cost: ${{ costItem.toFixed(2) }}</h4>
      <button class="remove" @click="removeItemFromCard()">Remove</button>
      <button class="add" @click="addItemToCard()">ADD</button>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addItemToCard() {
      this.$store.commit("addItemToCard", this.product);
    },
    removeItemFromCard() {
      this.$store.commit("removeItemFromCard", this.product);
    },
  },
  computed: {
    description() {
      return this.product.description.substring(0, 120);
    },
    costItem() {
      return this.product.price.substring(1, 120) * this.product.counter;
    },
  },
};
</script>
<style scoped>
.card__container {
  width: 90%;
  margin: 0 auto;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px gray;
  padding: 10px;
  text-align: left;
}
.header {
  display: flex;
  justify-content: space-around;
}
</style>

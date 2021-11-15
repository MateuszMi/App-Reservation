<template>
  <div class="card__container">
    <div class="header">
      <h3>{{ product.product_name }}</h3>
      <div class="card__box">
        <h4>In Cart: {{ product.counter }}</h4>
        <h4>{{ product.price }}</h4>
        <h4>Total Cost: ${{ costItem.toFixed(2) }}</h4>
        <div>
          <button class="remove" @click="removeItemFromCard()">Remove</button>
          <button class="add" @click="addItemToCard()">Add</button>
        </div>
      </div>
    </div>
    <p>{{ product.short_description }}</p>
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
    costItem() {
      return this.product.price.substring(1, 120) * this.product.counter;
    },
  },
};
</script>
<style scoped>
.card__container {
  width: 90%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px gray;
  padding: 10px;
  text-align: left;
  margin: 20px auto;
}
.card__box {
  display: flex;
  justify-content: space-between;
}
.remove {
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 60px;
  height: 50px;
  background-color: black;
  color: white;
}
.add {
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 60px;
  height: 50px;
  background-color: black;
  color: white;
  margin-left: 10px;
}
.add:hover,
.remove:hover {
  background-color: gray;
  color: #000;
}
</style>

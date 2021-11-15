<template>
  <div>
    <div class="card" @click="$emit('view-product', product)">
      <img :src="product.image" class="product-image" />
      <div class="card-info">
        <h5 class="price">{{ product.price }}</h5>
      </div>
    </div>
    <button class="add" @click="addItemToCard()">ADD</button>
  </div>
</template>
<script>
export default {
  props: ["product"],
  methods: {
    addItemToCard() {
      this.$store.commit("addItemToCard", this.product);
    },
  },
  computed: {
    description() {
      return this.product.short_description.substring(0, 150);
    },
  },
};
</script>
<style scoped>
.card {
  margin: 0 auto;
  position: relative;
  width: 100%;
}
.card-info {
  position: absolute;
  cursor: pointer;
  top: 50px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  width: 100%;
}
h5.price {
  color: red;
}
p.description {
  font-size: 0.85rem;
}

button.add {
  background-color: rgb(79, 160, 187);
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.15rem;
  cursor: pointer;
  top: -150px;
  position: relative;
}
.product-image {
  position: relative;
  cursor: pointer;
  width: 100%;
}
</style>

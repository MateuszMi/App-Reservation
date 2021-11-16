<template>
  <div class="card__container">
    <div class="card" @click="$emit('view-product', product)">
      <img :src="product.image" class="product-image" />
    </div>
    <button class="add" @click="addItemToCard()">
      Buy now<span><i class="fas fa-shopping-cart"></i></span>
    </button>
    <p class="product-name">{{ product.product_name }}</p>
    <p class="price">{{ product.price }}</p>
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
.card__container {
  margin: 0 auto;
  position: relative;
  width: 100%;
}

p.price {
  color: black;
  font-size: 15px;
  font-weight: bold;
  margin: 5px 0 15px 0;
  text-align: left;
}
p.product-name {
  font-size: 15px;
  margin: 15px 0 0 0;
  text-align: left;
}
.fa-shopping-car {
  color: white;
}
.add {
  visibility: hidden;
  background-color: black;
  border: none;
  color: white;
  font-weight: normal;
  font-size: 16px;
  padding: 10px;
  position: absolute;
  top: 35%;
  left: 25%;
  cursor: pointer;
}
.add:hover {
  background-color: gray;
  color: black;
}
.card:hover ~ .add,
.add:hover,
.add:active,
.product-image {
  visibility: visible;
}

.product-image {
  cursor: pointer;
  width: 100%;
}
.product-image:hover {
  filter: grayscale(50%);
}
.fa-shopping-cart {
  font-size: 14px;
  margin-left: 5px;
  margin-right: 0;
}
@media screen and (max-width: 1000px) {
  .add {
    left: 37%;
    top: 41%;
  }
}
@media screen and (max-width: 600px) {
  .add {
    left: 32%;
    top: 37%;
  }
}
</style>

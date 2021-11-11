<template>
  <div>
    <p class="counter--item">{{ items.length }} items</p>
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>

    <section v-else class="product__container">
      <div v-if="loading">Loading...</div>

      <div v-else v-for="item in items" :key="item.id">
        <img :src="item.image" class="product__image" />
        <p class="product__name">{{ item.product_name }}</p>
        <div class="product__price--box">
          <p class="product__price">{{ item.price }}</p>
          <i class="fas fa-shopping-cart"></i>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CardProduct",
  data() {
    return {
      items: [],
      loading: true,
      errored: false,
    };
  },
  methods: {},
  mounted() {
    axios
      .get("http://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6")
      .then((response) => {
        this.items = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style scoped>
.product__image {
  width: 100%;
}
.product__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
}
.counter--item {
  color: grey;
  padding-top: 16px;
}
.product__name {
  height: 40px;
}
.product__price--box {
  display: flex;
  justify-content: space-between;
}
.fa-shopping-cart {
  font-size: 25px;
  cursor: pointer;
}
.fa-shopping-cart:hover {
  color: green;
}
</style>

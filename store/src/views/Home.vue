<template>
  <div>
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <section v-else class="product__container">
      <div v-if="loading">Loading...</div>
      <ProductSummaryCard
        v-for="product in items"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
      />
      <ProductDescriptionBox
        :product="product"
        :active="active.product_box"
        v-on:close-product-box="closeProductBox()"
      />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import ProductSummaryCard from "../components/ProductSummaryCard.vue";
import ProductDescriptionBox from "../components/ProductDescriptionBox.vue";

export default {
  name: "Home",
  components: { ProductSummaryCard, ProductDescriptionBox },
  data() {
    return {
      items: [],
      product: null,
      active: {
        product_box: false,
      },
      loading: true,
      errored: false,
    };
  },

  methods: {
    viewProduct(product) {
      this.product = product;
      this.active.product_box = true;
    },
    closeProductBox() {
      this.active.product_box = false;
    },
  },
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
.product__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
}
@media screen and (max-width: 1028px) {
  .product__container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

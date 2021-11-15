<template>
  <div>
    <div class="home__container">
      <img src="../assets/home.png" class="image-home" />
      <div class="home__box">
        <h2 class="home--title">New arrivals</h2>
        <h3 class="home--subtitle">COLLECTION 2016</h3>
        <button class="home--button">SHOP NOW</button>
      </div>
    </div>
    <p class="itemsLength">{{ items.length }} items</p>
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
    <Subscribe />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import ProductSummaryCard from "../components/ProductSummaryCard.vue";
import ProductDescriptionBox from "../components/ProductDescriptionBox.vue";
import Subscribe from "../components/Subscribe.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    ProductSummaryCard,
    ProductDescriptionBox,
    Subscribe,
    Contact,
    Footer,
  },
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
    setTimeout(() => {
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
    }, 500);
  },
};
</script>
<style scoped>
.itemsLength {
  text-align: start;
  color: #757575;
  font-size: 15px;
  line-height: 1.5;
}
.product__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 32px;
}
@media screen and (max-width: 1028px) {
  .product__container {
    grid-template-columns: repeat(2, 1fr);
  }
}
.image-home {
  width: 100%;
}
.home__container {
  position: relative;
}
.home__box {
  position: absolute;
  top: 0;
  padding: 24px;
  text-align: left;
}
.home--title {
  font-size: 64px;
  font-weight: 400;
  color: white;
  margin: 15px 0;
}
.home--subtitle {
  font-size: 36px;
  font-weight: 400;
  color: white;
  margin: 0;
}
.home--button {
  background-color: black;
  color: white;
  padding: 18px 30px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}
.home--button:hover {
  background-color: gray;
  color: #000;
}
</style>

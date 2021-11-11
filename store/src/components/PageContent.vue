<template>
  <div>
    <header>
      <h2>Products</h2>
      <div class="header__icon">
        <i class="fas fa-shopping-cart"></i>
        <i class="fas fa-search"></i>
      </div>
    </header>
    <img src="../assets/home.png" class="home__image" />
    <CardProduct />
  </div>
</template>

<script>
import CardProduct from "./CardProduct.vue";

export default {
  components: { CardProduct },
  name: "PageContent",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
header {
  height: 85px;
  display: flex;
  max-width: 950px;
  justify-content: space-between;
  color: black;
  align-items: center;
}
h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: normal;
}

i {
  cursor: pointer;
}
.fa-shopping-cart {
  margin-right: 16px !important;
  font-size: 23px;
}
.fa-search {
  font-size: 23px;
}
.home__image {
  width: 100%;
}
</style>

<template>
  <div class="pageContent">
    <Nav class="nav" />
    <div class="nav__link">
      <router-link
        id="link-name"
        :class="{ active: $route.name === 'Home' }"
        to="/"
        >Jeans</router-link
      >
      <router-link :class="{ active: $route.name === 'Card' }" to="/card">
        <div class="card-total">
          <p id="itemTotal">{{ itemTotal }}</p>
          <i class="fas fa-shopping-cart"></i>
        </div>
      </router-link>
      <i class="fas fa-search"></i>
    </div>
    <router-view class="router-view" />
  </div>
</template>
<script>
import Nav from "../src/components/Nav.vue";

export default {
  components: { Nav },

  methods: {
    closeNewsletterBox() {
      this.active.newsletter_box = false;
    },
  },
  computed: {
    itemTotal() {
      return this.$store.getters.itemTotal;
    },
  },
  mouted() {
    this.$store.commit("updateCardFromLocalStorage");
  },
};
</script>
<style>
.nav {
  grid-column: 1;
  position: fixed;
  z-index: 900;
}
.router-view {
  grid-column: 2;
}
.pageContent {
  display: grid;
  grid-template-columns: minmax(auto, 235px) minmax(auto, 950px);
  grid-template-rows: 85px auto;
  margin: 0 auto;
  max-width: 1200px;
  column-gap: 32px;
}
.card-total {
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
}
.card-total:hover {
  color: gray;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav__link {
  display: grid;
  grid-template-columns: minmax(auto, 1000px) auto auto;
  align-items: center;
  justify-content: space-between;
  grid-column: 2;
}
#link-name {
  font-size: 24px;
}
a {
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: row;
}

.fa-search {
  font-size: 22px;
  color: #000;
  cursor: pointer;
}
.fa-shopping-cart {
  margin-right: 16px;
  font-size: 22px;
}
#itemTotal {
  font-size: 22px;
  margin-right: 5px;
}
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

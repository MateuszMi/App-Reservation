<template>
  <div class="pageContent">
    <Nav
      class="nav"
      :active="active.open_item"
      v-on:open-menu-box="openMenuBox()"
    />
    <div id="nav__link">
      <router-link :class="{ active: $route.name === 'Home' }" to="/"
        >Jeans</router-link
      >
      <router-link :class="{ active: $route.name === 'Card' }" to="/card">
        <div class="card">
          <i class="fas fa-shopping-cart"></i>
          <p>{{ itemTotal }}</p>
        </div>
      </router-link>
    </div>
    <router-view class="router-view" />
  </div>
</template>
<script>
import Nav from "../src/components/Nav.vue";

export default {
  components: { Nav },
  data() {
    return {
      active: {
        open_item: false,
      },
    };
  },
  computed: {
    itemTotal() {
      return this.$store.getters.itemTotal;
    },
  },
  mouted() {
    this.$store.commit("updateCardFromLocalStorage");
  },
  methods: {
    openMenuBox() {
      this.active.open_item = false;
    },
  },
};
</script>
<style>
.nav {
  grid-column: 1;
  position: fixed;
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
}
.fa-shopping-cart {
  margin-right: 10px;
}
.card {
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav__link {
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-column: 2;
}

a {
  color: red;
  text-decoration: none;
  display: flex;
  flex-direction: row;
}

a.active {
  color: rgb(72, 255, 0);
}
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

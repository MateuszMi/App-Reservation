<template>
  <div>
    <div class="navbar--mobile">
      <h2 class="navbar--mobile-title">LOGO</h2>
      <i class="fa fa-bars" @click="openMenuMobileBox"></i>
    </div>
    <div class="pageContent">
      <Nav
        class="nav"
        :open="open.menu_mobile_box"
        @close-mobile-box="closeMenuMobileBox"
      />
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
  </div>
</template>
<script>
import Nav from "../src/components/Nav.vue";

export default {
  components: { Nav },
  data() {
    return {
      open: {
        menu_mobile_box: false,
      },
    };
  },
  methods: {
    closeNewsletterBox() {
      this.active.newsletter_box = false;
    },
    openMenuMobileBox() {
      this.open.menu_mobile_box = true;
    },
    closeMenuMobileBox() {
      this.open.menu_mobile_box = false;
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
.navbar--mobile {
  display: none;
}
.nav {
  grid-column: 1;
  position: fixed;
  z-index: 100;
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

@media screen and (max-width: 1000px) {
  .pageContent {
    grid-template-columns: 1fr;
    grid-gap: 0;
    padding-top: 60px;
  }
  .nav__link {
    padding: 10px;
  }
  .navbar--mobile {
    display: flex;
    background-color: black;
    color: white;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 70px;
    z-index: 9;
  }
  .navbar--mobile-title {
    font-size: 24px;
    letter-spacing: 4px;
    font-weight: 400;
  }
  .fa-bars {
    font-size: 24px;
    cursor: pointer;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fa-bars:hover {
    background-color: gray;
    color: #000;
  }
}
</style>

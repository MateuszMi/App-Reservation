<template>
  <nav :class="{ show: open }">
    <h1 class="logo">LOGO</h1>
    <p class="close-mobile-menu" @click="$emit('close-mobile-box')">X</p>
    <div class="nav__menu">
      <a href="#">Shirts</a>
      <a href="#">Dresses</a>
      <a class="menu__drop">
        Jeans
        <i class="fas fa-sort-down"></i
      ></a>
      <div class="nav__menu--box">
        <a href="#" class="nav__menu--slide"
          ><i class="fa fa-caret-right"></i>Skinny
        </a>
        <a href="#" class="nav__menu--slide"
          ><i class="fa fa-caret-right"></i>Relaxed</a
        >
        <a href="#" class="nav__menu--slide"
          ><i class="fa fa-caret-right"></i>Bootcut</a
        ><a href="#" class="nav__menu--slide"
          ><i class="fa fa-caret-right"></i>Straight</a
        >
      </div>

      <a href="#">Jackets</a>
      <a href="#">Gymwear</a>
      <a href="#">Blazers</a>
      <a href="#">Shoes</a>
    </div>
    <div class="nav__contact">
      <a href="#contact" class="nav__contact--item">Contact</a>

      <a class="nav__contact--item" @click="openNewsletterBox">Newsletter</a>
      <Newsletter
        :active="active.newsletter_box"
        @close-newsletter-box="closeNewsletterBox"
      />
      <a href="#subscribe" class="nav__contact--item">Subscribe</a>
    </div>
  </nav>
</template>

<script>
import Newsletter from "../components/Newsletter.vue";
export default {
  components: { Newsletter },
  props: ["open"],
  name: "Nav",
  data() {
    return {
      active: {
        newsletter_box: false,
      },
    };
  },

  methods: {
    openNewsletterBox() {
      this.active.newsletter_box = true;
    },
    closeNewsletterBox() {
      this.active.newsletter_box = false;
    },
  },
};
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  height: 85px;
  letter-spacing: 4px;
  font-size: 24px;
  overflow: hidden;
  margin: 0;
  padding: 0 8px;
}
.nav__menu {
  padding: 64px 0;
  list-style-type: none;
  text-align: left;
  width: 200px;
}
.nav__menu--box {
  display: none;
}

.nav__contact {
  text-align: left;
}
.nav__contact--item {
  color: black;
  font-weight: normal;
}
a {
  display: block;
  padding: 12px 8px;
  outline: 0;
  cursor: pointer;
  color: gray;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}
a:hover {
  color: black;
  background-color: gray;
}
a:hover {
  background-color: rgb(170, 170, 170);
}
.nav__menu--slide:active {
  background-color: gainsboro;
}
.menu__drop {
  position: relative;
}
.menu__drop:hover ~ .nav__menu--box {
  display: block;
}
.nav__menu--box:hover {
  display: block;
}
.fa-sort-down {
  position: absolute;
  top: 22%;
  left: 32%;
}
.fa-caret-right {
  padding: 8px 16px;
}
.nav__menu--slide {
  font-size: 16px;
  padding: 6px 8px;
}
.nav__menu--slide .fa-caret-right {
  visibility: hidden;
}
.nav__menu--slide:hover .fa-caret-right {
  visibility: visible;
}
.nav__menu--slide:active .fa-caret-right {
  visibility: visible;
}
.close-mobile-menu {
  display: none;
}
@media screen and (max-width: 1000px) {
  nav {
    width: 200px;
    height: 100vh;
    background-color: white;
    position: fixed;
    top: 0;
    left: -105vw;
    padding: 15px;
    transition: left 1s;
    z-index: 10;
    overflow-y: scroll;
  }
  nav.show {
    left: 0;
  }
  .close-mobile-menu {
    cursor: pointer;
    display: block;
    position: absolute;
    top: 5px;
    right: 20px;
    font-size: 25px;
    font-weight: bold;
    color: #000;
  }
  .close-mobile-menu:hover {
    background-color: gray;
    width: 22px;
    height: 32px;
  }
  .logo {
    height: 55px;
  }
}
</style>

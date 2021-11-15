<template>
  <nav>
    <h1 class="logo">LOGO</h1>
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
      <a href="#Newsletter" class="nav__contact--item">Newsletter</a>
      <a href="#" class="nav__contact--item">Subscribe</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: ["active"],
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
}
.nav__menu {
  padding: 64px 0;
  list-style-type: none;
  text-align: left;
}
.nav__menu--box {
  display: none;
}

.nav__contact {
  text-align: left;
}
a {
  display: block;
  padding: 8px 0;
  outline: 0;
  cursor: pointer;
  color: black;
  text-decoration: none;
}
.nav__menu--slide:hover {
  background-color: grey;
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
  top: 28%;
  left: 58%;
}
.fa-caret-right {
  padding: 8px 16px;
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
</style>

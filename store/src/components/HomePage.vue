<template>
  <div class="container">
    <Nav />
    <PageContent />
  </div>
</template>

<script>
import PageContent from "./PageContent.vue";
import Nav from "./Nav.vue";

export default {
  components: { PageContent, Nav },
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: grid;
  grid-template-columns: minmax(auto, 233px) minmax(auto, 950px);
  justify-content: center;
  column-gap: 16px;
}
</style>

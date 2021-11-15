<template>
  <div>
    <div
      class="box-background"
      :class="{ show: active }"
      @click="$emit('close-product-box')"
    />
    <div class="box" :class="{ show: active }">
      <div class="box-close" @click="$emit('close-product-box')">X</div>
      <div v-if="product" class="product-details">
        <h3>{{ product.product_name }}</h3>
        <p class="description">{{ product.description }}</p>
        <h3 class="text-center">{{ product.price }}</h3>

        <div class="button-container">
          <button class="remove" @click="removeItemFromCard()">Remove</button>
          <button class="add" @click="addItemToCard()">ADD</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "active"],
  methods: {
    addItemToCard() {
      this.$store.commit("addItemToCard", this.product);
    },
    removeItemFromCard() {
      this.$store.commit("removeItemFromCard", this.product);
    },
  },
};
</script>

<style scoped>
.box-background {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(124, 124, 124, 0.5);
  z-index: 100;
  display: none;
  transition: display 0.5s;
}
.box-background.show {
  display: block;
}
.box {
  width: 50vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: -105vw;
  padding: 15px;
  transition: left 1s;
  z-index: 101;
  overflow-y: scroll;
}
.box.show {
  left: 0;
}

.box-close {
  font-size: 1.5rem;
  padding: 5px;
  border-radius: 5px;
  right: 10px;
  border: 2px solid gray;
  color: gray;
  width: 15px;
  float: right;
  cursor: pointer;
}
.box-close:hover {
  background-color: violet;
}
.product-details {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.button-container button {
  width: 150px;
  border: none;
  border-radius: 5px;
  margin: 0 5px 50px 5px;
  cursor: pointer;
}
p.description {
  padding: 20px;
  line-height: 1.5rem;
}
</style>

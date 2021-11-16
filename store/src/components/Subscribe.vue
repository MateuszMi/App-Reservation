<template>
  <div class="subscribe__container" id="subscribe">
    <h2 class="subscribe__title">Subscribe</h2>
    <p class="subscribe__text">To get special offers and VIP treatment:</p>
    <form action="#" class="subscribe__form">
      <input
        class="subscribe__form--input"
        type="email"
        id="email"
        name="email"
        placeholder="Enter e-mail"
      />
      <input type="submit" value="Subscribe" class="subscribe__form--button" />
    </form>
  </div>
</template>
<style scoped>
.subscribe__container {
  width: auto;
  background-color: black;
  text-align: start;
  padding: 32px 16px;
}
.subscribe__title {
  margin: 10px 0;
  font-size: 36px;
  line-height: 1.5;
  color: white;
}
.subscribe__text {
  color: white;
  font-size: 15px;
  line-height: 1.5;
}
.subscribe__form {
  display: flex;
  flex-direction: column;
}
.subscribe__form--input {
  padding: 8px;
  border: 1pd solid #ccc;
  font-size: 16px;
}
.subscribe__form--button {
  margin-bottom: 16px;
  margin-top: 20px;
  width: 105px;
  padding: 8px 16px;
  vertical-align: middle;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  border: none;
  color: white;
  background-color: rgb(253, 77, 46);
  font-size: 16px;
}
.subscribe__form--button:hover {
  color: #000;
  background-color: #ccc;
}
</style>

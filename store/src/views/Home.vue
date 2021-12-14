<template>
  <div>
    <div class="contaier">
      <div class="reservation">
        <div class="numberSeats">
          <p>Liczba miejsc:</p>
          <input type="number" id="numbersReservation" />
        </div>
        <div>
          <input type="checkbox" class="checkbox" />
          <label class="checkbox-info">
            Czy miejsca mają być obok siebie?
          </label>
        </div>
        <input type="submit" value="Wybierz miejsca" class="submit" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

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
};
</script>
<style scoped>
.contaier {
  max-width: 300px;
  margin: auto;
}
.numberSeats {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
  font-size: 15px;
}

.reservation {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#numbersReservation {
  border: solid black 2px;
  font-size: 15px;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  height: 35px;
  display: flex;
  align-items: center;
}
.checkbox {
  margin-right: 15px;
}

.submit {
  background-color: white;
  border: solid black 2px;
  padding: 20px 50px;
  width: 100%;
  margin-top: 25px;
  font-size: 15px;
  cursor: pointer;
}
.submit:hover {
  background-color: orange;
  border: 2px solid #e65c00;
}

.items-length {
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
@media screen and (max-width: 1000px) {
  .product__container {
    grid-template-columns: repeat(2, 1fr);
    padding: 10px;
  }
  .items-length {
    padding: 0 10px;
  }
  .home__container {
    padding: 0px 10px 10px 10px;
  }
}
@media screen and (max-width: 600px) {
  .home--subtitle {
    display: none;
  }
  .home--button {
    font-size: 15px;
    padding: 13px 30px;
    margin-top: 0;
  }
  .home--title {
    font-size: 36px;
  }
}
</style>

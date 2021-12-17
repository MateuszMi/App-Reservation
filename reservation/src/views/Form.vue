<template>
  <div>
    <h1 id="title">Formularz zamówienia</h1>
    <p>Zarezerowane miejsca</p>
    <div v-for="seat in seats" :key="seat.id" :seat="seat">
      <div class="seat-cords" v-if="!seat.blocked && seat.counter % 2">
        Rząd {{ seat.cords.rzad }}, Miejsce {{ seat.cords.miejsce }}
      </div>
    </div>
    <form action="#">
      <label class="information-name required"
        >Imię i nazwisko:
        <ShippingFullName />
      </label>
      <label class="information-address required"
        >Adres dostawy:
        <ShippingAddress />
      </label>
      <label class="information-contact required"
        >Numer kontaktowy:
        <input
          class="information-contact-phone"
          type="text"
          placeholder="123456789"
          v-model="contactNumber"
          required
        />
      </label>
      <label class="required"
        >E-mail:<input
          class="information-contact-email"
          type="email"
          placeholder="shipping@example.com"
          v-model="email"
          required
      /></label>

      <span v-if="msg.email">Email jest zły!</span>
      <span v-if="msg.contactNumber">Kontakt jest zły!</span>
      <div class="payment-box">
        <label id="payment">Metody płatności:</label>
        <label class="payment-item">
          <img
            class="card"
            :class="{ show: active }"
            src="../assets/Credit-card.png"
            @click="openPaymentBox"
          />
        </label>
      </div>
      <label class="credit-card" for="radio" :class="{ show: active }">
        <label class="card-number"
          >Numer katry: <input type="text" v-model="cardNumber" required
        /></label>

        <label class="cvv-number"
          >CVV:<input type="text" v-model="cvv" required
        /></label>
        <label class="valid-number"
          >Data ważności:<input
            type="text"
            v-model="validCard"
            placeholder="xx/xx"
        /></label> </label
      ><span v-if="msg.cvv">{{ msg.cvv }}</span>
      <input
        v-if="!msg.cvv && !msg.email"
        type="submit"
        class="submit-button"
        value="Wyślij"
      />
    </form>
  </div>
</template>

<script>
import {
  validateCvv,
  validateCardNumber,
  validateEmail,
  validateContactNumber,
  validateValidCard,
} from "../validator/validator";
import ShippingFullName from "../components/ShippingFullName.vue";
import ShippingAddress from "../components/ShippingAddress.vue";

export default {
  components: {
    ShippingFullName,
    ShippingAddress,
  },
  data() {
    return {
      checkbox: false,
      active: false,
      open: false,
      email: "",
      cvv: "",
      cardNumber: "",
      contactNumberOther: "",
      contactNumber: "",
      validCard: "",
      msg: [],
    };
  },
  computed: {
    seats() {
      return this.$store.getters.reservationItem;
    },
  },
  watch: {
    cvv(value) {
      this.cvv = value;
      this.validateCvv(value);
    },
    cardNumber(value) {
      this.cardNumber = value;
      this.validateCardNumber(value);
    },
    email(value) {
      this.email = value;
      this.validateEmail(value);
    },
    contactNumber(value) {
      this.contactNumber = value;
      this.validateContactNumber(value);
    },
    validCard(value) {
      this.validCard = value;
      this.validateValidCard(value);
    },
    contactNumberOther(value) {
      this.contactNumberOther = value;
      this.validateContactNumber(value);
    },
  },

  methods: {
    openPaymentBox() {
      this.active = !this.active;
    },
    openOtherAddress() {
      this.open = !this.open;
    },
    validateCvv,
    validateCardNumber,
    validateEmail,
    validateContactNumber,
    validateValidCard,
  },
  markFieldAsError(field, show) {
    if (show) {
      field.classList.add("field-error");
    } else {
      field.classList.remove("field-error");
    }
  },
};
</script>

<style scoped>
p {
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-style: italic;
}
.seat-cords {
  display: flex;
  justify-content: center;
  font-size: 18px;
  margin: 10px 0;
}
#title {
  display: flex;
  justify-content: center;
}
span {
  color: red;
}
img {
  width: 60px;
  margin: 20px;
  cursor: pointer;
}
img.show {
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
}
.payment-item {
  margin: 10px;
}
.payment-box {
  display: flex;
  align-items: center;
}
h1 {
  color: black;
}
form {
  display: flex;
  flex-direction: column;
  color: black;
  max-width: 1200px;
  margin: 0 auto;
}
input {
  width: 35%;
  height: 30px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  padding: 0 10px;
  margin: 15px 0;
}
.required::before {
  content: "*";
}

.information-contact-phone {
  margin-left: 5px;
  -moz-appearance: textfield;
}

.information-contact-phone::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.information-contact-email {
  margin-left: 90px;
}

.submit-button {
  background-color: orange;
  color: white;
  cursor: pointer;
  width: 150px;
  display: flex;
  margin: 20px auto;
  border: none;
  justify-content: center;
}
.submit-button:hover {
  background-color: gray;
  color: black;
}
.second-addres {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  margin: 0;
  width: 150px;
  cursor: pointer;
}
#checkbox {
  width: 20px;
}
#payment {
  font-weight: bold;
}
.radio {
  width: 20px;
  margin: 0;
}
.card-number {
  display: flex;
  align-items: center;
  width: 90%;
}
.credit-card {
  display: none;
}
.credit-card.show {
  display: block;
}
.card-number input {
  -moz-appearance: textfield;
  margin-left: 10px;
}
.cvv-number input {
  width: 100px;
  margin-right: 20px;
  margin-left: 10px;
  -moz-appearance: textfield;
}
.card-number input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.cvv-number input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.valid-number input {
  width: 175px;
  margin-left: 10px;
}
@media screen and (max-width: 650px) {
  .card-number {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .card-number input {
    width: 70%;
  }
  .cvv-number {
    display: flex;
    flex-direction: column;
  }
  .valid-number {
    display: flex;
    flex-direction: column;
  }
}
</style>

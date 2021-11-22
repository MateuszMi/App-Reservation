<template>
  <div>
    <h1>Shipping information</h1>
    <form action="#">
      <label class="information-name required"
        >Full name:
        <ShippingFullName />
      </label>
      <label class="information-address required"
        >Shipping Address:
        <ShippingAddress />
      </label>
      <label class="information-contact required"
        >Contact Number:
        <input
          class="information-contact-phone"
          type="text"
          placeholder="+46 123456789"
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

      <span v-if="msg.email">Email is wrong!</span>
      <span v-if="msg.contactNumber">Contact number is wrong!</span>

      <label class="second-addres"
        >Other Address:
        <input id="checkbox" type="checkbox" @click="openOtherAddress" />
      </label>
      <label
        :class="{ show: open }"
        for="checkbox"
        class="information-name-other"
        >Full name:
        <ShippingFullNameOther />
      </label>
      <label
        for="checkbox"
        class="information-address-other"
        :class="{ show: open }"
      >
        Shipping Address:
        <ShippingAddressOther />
      </label>

      <label class="information-contact-other" :class="{ show: open }"
        >Contact Number:
        <input
          class="information-contact-phone"
          type="text"
          placeholder="+46 123456789"
          v-model="contactNumberOther"
        />
      </label>
      <label :class="{ show: open }" class="information-contact-other"
        >E-mail:<input
          class="information-contact-email"
          type="email"
          placeholder="shipping@example.com"
      /></label>

      <label id="payment">Payment:</label>
      <label class="payment-item">
        <img class="transfer-bank" src="../assets/Transfer-bank.jpg" />
        <img
          class="card"
          :class="{ show: active }"
          src="../assets/Credit-card.png"
          @click="openPaymentBox"
        />
        <img class="payu" src="../assets/PayU.png" />
      </label>
      <label class="credit-card" for="radio" :class="{ show: active }">
        <label class="card-number"
          >Number Card: <input type="text" v-model="cardNumber" required
        /></label>

        <label class="cvv-number"
          >CVV:<input type="text" v-model="cvv" required
        /></label>
        <label class="valid-number"
          >Valid thru:<input
            type="text"
            v-model="validCard"
            placeholder="xx/xx"
        /></label> </label
      ><span v-if="msg.cvv">{{ msg.cvv }}</span>
      <input
        v-if="!msg.cvv && !msg.email"
        type="submit"
        class="submit-button"
        value="Send"
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
import ShippingAddressOther from "../components/ShippingAddressOther.vue";
import ShippingFullNameOther from "../components/ShippingFullNameOther.vue";

export default {
  components: {
    ShippingFullName,
    ShippingAddress,
    ShippingAddressOther,
    ShippingFullNameOther,
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
h1 {
  color: black;
}
form {
  display: flex;
  flex-direction: column;
  text-align: left;
  color: black;
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
.information-name-other {
  display: none;
}
.information-name-other.show {
  display: block;
}
.information-address-other {
  display: none;
}
.information-address-other.show {
  display: block;
}
.information-contact-other {
  display: none;
}
.information-contact-other.show {
  display: block;
}
.information-contact-phone {
  margin-left: 15px;
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
  background-color: black;
  color: white;
  cursor: pointer;
  width: 150px;
  display: flex;
  margin: 20px auto;
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
}
.card-number input {
  -moz-appearance: textfield;
}
.cvv-number input {
  width: 100px;
  margin-right: 20px;
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
}
.credit-card {
  display: none;
}
.credit-card.show {
  display: block;
}
</style>

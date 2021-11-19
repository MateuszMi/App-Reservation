<template>
  <div>
    <h1>Shipping information</h1>
    <form action="#">
      <label class="information-name"
        >Full name:
        <input
          class="information-name-first-name"
          :class="{ show: open }"
          type="text"
          placeholder="First Name"
          name="first-name"
          required
        />
        <input
          class="information-name-last-name"
          :class="{ show: open }"
          type="text"
          placeholder="Last Name"
          name="last-name"
          required
        />
      </label>
      <label class="information-address">
        Shipping Address:
        <input
          class="information-address-street"
          :class="{ show: open }"
          type="text"
          placeholder="Street Address"
          required
        />
        <input
          class="information-address-city"
          :class="{ show: open }"
          type="text"
          placeholder="City"
          required
        />
        <input
          class="information-address-state"
          :class="{ show: open }"
          type="text"
          placeholder="State"
          required
        />
        <input
          class="information-address-code"
          :class="{ show: open }"
          type="text"
          placeholder="Zip Code  xx-xxx"
          v-model="zipCode"
          required
        />
      </label>
      <label class="information-contact"
        >Contact Number:
        <input
          class="information-contact-phone"
          :class="{ show: open }"
          type="text"
          placeholder="+46 123456789"
          v-model="contactNumber"
        />
      </label>
      <label
        >E-mail:<input
          class="information-contact-email"
          :class="{ show: open }"
          type="email"
          placeholder="shipping@example.com"
          v-model="email"
      /></label>
      <span v-if="msg.email">Email is wrong!</span>
      <span v-if="msg.contactNumber">Contact number is wrong!</span>
      <span v-if="msg.zipCode">Zip-code is wrong!</span>

      <label class="second-addres"
        >Other Address:
        <input id="checkbox" type="checkbox" @click="openOtherAddress" />
      </label>
      <label
        :class="{ show: open }"
        for="checkbox"
        class="information-name-other"
        >Full name:
        <input
          class="information-name-first-name"
          type="text"
          placeholder="First Name"
          name="first-name"
        />
        <input
          class="information-name-last-name"
          type="text"
          placeholder="Last Name"
          name="last-name"
        />
      </label>

      <label
        for="checkbox"
        class="information-address-other"
        :class="{ show: open }"
      >
        Shipping Address:
        <input
          class="information-address-street"
          type="text"
          placeholder="Street Address"
        />
        <input
          class="information-address-city"
          type="text"
          placeholder="City"
        />
        <input
          class="information-address-state"
          type="text"
          placeholder="State"
        />
        <input
          class="information-address-code"
          type="text"
          placeholder="Zip Code  xx-xxx"
        />
      </label>

      <label :class="{ show: open }" class="information-contact-other"
        >Contact Number:
        <input
          class="information-contact-phone"
          type="text"
          placeholder="+46 123456789"
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
          >Number Card:
          <input
            type="text"
            v-model="cardNumber"
            required
            placeholder="xxxx-xxxx-xxxx-xxxx"
        /></label>

        <label class="cvv-number"
          >CVV:<input type="number" v-model="cvv" required
        /></label>
        <label class="valid-number"
          >Valid thru:<input
            type="text"
            v-model="validCard"
            placeholder="xx/xx"
        /></label> </label
      ><span v-if="msg.cvv">{{ msg.cvv }}</span>
      <input type="submit" class="submit-button" value="Send" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: false,
      active: false,
      open: false,
      email: "",
      cvv: "",
      cardNumber: "",
      zipCode: "",
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
    zipCode(value) {
      this.zipCode = value;
      this.validateZipCode(value);
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
  },
  methods: {
    openPaymentBox() {
      this.active = !this.active;
    },
    openOtherAddress() {
      this.open = !this.open;
    },
    validateCvv(value) {
      let re = RegExp(/[0-9][0-9][0-9]/);
      if (re.test(value) && value < 1000) {
        this.msg["cvv"] = "";
      } else {
        this.msg["cvv"] = "Must be 3 characters!";
      }
    },
    validateCardNumber(value) {
      let re = RegExp(
        /[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/
      );
      if (re.test(String(value))) {
        this.msg["cvv"] = "";
      } else {
        this.msg["cvv"] = "Number is wrong!";
      }
    },
    validateZipCode(value) {
      let re = RegExp(/[0-9][0-9]-[0-9][0-9][0-9]$/);
      if (re.test(String(value))) {
        this.msg["zipCode"] = "";
      } else {
        this.msg["zipCode"] = "Number is wrong!";
      }
    },
    validateEmail(value) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(String(value).toLowerCase())) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Wrong email!";
      }
    },
    validateContactNumber(value) {
      let re = RegExp(
        /[+][0-9][0-9][ ][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/
      );
      if (re.test(String(value))) {
        this.msg["contactNumber"] = "";
      } else {
        this.msg["contactNumber"] = "Number is wrong!";
      }
    },
    validateValidCard(value) {
      let re = RegExp(/[0-1][0-9][/][0-9][0-9]$/);
      if (re.test(String(value))) {
        this.msg["cvv"] = "";
      } else {
        this.msg["cvv"] = "Wrong valid card!";
      }
    },
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
.information-name-first-name {
  margin: 0 20px;
}
.information-name-first-name.show {
  text-decoration-line: line-through;
}

.information-name-last-name.show {
  text-decoration-line: line-through;
}
.information-address-street {
  margin: 0 10px;
  width: 70%;
}
.information-address-street.show {
  text-decoration-line: line-through;
}

.information-address-state {
  margin: 0 20px;
}
.information-address-state.show {
  text-decoration-line: line-through;
}
.information-address-city.show {
  text-decoration-line: line-through;
}
.information-address-city {
  width: 70%;
  margin: 20px 20px 0px 145px;
}
.information-address-state {
  margin: 0 20px 0 145px;
  width: 45%;
}
.information-address-code {
  width: 20%;
  -moz-appearance: textfield;
}
.information-address-code.show {
  text-decoration-line: line-through;
}
.information-address-code::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.information-contact-phone {
  margin-left: 20px;
  -moz-appearance: textfield;
}
.information-contact-phone.show {
  text-decoration-line: line-through;
}
.information-contact-phone::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.information-contact-email {
  margin-left: 95px;
}
.information-contact-email.show {
  text-decoration-line: line-through;
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

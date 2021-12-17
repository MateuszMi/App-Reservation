<template>
  <label>
    <input
      class="information-address-street"
      placeholder="Ulica"
      v-model="street"
      required
    />
    <input
      class="information-address-city"
      placeholder="Miasto"
      v-model="city"
      required
    />
    <input
      class="information-address-state"
      placeholder="Województwo"
      v-model="state"
      required
    />
    <input
      class="information-address-code"
      placeholder="Kod pocztowy xx-xxx"
      v-model="zipCode"
      required
    /><br />

    <span v-if="msg.address">Zły addres!</span>
    <br />
    <span v-if="msg.city">Złe miasto!</span>
    <br />
    <span v-if="msg.zipCode">Kod pocztowy jest zły!</span>
  </label>
</template>
<script>
import {
  validateZipCode,
  validateAddress,
  validateCity,
} from "../validator/validator";

export default {
  data() {
    return {
      zipCode: "",
      street: "",
      city: "",
      state: "",
      msg: [],
    };
  },
  watch: {
    street(value) {
      this.street = value;
      this.validateAddress(value);
    },
    city(value) {
      this.city = value;
      this.validateCity(value);
    },
    state(value) {
      this.state = value;
      this.validateCity(value);
    },
    zipCode(value) {
      this.zipCode = value;
      this.validateZipCode(value);
    },
  },

  methods: {
    validateZipCode,
    validateAddress,
    validateCity,
  },
};
</script>

<style scoped>
span {
  color: red;
}
input {
  width: 35%;
  height: 30px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  padding: 0 10px;
  margin: 15px 0;
}
@media screen and (max-width: 650px) {
  input {
    display: flex;
    flex-direction: column;
  }
}
.information-address-street {
  margin: 0 25px;
  width: 70%;
}

.information-address-city {
  width: 69.5%;
  margin: 20px 20px 0px 145px;
}
@media screen and (max-width: 650px) {
  .information-address-city {
    width: 69.5%;
    margin: 20px 20px 0px 28px;
  }
}
.information-address-state {
  margin: 20px 20px 0 145px;
  width: 45%;
}
@media screen and (max-width: 650px) {
  .information-address-state {
    margin: 20px 20px 0 28px;
    width: 69.5%;
  }
}

.information-address-state.show {
  text-decoration-line: line-through;
}
.information-address-code {
  width: 21%;
  -moz-appearance: textfield;
}
@media screen and (max-width: 650px) {
  .information-address-code {
    width: 50%;
    margin: 20px 20px 0 28px;
  }
}
.information-address-code.show {
  text-decoration-line: line-through;
}
.information-address-code::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

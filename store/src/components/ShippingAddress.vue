<template>
  <label>
    <input
      class="information-address-street"
      placeholder="Street Address"
      v-model="street"
      required
    />
    <input
      class="information-address-city"
      placeholder="City"
      v-model="city"
      required
    />
    <input
      class="information-address-state"
      placeholder="State"
      v-model="state"
      required
    />
    <input
      class="information-address-code"
      placeholder="Zip-code xx-xxx"
      v-model="zipCode"
      required
    /><br />

    <span v-if="msg.address">Wrong address!</span>
    <span v-if="msg.city">Wrong city!</span>
    <span v-if="msg.zipCode">Zip-code is wrong!</span>
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
.information-address-street {
  margin: 0 5px;
  width: 70%;
}
.information-address-street.show {
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
  margin: 0 20px;
  margin: 0 20px 0 145px;
  width: 45%;
}
.information-address-state.show {
  text-decoration-line: line-through;
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
</style>

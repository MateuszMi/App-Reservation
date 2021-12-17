<template>
  <label>
    <input
      type="text"
      class="information-name-first-name"
      placeholder="Imię"
      name="first-name"
      v-model="firstName"
      required
    />
    <input
      type="text"
      class="information-name-last-name"
      placeholder="Nazwisko"
      name="last-name"
      v-model="lastName"
      required
    />
    <br />
    <span v-if="msg.fullName">Złe imię lub nazwisko!</span>
  </label>
</template>
<script>
import { validateFullName } from "../validator/validator";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      msg: [],
    };
  },
  watch: {
    firstName(value) {
      this.firstName = value;
      this.validateFullName(value);
    },
    lastName(value) {
      this.lastName = value;
      this.validateFullName(value);
    },
  },

  methods: {
    validateFullName,
  },
};
</script>

<style scoped>
span {
  color: red;
}
input {
  width: 33.3%;
  height: 30px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  padding: 0 10px;
  margin: 15px 0;
}
@media screen and (max-width: 650px) {
  input {
    width: 50%;
    display: flex;
    margin: 17px;
  }
}
.information-name-first-name {
  margin: 0 18px;
}
.information-name-first-name.show {
  text-decoration-line: line-through;
}

.information-name-last-name.show {
  text-decoration-line: line-through;
}
</style>

<template>
  <label>
    <input
      type="text"
      class="information-name-first-name"
      placeholder="First Name"
      name="first-name"
      v-model="firstName"
    />
    <input
      type="text"
      class="information-name-last-name"
      placeholder="Last Name"
      name="last-name"
      v-model="lastName"
    />
    <br />
    <span v-if="msg.fullName">Wrong name!</span>
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
  width: 35%;
  height: 30px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  padding: 0 10px;
  margin: 15px 0;
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

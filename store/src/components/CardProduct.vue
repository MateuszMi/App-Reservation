<template>
  <div>
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <section v-else>
      <div v-if="loading">Loading...</div>
      <div v-else v-for="item in items" :key="item.id">
        <li>{{ item.price }}</li>
        <span>{{ item.id }}</span>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CardProduct",
  data() {
    return {
      items: [],
      loading: true,
      errored: false,
    };
  },
  methods: {},
  mounted() {
    axios
      .get("http://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6")
      .then((response) => {
        this.items = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style scoped></style>

<template>
  <div>
    <h1>Twoja rezerwacja</h1>
    <div class="container">
      <div class="seats" v-for="seat in seats" :key="seat.id">
        {{ seat.id }}
      </div>
    </div>
    <div class="container">
      <div class="seats available"></div>
      <p class="info_availble">Miejsca dostępne</p>
      <div class="seats reserved"></div>
      <p class="info_reserved">Miejsca zarezerwowane</p>
      <div class="seats choice"></div>
      <p class="info_choice">Twój wybór</p>
      <div class="seats btn-reserved">Rezerwuj</div>
    </div>
  </div>
</template>

<script>
import seats from "../store/db";
export default {
  data() {
    return {
      seats: seats,
    };
  },
  computed: {
    products() {
      return this.$store.getters.cardItems;
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-gap: 13px;
  grid-template-columns: repeat(15, 70px);
  justify-content: center;
  margin: 30px 0;
}

.seats {
  border: 1px solid black;
  height: 70px;
}

.available,
.reserved,
.choice,
.btn-reserved {
  margin: 20px 0 0 0;
}
.info_availble,
.info_reserved,
.info_choice,
.btn-reserved {
  grid-column: span 3;
  margin: 20px 0 0 0;
  display: flex;
  align-items: center;
}
.reserved {
  background-color: gray;
}
.choice {
  background-color: orange;
}

.btn-reserved {
  justify-content: center;
  cursor: pointer;
}
</style>

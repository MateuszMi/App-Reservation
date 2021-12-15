<template>
  <div>
    <h1>Twoja rezerwacja</h1>

    <div class="container">
      <div
        class="seats"
        v-for="seat in seats"
        :class="
          (seat.blocked ? 'reserved-back' : '') ||
          (seat.reservation ? 'choice-back' : '')
        "
        :key="seat.id"
        :id="seat.id"
        readonly
        @click="selectSeat"
      />
    </div>
    <div class="container">
      <div class="seats available"></div>
      <p class="info_availble">Miejsca dostępne</p>
      <div class="seats reserved reserved-back"></div>
      <p class="info_reserved">Miejsca zarezerwowane</p>
      <div class="seats choice choice-back"></div>
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
  methods: {
    selectSeat(event) {
      let seat = this.seats.find((seat) => seat.id === event.target.id);
      seat.reservation = !seat.reservation;
      this.$store.commit("addSeats", seat);
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
  cursor: pointer;
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
.reserved-back {
  background-color: gray;
}
.choice-back {
  background-color: orange;
}
.available-back {
  background-color: white;
}
.btn-reserved {
  justify-content: center;
  cursor: pointer;
}
</style>

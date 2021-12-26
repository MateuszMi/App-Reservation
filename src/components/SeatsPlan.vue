<template>
  <div>
    <h1 id="title">Twoja rezerwacja</h1>

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
        @click="selectSeat"
      />
    </div>

    <div class="container-info">
      <div class="seats available"></div>
      <p class="info_availble">Miejsca dostępne</p>
      <div class="seats reserved reserved-back"></div>
      <p class="info_reserved">Miejsca zarezerwowane</p>
      <div class="seats choice choice-back"></div>
      <p class="info_choice">Twój wybór</p>
      <div @click="openInformationBox" class="seats btn-reserved">Rezerwuj</div>
      <Information
        :active="active.information_box"
        @close-information-box="closeInformationBox"
      />
    </div>
  </div>
</template>

<script>
import seats from "../store/db";
import Information from "./Information.vue";

export default {
  components: { Information },
  props: ["seat"],
  data() {
    return {
      seats: seats,
      active: {
        information_box: false,
      },
    };
  },
  methods: {
    selectSeat(e) {
      let seat = this.seats.find((seat) => seat.id === e.target.id);
      seat.reservation = !seat.reservation;
      this.$store.commit("addSeats", seat);
    },
    openInformationBox() {
      this.active.information_box = true;
    },
    closeInformationBox() {
      this.active.information_box = false;
    },
  },
};
</script>

<style scoped>
#title {
  display: flex;
  justify-content: center;
}
.container {
  display: grid;
  grid-gap: 13px;
  grid-template-columns: repeat(15, 70px);
  justify-content: center;
  margin: 30px 0;
}

.container-info {
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
@media screen and (max-width: 1300px) {
  .seats {
    height: 50px;
  }
  .container {
    grid-gap: 5px;
    grid-template-columns: repeat(15, 50px);
  }
  .container-info {
    grid-gap: 5px;
    grid-template-columns: repeat(15, 50px);
  }
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
  pointer-events: none;
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
.btn-reserved:hover {
  background-color: orange;
  border: none;
  color: white;
  font-weight: bold;
}
@media screen and (max-width: 900px) {
  .container {
    grid-template-columns: repeat(15, 5%);
  }
  .seats {
    height: 30px;
  }
  .container-info {
    display: flex;
  }
  .available {
    width: 30px;
  }
  .choice {
    width: 30px;
  }
  .reserved {
    width: 30px;
  }
  p {
    font-size: 12px;
  }
  .btn-reserved {
    font-size: 12px;
    padding: 2px;
  }
}
</style>

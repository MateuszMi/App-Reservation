import { createStore } from "vuex";

function updateLocalStorage(seats) {
  localStorage.setItem("seats", JSON.stringify(seats));
}

export default createStore({
  state: { seats: [] },
  getters: {
    productCounter: (state) => (seat) => {
      const item = state.seats.find((i) => i.id === seat.id);
      if (item) return item.counter;
      else return null;
    },
    reservationItem: (state) => {
      return state.seats;
    },
  },
  mutations: {
    addSeats(state, seat) {
      let item = state.seats.find((i) => i.id === seat.id);
      if (item) {
        item.counter++;
      } else {
        state.seats.push({ ...seat, counter: 1 });
      }
      updateLocalStorage(state.card);
    },
  },
});

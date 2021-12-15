import { createStore } from "vuex";

export default createStore({
  state: { seats: [] },
  mutations: {
    addSeats(state, seat) {
      state.seats.push(seat);
    },
  },
});

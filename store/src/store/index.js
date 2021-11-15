import { createStore } from "vuex";

function updateLocalStorage(card) {
  localStorage.setItem("card", JSON.stringify(card));
}

export default createStore({
  state: { card: [] },

  getters: {
    productCounter: (state) => (product) => {
      const item = state.card.find((i) => i.id === product.id);
      if (item) return item.counter;
      else return null;
    },
    cardItems: (state) => {
      return state.card;
    },
    cardTotal: (state) => {
      return state.card.reduce(
        (a, b) => a + b.price.substring(1, 120) * b.counter,
        0
      );
    },
    itemTotal: (state) => {
      return state.card.length;
    },
  },
  mutations: {
    addItemToCard(state, product) {
      let item = state.card.find((i) => i.id === product.id);

      if (item) {
        item.counter++;
      } else {
        state.card.push({ ...product, counter: 1 });
      }
      updateLocalStorage(state.card);
    },
    removeItemFromCard(state, product) {
      let item = state.card.find((i) => i.id === product.id);

      if (item) {
        if (item.counter > 1) {
          item.counter--;
        } else {
          state.card = state.card.filter((i) => i.id !== product.id);
        }
      }

      updateLocalStorage(state.card);
    },
    updatecardFromLocalStorage(state) {
      const card = localStorage.getItem("card");
      if (card) {
        state.card = JSON.parse(card);
      }
    },
  },
  actions: {},
  modules: {},
});

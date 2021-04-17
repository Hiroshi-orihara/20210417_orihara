import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    address: "",
    zip: ""
  },
  mutations: {
    getAddress(state,address,zip) {
      state.address = address;
      state.zip = zip;
    }
  },
  actions: {
    async getAddressAction(context) {
      const payload = {
        address: "",
        zip: context.state.zip
      };
      await axios
        .get("https://api.zipaddress.net/?", {
          params: { zipcode: payload.zip }
        })
        .then(res => {
          payload.address = res.data.data.fullAddress;
        });
      context.commit("getAddress", payload);
    }
  }
});
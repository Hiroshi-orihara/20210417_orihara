<template>
  <div id="app">
    <input type="text" v-model="zip" />
    <button @click="getAddress">住所自動入力</button>
    <p>Address： {{ address }}</p>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      zip:"",
      address: ""
    };
  },
  methods: {
    async getAddress() {
    const item = await axios.get(
      `https://apis.postcode-jp.com/api/v4/postcodes/${this.zip}?apikey=YKSv4EwHoK4wcomhpyaPhjPFjlsx4eaNPspoAxV`
    );
    this.address=item.data[0].allAddress;
    }
  }
};
</script>

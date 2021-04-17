<template>
  <div>
    <input type="text" v-model="zip" />
    <button @click="getAddress">住所自動入力</button>
  </div>
</template>

<script>
/*ここの書き方が違う。{}？ここ↓消して良いか*/
import { mapState } from "vuex";

export default {
  data() {
    return {
      Text: ""
    };
  },
  /*ここ↓消してよいか*/
  computed: {
    ...mapState({
      zip: state => state.zip
    }),
    address() {
      return this.$store.state.zip.address;
    }
  },
  methods: {
    getAddress() {
      this.$emit("getAddress", this.childText);
      this.$store.commit("getAddress", this.zip);
      this.$store.dispatch("getAddressAction");
    }
  }
};
</script>
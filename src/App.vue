<template>
  <div id="app">
    <TheHeader/>
    <TimeLine/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from "./components/Header.vue";
import TimeLine from "./components/TimeLine.vue";
import TheFooter from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    TheHeader,
    TimeLine,
    TheFooter
  }
};
</script>

<style lang="scss">
@import "@/scss/base.scss";
@import "./assets/style.css";
</style>

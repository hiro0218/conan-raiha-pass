<template>
  <div id="app">
    <TheHeader />
    <Adsense
      data-ad-client="ca-pub-7651142413133023"
      data-ad-slot="5864154990"
    />
    <TimeLine /> <TheFooter />
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
</style>

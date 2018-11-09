<template>
  <div id="app"><TheHeader /> <TimeLine /> <TheFooter /></div>
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
  },
  mounted: function() {
    this.loadFont();
  },
  methods: {
    loadFont: function() {
      document.addEventListener("DOMContentLoaded", function() {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href =
          "https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&amp;subset=japanese";
        document.head.appendChild(link);
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/base.scss";
</style>

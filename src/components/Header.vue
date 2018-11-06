<template>
  <header>
    <h1>来葉峠の真実</h1>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vw;
  background: url("~@/assets/image/hero.jpg") no-repeat center center #d04255;
  background-size: cover;
}
header h1 {
  color: #fff;
  font-size: 32px;
  font-size: 2rem;
}
@media only screen and (min-width: 1170px) {
  header h1 {
    font-size: 40px;
    font-size: 2.5rem;
  }
}
</style>

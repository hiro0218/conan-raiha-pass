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
  height: 200px;
  background: #d04255;
}
header h1 {
  color: #fff;
  font-size: 32px;
  font-size: 2rem;
}
@media only screen and (min-width: 1170px) {
  header {
    height: 300px;
  }
  header h1 {
    font-size: 40px;
    font-size: 2.5rem;
  }
}
</style>

<template>
  <footer>
    <small>Copyright © <a href="https://b.0218.jp/" target="_blank">hiro</a>. All Rights Reserved.</small>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: #253a5b;
}
footer small {
  color: #fff;
  font-size: 18px;
  font-size: 1.125rem;
  margin: 0;
}
@media only screen and (min-width: 1170px) {
  footer {
    height: 280px;
  }
  footer small {
    font-size: 24px;
    font-size: 1.5rem;
  }
}
</style>

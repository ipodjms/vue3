<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Header />
  <headernav />
  <router-view :key="$route.path" />
</template>

<script>
import headernav from "@/components/HeaderNav";
import Header from "@/components/Header";

export default {
  components: {
    headernav,
    Header
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

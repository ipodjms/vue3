
<template>
  <img alt="Vue logo" src="./assets/logo.png" class="logo"/>
  <headernav />
  <router-view :key="$route.path" />
</template>

<script>
import headernav from "@/components/HeaderNav";


export default {
  components: {
    headernav
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
  margin-top: 20px;
}

.logo {
  max-width: 80px;
}

@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
</style>

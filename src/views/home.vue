<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />    
      <Header />
      
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header";

export default {
  name: "home",
  components: {
    HelloWorld,
    Header
  }
};
</script>

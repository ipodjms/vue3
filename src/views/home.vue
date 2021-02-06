<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />    
    <Header />
    <TimeLine />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header"
import TimeLine from "@/components/TimeLine"

export default {
  name: "home",
  components: {
    HelloWorld,
    Header,
    TimeLine
  }
};
</script>

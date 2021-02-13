<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Header />
    <TimeLine />
    <SideBar />
    <AddExpense />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header";
import TimeLine from "@/components/TimeLine";
import SideBar from "@/components/SideBar";
import AddExpense from "@/components/AddExpense";

export default {
  name: "home",
  components: {
    HelloWorld,
    Header,
    TimeLine,
    SideBar,
    AddExpense,
  }
};
</script>

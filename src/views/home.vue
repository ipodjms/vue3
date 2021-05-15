<template>
  <div class="home">
    <HelloWorld msg="Vue.js App" />
    
    <div class="row mt-8">
      <div class="col">
        <Header />
      </div>
    </div>
    
    <div class="row">
      <div class="col-8">
        <TimeLine />
      </div>
      <div class="col-4">
        <SideBar />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <AddExpense />  
      </div>
      
    </div>
    
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
  name: "Home",
  components: {
    HelloWorld,
    Header,
    TimeLine,
    SideBar,
    AddExpense,
  }
};
</script>

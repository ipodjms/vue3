<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
</template>

<script>
export default {
  name: 'headernav',  
}
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: center;
  padding: 30px;  
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}
#nav a.vue-school-active-class {
  color: #ab26ab;
}
</style>
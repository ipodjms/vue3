<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |

    <div v-for="destination in destinations" :key="destination.slug">
      <router-link
        :to="{
          name: 'DestinationDetails',
          params: { slug: destination.id }
        }"
      >
        {{ destination.name }}  
      </router-link> |
    </div>
  </div>
</template>

<script>
export default {
  name: "headernav",
  setup() {
    const name = "joao";
    return { name }; // this line will solve your problem.
  },
  computed: {},
  data() {
    return {
      destinations: [
        {
          name: "Detail page",
          slug: "detail-page",
          image: "brazil.jpg",
          id: 1,
          description:
            "all about Brazil, suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.",          
        },
        {
          name: "Detail Page 2",
          slug: "detail-page",
          image: "panama.jpg",
          id: 2,
          description:
            "all about panama. Nam fermentum, leo ac lobortis tincidunt, justo felis semper nisi, sed facilisis quam ante a justo. Nam pulvinar nibh nec mi vestibulum cursus quis eget orci. Aenean faucibus faucibus ex, a imperdiet nibh luctus faucibus. Mauris porttitor, velit ac eleifend mattis, sem justo accumsan odio, ut mattis nulla nulla eu nibh. Cras justo risus, sollicitudin eget nulla a, consequat convallis tortor. Fusce eget neque metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Sed aliquam nunc id lectus sagittis, ac elementum eros egestas. Aliquam sed tempor dui.",
        }
      ]
    };
  }
};
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

<template>
  <tr v-for="key in items" :key="key">
    <td>{{ $filters.date(key?.cardDate) }}</td>
    <td>
      <div v-if="key?.cardType === 'EXPENSE'">
        HOTEL
      </div>

      <div v-if="key?.cardType === 'EVALUATION'">
        Aprovação da solicitação
      </div>

      <div
        v-if="
          key?.cardType === 'ACCOUNTABILITY_SUBMITTED' ||
            key?.cardType === 'ACCOUNTABILITY_CREATED'
        "
      >
        Solicitação concluída
      </div>
    </td>
    <td>{{ key?.currencyCode }} {{ key?.amountTotal }}</td>
    <td>{{ key?.notes }}</td>
    <td>
      <div v-if="key?.cardType === 'EVALUATION'">
        APROVED
      </div>
      <div v-if="key?.cardType !== 'EVALUATION'">
        {{ key?.status }}
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "loop",
  props: {
    items: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

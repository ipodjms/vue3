<template>
  <div id="h">
    <h1>Add Expense</h1>

    <label for="">Tipo</label>
    <div id="v-model-select-type" class="demo">
      <select v-model="expenseTypeCode">
        <option disabled value="">Please select one</option>
        <option>Hotel Fee</option>
        <option>Food</option>
        <option>Transport</option>
      </select>
      <span>Selected: {{ expenseTypeCode }}</span>
    </div>

    <label for="">Moeda</label>
    <div id="v-model-select-currency" class="demo">
      <select v-model="currencyCode">
        <option disabled value="">Please select one</option>
        <option>BRL</option>
        <option>USD</option>
        <option>MXN</option>
      </select>
      <span>Selected: {{ currencyCode }}</span>
    </div>

    <div v-if="currencyCode !== '' ">
      <div>
        <label>Valor Total da nota / cupom</label>
        <input type="number" v-model="amountTotal" name="" id="" />
      </div>

      <div>
        <label>Valor a ser considerado</label>
        <input type="number" v-model="amountSpent" name="" id="" />
      </div>
    </div>

    <label for="">Descrição</label>
    <input v-model="notes" placeholder="edit me" />

    <label for="">Data</label>
    <input v-model="date" type="date" />

    <label for="">File</label>
    <input
      type="file"
      id="resourceUrl"
      ref="resourceUrl"
      v-on:change="handleFileUpload($event)"
      accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
    />

    <button v-on:click="addExpenseData">Hello</button>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "addExpense",
  components: {},

  setup() {},
  data() {
    return {
      expenseTypeCode: "",
      currencyCode: "",
      notes: "",
      date: "",
      resourceUrl: "",
      amountTotal: 0,
      amountSpent: 0
    };
  },

  methods: {
    addExpenseData() {
      axios
        .post(
          "https://api-front-end-challenge.buildstaging.com/api/expense/add",
          {
            expenseTypeCode: this.expenseTypeCode,
            currencyCode: this.currencyCode,
            amountSpent: this.amountSpent,
            amountTotal: this.amountTotal,
            notes: this.getTimeStamp(),
            resourceUrl: this.resourceUrl,
            cardDate: this.date
          }
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getTimeStamp() {
      return new Date(this.date).getTime();
    },
    handleFileUpload(event) {
      if (event.target.files[0].size > 1000000) {
        alert("Seu arquivo é maior que 1MB");
        this.resourceUrl = "";
      } else {
        this.resourceUrl = this.$refs.resourceUrl.files[0];
      }
    }
  }
};
</script>

<template>
  <div id="h">
    <h1>Add Expense</h1>

    <button  v-on:click="addExpenseData">Hello</button>
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
      addExpense: [
        {
          accountabilityId: Number,
          accountabilityStatus: String,
          approved: Number,
          balance: Number,
          currency: {
            code: String,
            id: Number,
            name: String,
            symbol: String
          },
          declared: Number,
          received: Number,
          returned: Number,
          updatedOn: Number
        }
      ]
    };
  },

  methods: {

    addExpenseData() {
      alert('New comment');
            axios
        .post(
          "https://api-front-end-challenge.buildstaging.com/api/expense/add",
          {
            expenseTypeCode: "hotel-fee",
            currencyCode: "BRL",
            amountSpent: 13.0,
            amountTotal: 71.0,
            notes: "Descrição da despesa",
            resourceUrl: "",
            cardDate: 1585710000000 // Timestamp da data
          }
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      }
    }   
  
}
</script>

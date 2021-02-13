<template>
  <div id="h">
    <h1>SideBar</h1>

    <div v-if="!loading">
      <div v-for="key in this.sideBarInfo" :key="key">
        {{ key?.accountabilityStatus }}
        Valor declarado: {{ key?.currency.code }} {{ key?.declared }} Valor
        recebido: {{ key?.currency.code }} {{ key?.received }} Saldo: ({{
          key?.declared - key?.received
        }})
      </div>
    </div>
    <section v-if="errored">
      <p>
        Pedimos desculpas, não estamos conseguindo recuperar as informações no
        momento. Por favor, tente novamente mais tarde.
      </p>
    </section>

    <section v-else>
      <div v-if="loading">Carregando...</div>
    </section>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "sidebar",
  components: {},

  setup() {},
  data() {
    return {
      sideBarInfo: [
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

  mounted() {
    axios
      .get("https://api-front-end-challenge.buildstaging.com/api/sidebar")
      .then(response => {
        console.log(response.data.content.length);
        // this.teste = response.data.content;
        this.sideBarInfo = response.data.content;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
        throw new Error(error);
      })
      .finally(() => (this.loading = false));

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
};
</script>

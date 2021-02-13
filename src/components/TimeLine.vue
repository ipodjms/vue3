<template>
  <div id="h">
    <h1>Timeline</h1>
      <ul id="array-with-index">
        <li :v-for="(item, index) in users">
          {{ item }}
        </li>
      </ul>

    <div v-if="!loading">
      {{ users.length }}

      

      
      <!-- {{ timeLine[1].id }}
      {{ timeLine[2].id }}
      {{ timeLine[3].id }}
      {{ timeLine[4].id }} -->

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Tipo</th>
            <th scope="col">Valor</th>
            <th scope="col">Observação</th>
            <th scope="col">Status</th>
          </tr>
        </thead>

        <!-- {{timeLine[0]}} -->

        <tbody>

          <Loop :items="this.timeLine" />
        </tbody>
      </table>
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
import Loop from "@/components/Loop"

const axios = require("axios");

export default {
  name: "timeLine",
    components: {
    Loop
  },

  setup() {
    // make users variable reactive with the ref() function
    const users = [{ message: "Foo" }];

    return {
      users
    };
  },
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
      timeLine: [
        {
          amountSpent: Number,
          amountTotal: Number,
          cardDate: Number,
          cardType: String,
          contentType: String,
          currencyCode: String,
          currencyId: Number,
          currencySymbol: String,
          expenseEvaluation: null,
          expenseId: Number,
          expenseTypeCode: String,
          expenseTypeIcon: String,
          expenseTypeId: Number,
          id: Number,
          invoiceDate: Number,
          notes: String,
          resourceUrl: String,
          status: String,
          updatedOn: Number
        }
      ]
    };
  },

  mounted() {
    axios
      .get("https://api-front-end-challenge.buildstaging.com/api/timeline")
      .then(response => {
        console.log(response.data.content.length);
        // this.teste = response.data.content;
        this.timeLine = response.data.content;

      })
      .catch(error => {
        console.log(error);
        this.errored = true;
        throw new Error(error);
      })
      .finally(() => (this.loading = false));
  },

  
};
</script>

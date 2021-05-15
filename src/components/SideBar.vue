<template>
  <div id="h">
    <h1>Resumo</h1>

    <div v-if="!loading" class="border border-success">
      <div v-for="key in this.sideBarInfo" :key="key" class="mb-4 mt-4">
        <b>{{ key?.accountabilityStatus }} </b> <br />
        <b>Valor declarado:</b> {{ key?.currency.code }} {{ key?.declared }} <br />
        <b>Valor recebido: </b> {{ key?.currency.code }} {{ key?.received }} <br />
        <b>Saldo: </b> ({{ key?.declared - key?.received }})
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
  }
};
</script>

<template>
  <div id="h">
    <h1>Reembolso - {{ info?.id }}</h1>
    <div v-if="!loading">
      <ul class="list-group">
        <li class="list-group-item">Nome: {{ info?.collaborator.name }}</li>
        <li class="list-group-item">Email: {{ info?.collaborator.email }}</li>
        <li class="list-group-item">
          Justificativa: {{ info?.justification }}
        </li>
        <li class="list-group-item">Finalidade: {{ info?.purpose }}</li>
        <li class="list-group-item">Projeto: {{ info?.project.title }}</li>
        <li class="list-group-item">
          Data: {{ $filters.date(info?.createdOn) }}
        </li>
      </ul>
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
  name: "header",

  data() {
    return {
      info: {
        accountabilityExtraInfo: {
          amountOfPeople: Number,
          eventDate: Date
        },
        canceled: Boolean,
        collaborator: {
          email: String,
          id: Number,
          name: String
        },
        costCenters: [
          {
            id: Number,
            name: String,
            percentage: Number,

            reviser: {
              email: String,
              id: Number,
              name: String
            },

            talentPartner: {
              email: String,
              id: Number,
              name: String
            }
          }
        ],
        createdOn: Date,
        fraternizationEducationBudget: Boolean,
        id: Number,
        justification: String,
        project: {
          id: Number,
          title: String
        },
        purpose: String,
        status: String,
        title: String,
        type: String
      },
      currentName: String,
      loading: true,
      errored: false
    };
  },

  mounted() {
    axios
      .get("https://api-front-end-challenge.buildstaging.com/api/header")
      .then(response => {
        this.info = response.data;
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

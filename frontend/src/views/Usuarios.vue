<template>
  <div class="d-flex flex-wrap align-center gap-5">
    <v-text-field
      v-model="nomeColaborador"
      placeholder="novo Colaborador"
      class="w-75"
    >
    </v-text-field
    ><v-btn
      small
      class="g-flex align-center gap-10 w-25 primary"
      @click="adicionaColaborador"
    >
      <v-icon class="size-1">mdi-content-save</v-icon> Novo Colaborador
    </v-btn>
    <v-data-table
      class="w-100"
      :search="pesquisa"
      :items="dados"
      :headers="[
        { text: 'Id', value: 'id' },
        { text: 'Nome', value: 'nome' },
      ]"
    >
      <template #id="{ value }">
        {{ value * 10000 }}
      </template>
    </v-data-table>
  </div>
</template>
<script>
import FetchHttp from "@/utils/fetch-http";

export default {
  inject: ["pesquisa"],
  data() {
    return {
      dados: [],
      nomeColaborador: null,
    };
  },
  methods: {
    async adicionaColaborador() {
      if (!this.nomeColaborador) {
        return;
      }

      if (this.dados.some((e) => e.nome == this.nomeColaborador)) {
        alert("Colaborador já foi adicionado");
        this.nomeColaborador = null;
        return;
      }

      try {
        const usuario = await FetchHttp.post("/usuario", {
          nomeColaborador: this.nomeColaborador,
        });
        this.dados.push(usuario);
        alert("Sucesso");
      } catch (err) {
        alert("Error ao adicionar Colaborador \n" + err);
      }
    },

    async obtemDados() {
      try {
        this.dados = await FetchHttp.get("/usuario");
      } catch (err) {
        alert(err);
      }
    },
  },
  async created() {
    await this.obtemDados();
  },
};
</script>

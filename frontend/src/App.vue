<template>
  <v-app class="rounded rounded-md">
    <div class="d-flex w-100 h-100">
      <v-card
        app
        dense
        class="ma-2 w-25"
        color="azulClaro"
        style="border-radius: 10px 0px 0px 10px"
      >
        <v-list-item-group v-model="selected" color="azul">
          <v-list-item :disabled="selected == 0">
            <v-list-item-icon>
              <v-icon :color="selected == 0 ? 'azul' : ''"
                >mdi-clock-outline</v-icon
              >
            </v-list-item-icon>

            <v-list-item-title v-text="'Pontos'"></v-list-item-title>
          </v-list-item>
          <v-list-item :disabled="selected == 1">
            <v-list-item-icon>
              <v-icon :color="selected == 1 ? 'azul' : ''"
                >mdi-account-circle</v-icon
              >
            </v-list-item-icon>

            <v-list-item-title v-text="'Colaboradores'"></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-card>

      <div class="px-1 py-3 w-75">
        {{ pesquisa }}
        <v-text-field
          v-model="pesquisa"
          filled
          dense
          placeholder="Pesquisa colaboradores"
          prepend-inner-icon="mdi-magnify"
        >
        </v-text-field>

        <component :is="['Marcacoes', 'Usuarios'][selected]" />
      </div>
    </div>
  </v-app>
</template>

<script>
import Marcacoes from "./views/Marcacoes.vue";
import Usuarios from "./views/Usuarios.vue";

export default {
  provide() {
    return {
      pesquisa: this.pesquisa,
    };
  },
  name: "App",
  components: {
    Marcacoes,
    Usuarios,
  },
  data() {
    return {
      selected: 0,
      pesquisa: null,
    };
  },
};
</script>

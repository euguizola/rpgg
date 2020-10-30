<template>
  <div id="mesa">
    <p>
      Sala <b>{{ sala.codigoDaSala }}</b>
    </p>
    <div id="jogadores">
      <jogador
        :jogador="dadosJogador"
        v-for="dadosJogador in sala.jogadores"
        :key="dadosJogador.id"
      />
    </div>
    <el-button @click="rolarDado">Rolar Dado</el-button>
    <dado :resultado="valorDado" />
  </div>
</template>

<script>
import Jogador from "../components/Jogador";
import Dado from "../components/Dado";

export default {
  name: "Sala",
  components: { Jogador, Dado },
  props: [],
  beforeMount() {
    this.sala.codigoDaSala = this.$route.params.codigo;
    this.sala.idMestre = btoa(codigoSala + "rpggmestre");
    var tokenJogador = window.localStorage.getItem("token");
    if (tokenJogador) {
      this.jogador.id = token;
    }
  },
  data() {
    return {
      valorDado: 1,
      jogador: {
        id: "",
      },
      sala: {
        codigoDaSala: "",
        idMestre: "",
        jogadores: [
          {
            id: "XYZ",
            nome: "Wolfi",
            vida: 100,
            energia: {
              nome: "Energia",
              valor: 40,
              maximo: 100,
            },
            foto:
              "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/g/gray-wolf_thumb.JPG",
          },
          {
            id: "XYZ1",
            nome: "Peguinhas",
            vida: 100,
            energia: {
              nome: "Energia",
              valor: 100,
              maximo: 100,
            },
            foto:
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg",
          },
        ],
      },
    };
  },
  methods: {
    randomNumber(low, high) {
      return Math.floor(Math.random() * (1 + high - low)) + low;
    },
    rolarDado() {
      this.valorDado = this.randomNumber(1, 20);
    },
  },
};
</script>

<style></style>

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
    this.sala.idMestre = btoa(this.sala.codigoDaSala + "rpggmestre");
    var tokenJogador = window.localStorage.getItem("token");
    if (tokenJogador) {
      this.jogador.id = tokenJogador;
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
        maximoDePontosDeHabilidade: 10,
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
            metadados: [
              {
                nome: "Raça",
                valor: "Vampiro",
              },
            ],
            foto:
              "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/g/gray-wolf_thumb.JPG",
            habilidades: [
              {
                nome: "Força",
                valor: 5,
              },
              {
                nome: "Carisma",
                valor: 1,
              },
              {
                nome: "Espionagem",
                valor: 10,
              },
            ],
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
            metadados: [
              {
                nome: "Raça",
                valor: "Vampiro",
              },
              {
                nome: "Tipo",
                valor: "Caçador",
              },
            ],
            foto:
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg",
            habilidades: [
              {
                nome: "Força",
                valor: 5,
              },
              {
                nome: "Carisma",
                valor: 1,
              },
              {
                nome: "Espionagem",
                valor: 10,
              },
            ],
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

<template>
  <div class="jogador">
    <el-avatar :size="50" :src="jogador.foto"></el-avatar>
    <div class="dados-jogador">
      <span class="nome">{{ jogador.nome }}</span>
      <span class="titulo"><b>Vida</b> {{ jogador.vida }} / 100</span>
      <el-progress
        class="bar"
        :text-inside="true"
        :stroke-width="14"
        :percentage="jogador.vida"
        status="exception"
      ></el-progress>
      <span class="titulo"
        ><b>{{ jogador.energia.nome }}</b> {{ jogador.energia.valor }} /
        {{ jogador.energia.maximo }}</span
      >
      <el-progress
        class="bar-2"
        :text-inside="true"
        :stroke-width="14"
        :percentage="porcentagemEnergia"
      ></el-progress>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jogador",
  props: ["jogador"],
  computed: {
    porcentagemEnergia() {
      return (this.jogador.energia.valor * 100) / this.jogador.energia.maximo;
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.jogador {
  display: flex;
  width: 100%;
  max-width: 200px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.nome {
  font-weight: bold;
}
.dados-jogador {
  flex: 2;
  text-align: left;
  margin-left: 6px;
  display: flex;
  flex-direction: column;
}

.dados-jogador .titulo {
  font-size: 10px;
}

.jogador .bar {
  width: 100%;
}

.jogador .bar-2 {
  width: 90%;
}
</style>

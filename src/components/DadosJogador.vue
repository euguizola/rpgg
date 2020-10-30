<template>
  <el-dialog
    :title="`Informações do personagem ${jogador.nome}`"
    :visible.sync="open"
    class="modal-jogador"
    width="80%"
  >
    <el-row :gutter="24">
      <el-col :span="8">
        <el-avatar :size="150" :src="jogador.foto" shape="square"></el-avatar>
      </el-col>
      <el-col :span="16">
        <div class="dados-jogador">
          <h2>Informações Gerais</h2>
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
          <span
            v-for="metadado in jogador.metadados"
            :key="metadado.nome"
            class="metadados"
          >
            <b>{{ metadado.nome }}:</b>{{ metadado.valor }}
          </span>
        </div>
      </el-col>
    </el-row>
    <section class="habilidades">
      <h2>Habilidades</h2>
      <ul>
        <li v-for="habilidade in jogador.habilidades" :key="habilidade.nome">
          <b>{{ habilidade.nome }}:</b>
          <el-input-number
            v-model="habilidade.valor"
            :min="0"
            :max="5"
            v-if="isMestre"
            size="mini"
          ></el-input-number>
          <span v-else>{{ habilidade.valor }}</span>
        </li>
      </ul>
    </section>
  </el-dialog>
</template>

<script>
export default {
  name: "DadosJogador",
  props: ["jogador", "open"],
  computed: {
    porcentagemEnergia() {
      return (this.jogador.energia.valor * 100) / this.jogador.energia.maximo;
    },
    tokenJogador() {
      return window.localStorage.getItem("token");
    },
    isMestre() {
      return (
        window.localStorage.getItem("token") ==
        btoa(this.$route.params.codigo + "rpggmestre")
      );
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.modal-jogador h2 {
  font-weight: normal;
  margin: 0;
  padding: 0;
}
.modal-jogador .dados-jogador .titulo {
  font-size: 14px;
  margin-top: 12px;
}
.modal-jogador .dados-jogador .bar {
  width: 100%;
}

.modal-jogador .dados-jogador .bar-2 {
  width: 100%;
}

.modal-jogador .metadados {
  margin-top: 12px;
}

.modal-jogador .habilidades {
  margin-top: 16px;
}

.modal-jogador .habilidades ul {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.modal-jogador .habilidades ul li {
  width: 30%;
  list-style: none;
  margin-top: 5px;
  padding: 6px;
}
</style>

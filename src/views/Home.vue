<template>
  <div class="home">
    <div id="inicio">
      <el-form @submit="irParaSala">
        <el-row :gutter="20">
          <el-col :span="16">
            <el-form-item>
              <el-input
                placeholder="Digite o código..."
                v-model="codigoSala"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-button type="success" @click="irParaSala" class="full-line"
                >Entrar na Sala</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <p>ou</p>
      <el-button type="primary" class="full-line" @click="criarSala"
        >Criar Sala</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      codigoSala: "",
    };
  },
  methods: {
    irParaSala() {
      // named route
      this.$router.push({ name: "Sala", params: { codigo: this.codigoSala } });
    },
    criarSala() {
      // Gera código de sala
      var codigoSala = Math.floor(Math.random() * 999999 + 1);
      // Cria o token do mestre com o código + rpgg e "criptografa"
      var tokenDoMestre = btoa(codigoSala + "rpggmestre");
      window.localStorage.setItem("token", tokenDoMestre);
      this.$router.push({ name: "Sala", params: { codigo: codigoSala } });
    },
  },
};
</script>

<style>
#inicio {
  max-width: 1024px;
  margin: 0 auto;
}
p {
  font-size: 1.5em;
}
</style>

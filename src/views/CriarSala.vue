<template>
  <div>
    <p id="codigo-sala">
      Seu código de sala será: <b>{{ codigoDaSala }}</b>
    </p>
    <el-form> </el-form>
  </div>
</template>

<script>
export default {
  name: "CriarSala",

  beforeMount() {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#codigo-sala {
  font-size: 1.2em;
}
</style>

<template>
  <el-container class='container'>
    

  </el-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Skin',
  beforeMount() {
    // this.$store.dispatch('GetAllSummoner').then(() => {
    //   this.curSum = this.AllSummoner[0];
    // })
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({

		})
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
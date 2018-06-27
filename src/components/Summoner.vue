<template>
  <el-container class='container'>
    <el-aside width='40%' id='aside'>
      <el-card class="left-card">
        <el-radio-group v-model="curSumName" @change="handleChange">
          <el-radio-button class="summoner-button"
              v-for="summoner in AllSummoner"
              :label="summoner.name"
              :key="summoner.name">
            <img class="summoner-icon" v-lazy="'/static/images/summoner/'+summoner.name+'.jpg'" :alt="summoner.name"/>
          </el-radio-button>
        </el-radio-group>
      </el-card>
    </el-aside>

    <el-main class='main'>
      <el-card class="right-card">
        <img class="summoner-img" 
          :src="'/static/images/summoner/'+curSumName+'-example.jpg'" 
          :alt="curSumName+'-example'"/>
        <p class='sum-name'>{{curSumName}}</p>
        <p class='sum-level'> {{'LV '+curSum.level+' 解锁'}}</p>
        <p class='sum-cd'> {{curSum.cd+'秒CD: '+curSum.detail}} </p>
      </el-card>
    </el-main>

  </el-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Summoner',
  beforeMount() {
    this.$store.dispatch('GetAllSummoner').then(() => {
      this.curSum = this.AllSummoner[0];
    });
  },
  data() {
    return {
      curSumName: '惩击',
      curSum: {}
    };
  },
  computed: {
    ...mapGetters({
      AllSummoner: 'all_summoner'
    })
  },
  methods: {
    handleChange: function() {
      for (var i = 0; i < this.AllSummoner.length; i++) {
        if (this.AllSummoner[i].name === this.curSumName) {
          this.curSum = this.AllSummoner[i];
          break;
        }
      }
    }
  }
};
</script>

<style scoped>
.container {
  height: auto;
}

#aside {
  padding: 1%;
}

.main {
  padding: 1%;
  height: 100%;
}

.left-card {
  height: 98%;
  width: 98%;
}
.right-card {
  height: 98%;
  width: 100%;
}
.summoner-button {
  width: 25%;
  margin: 2%;
  padding: 0;
}
.summoner-icon {
  width: 100%;
  margin: 1%;
}
.summoner-img {
  width: 96%;
}
.sum-name {
  display: block;
  text-align: left;
  margin-left: 5%;
  font-size: 18px;
  font-weight: bold;
  color: darkcyan;
}
.sum-level {
  text-align: left;
  margin-left: 5%;
  font-size: 13px;
  color: purple;
}
.sum-cd {
  text-align: left;
  margin-left: 5%;
  font-size: 13px;
  color: blue;
}
</style>
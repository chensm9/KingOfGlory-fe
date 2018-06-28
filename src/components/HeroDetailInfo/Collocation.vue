<template>
  <el-card class='main'>
    <div slot="header" class="title">
      <span>英雄推荐出装</span>
    </div>
    <el-card class='collocation-box' v-for="colloitem in collocation" :key="colloitem.type">
      <div slot="header" class="collocation-title">
        <span>{{colloitem.type}}</span>
      </div>
      <div class="equip-box" v-for="equip in JSON.parse(colloitem.collocation)" :key="equip">
        <img class='equip-img' v-lazy="'/static/images/equip/'+equip+'.png'" />
        <div class='equip-title'>{{equip}}</div>
      </div>
      <div class="analysis">{{colloitem.analysis}}</div>
    </el-card>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Collocation',
  beforeMount() {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      collocation: 'current_collocation'
    })
  },
  methods: {}
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}

.title {
  color: darkorange;
  font-size: 25px;
  font-weight: bold;
  padding: 2%;
  text-align: left;
}

.collocation-title {
  color: salmon;
  font-size: 22px;
  font-weight: bold;
  padding: 2%;
}

.collocation-box {
  width: 47%;
  float: left;
  margin: 1%;
  padding: 0;
}

.equip-box {
  width: 14%;
  display: inline-block;
  margin: 1%;
}

.equip-img {
  width: 95%;
  display: block;
}

.equip-title {
  padding: 1%;
  color: rgb(184, 14, 133);
  font-weight: bold;
  font-size: 12px;
}
.analysis {
  padding: 1%;
  color: rgb(14, 17, 184);
  font-size: 14px;
  text-align: left;
}
</style>
<template>
  <div>
    <el-card class = 'sum-box'>
      <div slot="header" class="title">
        <span>召唤师技能</span>
      </div>
      <img class='sum-img' v-lazy="'/static/images/summoner/' + summoner.name + '.jpg'" :alt="summoner.name"/>
      <div class="sum-title">{{ summoner.name }}</div>
      <div class="sum-cd"> {{ summoner.cd+'秒CD' }} </div>
      <div class="sum-desc"> {{ 'LV'+summoner.level + '：' + summoner.detail }} </div>
    </el-card>
    <el-card class = 'all-rune-box'>
      <div slot="header" class="title">
        <span>铭文推荐</span>
      </div>
      <div class='rune-box' v-for="rune in runeList" :key="rune.name">
        <div class="rune-color">{{ rune.color+'铭文' }}</div>
        <img class="rune-img" v-lazy="'/static/images/rune/' + rune.name + '.png'" :alt="rune.name"/>
        <div class="rune-name">{{ rune.name }}</div>
        <div class="rune-attr" v-for="(item,key) in JSON.parse(rune.normalAttr)" :key="key"
          >{{ key + ': ' + item }}</div>
        <div class="rune-category"> {{"推荐属性："+rune.category}}</div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SumRune',
  beforeMount() {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      summoner: 'current_summoner',
      runeList: 'current_rune'
    })
  },
  methods: {}
};
</script>

<style scoped>
.sum-box {
  width: 25%;
  height: 100%;
  padding: 2%;
  float: left;
}

.all-rune-box {
  width: 66%;
  padding: 2%;
  height: 100%;
  float: right;
}

.title {
  color: darkorange;
  font-size: 25px;
  font-weight: bold;
  padding: 2%;
  text-align: left;
}

.sum-img {
  width: 40%;
  border-radius: 50%;
}

.sum-title {
  font-size: 18px;
  font-weight: bold;
  color: darkcyan;
  padding: 3%;
  margin: 4%;
  vertical-align: center;
}

.sum-cd,
.sum-desc {
  color: blueviolet;
  margin: 2%;
  padding: 3%;
  text-align: left;
}

.rune-box {
  width: 30%;
  height: 100%;
  display: inline-block;
}

.rune-color {
  color: white;
  background-color: rgb(0, 110, 255);
  padding: 1%;
  height: 10%;
  font-weight: bold;
  width: 50%;
  margin-left: 25%;
  vertical-align: top;
  margin-top: 5%;
}

.rune-img {
  display: block;
  width: 50%;
  margin-left: 25%;
  margin-top: 5%;
  height: 40%;
}

.rune-name {
  color: rgb(43, 226, 43);
  padding: 1%;
  margin: 1%;
  height: 10%;
  font-size: 18px;
  font-weight: bold;
}

.rune-attr {
  color: darkcyan;
}

.rune-category {
  color: crimson;
}
</style>
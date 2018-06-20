<template>
  <div>
    <el-container class='header'>
      <el-aside width="30%" height="360" id='aside'>
        <el-card class="uni-color left-box">
          <img class="hero-icon" :src="'/static/images/heros/icon/'+HeroInfo.name+'.png'" :alt="HeroInfo.name"/>
          <div class='hero-info-title'>英雄名称: </div> 
          <div class='hero-info'>{{HeroInfo.name}}</div>
          <div class='hero-info-title'>英雄价格: </div> 
          <div class='hero-info'>{{HeroInfo.price}}</div>
          <div class='hero-info-title'>英雄类型: </div> 
          <div class='hero-info'>{{HeroInfo.type}}</div>
          <div class='hero-info-title'>职业定位: </div> 
          <div class='hero-info'>{{HeroInfo.role}}</div>
        </el-card>
      </el-aside>
      <el-main style="padding: 20px" height="380px" class='uni-color'>
        <el-tabs v-model="activeName" class='hero-info-tabs' >
          <el-tab-pane label="背景故事" name="背景故事">
            <el-card class="story-box">
              <p class='story-section' v-for="section in HeroInfo.story" 
                v-bind:key="section">  {{ section }}</p>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="英雄视频" name="英雄视频">
            <iframe frameborder="0" width="100%" height="360" :src="HeroInfo.videoUrl" allowfullscreen></iframe>
          </el-tab-pane>
          <el-tab-pane label="英雄皮肤" name="英雄皮肤">
            <el-carousel style="height: 360px">
              <el-carousel-item
                  v-for="skin in SkinInfo" :key="skin.name" :label="skin.name">
                <!-- <div class='skin-info'>
                  <p>皮肤价格：{{ skin.price }}</p>
                  <p>皮肤效果：{{ skin.effect }}</p>
                </div> -->
                <img class="skin-image" :src="'/static/images/heros/skin/'+skin.belongTo+'/'+skin.name+'.jpg'" 
                :alt="HeroInfo.name"/>
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>
          <el-tab-pane label="基础属性" name="基础属性">
            <el-card style="padding: 20px; height: 320px" class="uni-color">
                <div class='base-attr' v-for="(item,key) in HeroInfo.baseAttribute" :key="key"
                >{{ key + ':' + item }}</div>
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
    <SkillInfo></SkillInfo>
  </div>
  
</template>
    
<script>
import SkillInfo from './SkillInfo';
import { mapGetters } from 'vuex';

export default {
  name: 'HeroDetailInfo',
  components: {
    SkillInfo
  },
  beforeMount() {
    var pathlist = this.$route.path.split('/');
    var heroName = pathlist[pathlist.length - 1];
    this.$store.dispatch('GetCurrentHero', heroName);
    this.$store.dispatch('GetCurrentSkill', heroName);
    this.$store.dispatch('GetCurrentSkin', heroName);
  },
	data() {
    return {
      activeName: '背景故事',
    }
	},
  computed: {
    ...mapGetters({
      HeroInfo: 'current_hero',
      SkinInfo: 'current_skin',
		})
  },
  methods: {
		
  }
}
</script>

<style scoped>
.hero-icon {
  width: 50%;
  margin: 10%;
}

.left-box {
  height: 99%;
}

.uni-color {
  background-color: rgb(227, 255, 204);
}

.hero-info-title {
  float: left;
  width: 30%;
  /* color: #0099CC; */
  background-color: rgb(51, 22, 180);
  color: white;
  padding: 2%;
  margin: 1%;
}

.hero-info {
  display: inline-block;
  color: rgb(111, 21, 129);
  width: 55%;
  padding: 2%;
  margin: 1%;
}

.skin-image {
  width: 100%;
  /* height: 350px; */
}

.skin-box {
  height: 360px;
}

.skin-info {
  /* display: inline; */
  float: bottom;
}

.story-box {
  height: 320px;
  overflow: auto;
  background-color: rgb(227, 255, 204);
  padding: 2%;
  margin: 1%;
}

.story-section {
  font-size: 13px;
  text-align: left;
}

.base-attr {
  font-size: 15px;
  margin-right: 3%;
  margin-bottom: 3%; 
  background-color: #0099CC; 
  color: white;
  padding: 1%;
  float: left;
  width: 20%;
}


</style>
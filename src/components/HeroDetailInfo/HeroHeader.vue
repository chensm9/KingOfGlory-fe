<template>
	<el-container class='header'>
		<el-aside id='aside'>
			<el-card class="uni-color left-box">
				<img class="hero-icon" v-lazy="'/static/images/heros/icon/'+HeroInfo.name+'.png'" :alt="HeroInfo.name"/>
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
		<el-main id="main" class='uni-color'>
			<el-tabs v-model="activeName" class="all-el-tabs">
				<el-tab-pane label="背景故事" name="背景故事">
					<el-card id="story-box">
						<p class='story-section' v-for="section in HeroInfo.story" 
							v-bind:key="section">  {{ section }}</p>
					</el-card>
				</el-tab-pane>
				<el-tab-pane label="英雄视频" name="英雄视频">
					<iframe class="video" :src="HeroInfo.videoUrl"></iframe>
				</el-tab-pane>
				<el-tab-pane label="英雄皮肤" name="英雄皮肤">
					<el-carousel height="350px">
						<el-carousel-item
								v-for="skin in SkinInfo" :key="skin.name" :label="skin.name">
							<img class="skin-image" v-lazy="'/static/images/heros/skin/'+skin.belongTo+'/'+skin.name+'.jpg'" 
							:alt="HeroInfo.name"/>
						</el-carousel-item>
					</el-carousel>
				</el-tab-pane>
				<el-tab-pane label="基础属性" name="基础属性">
					<el-card class="uni-color base-attr-box">
							<div class='base-attr' v-for="(item,key) in HeroInfo.baseAttribute" :key="key"
							>{{ key + ':' + item }}</div>
					</el-card>
				</el-tab-pane>
			</el-tabs>
		</el-main>
	</el-container>
</template>
    
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HeroHeader',
  beforeMount() {
  },
  data() {
    return {
      activeName: '背景故事',
    };
  },
  computed: {
    ...mapGetters({
      HeroInfo: 'current_hero',
      SkinInfo: 'current_skin',
    })
  }
};
</script>

<style scoped>
#aside {
	min-width: 30%;
	height: 100%;
}

#main {
	height: 100%;
}

.left-box {
  height: 99%;
}

.hero-icon {
  width: 40%;
  margin: 2% 0 10% 20%;
	display: block;
}

.hero-info-title {
  float: left;
  width: 25%;
  background-color: rgb(255, 0, 119);
  color: white;
	font-size: 15px;
  padding: 2%;
  margin: 1% 1% 1% 6%;
}

.hero-info {
  display: inline-block;
  color: rgb(111, 21, 129);
  width: 50%;
  padding: 2%;
	font-size: 15px;
	font-weight: bold;
  margin: 2% 2% 2% 1%;
}

.uni-color {
  background-color: rgb(227, 255, 204);
}

.all-el-tabs{
	height: 95%;
}

div.el-tabs__header {
	height: 10%;
}

div.el-tabs__content {
	height: 90%;
}

div.el-tab-pane {
	height: 100%;
}

.video {
	height: 350px;
	width: 95%;
}

.skin-image {
  width: 100%;
	/* height: 100%; */
}

.skin-box {
  height: 360px;
}

#story-box {
  height: 300px;
  overflow: auto;
  background-color: rgb(227, 255, 204);
  padding: 2%;
  margin: 1%;
}

.story-section {
  font-size: 14px;
  text-align: left;
}

.base-attr-box {
	height: 350px;
	overflow: auto;
}

.base-attr {
  font-size: 15px;
  margin-right: 2.5%;
  margin-bottom: 2.5%; 
  background-color: #0099CC; 
	font-weight: bold;
	font-size: 14px;
  color: white;
  padding: 1%;
  float: left;
  width: 20%;
}


</style>
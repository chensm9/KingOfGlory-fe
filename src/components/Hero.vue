<template>
	<el-card class='box-card' shadow='always'
		:style="{backgroundColor: 'rgb(225, 223, 231)' }"
		:body-style="{ padding: '20px'}">
		<div slot="header" class="option-box"
				v-for="tab in headerlist"
				v-bind:key="tab">
			<el-button disabled class="titleButton" >{{ tab }}</el-button>
      <el-radio-group class="option-ul" v-model="headerlistMap[tab]" @change="autoFilter">
        <el-radio :label="option" class="option-li"
					border
          v-for="option in Options[tab]" 
          v-bind:key="option">{{ option }}</el-radio>
      </el-radio-group>
		</div>

		<ul class="icon-ul">
			<li class="iconitem"
				v-bind:key="hero"
				v-for="hero in displayHeroInfo">
				<el-popover
					enterable='false'
					placement="right-start"
					visible-arrow='false'
					width="200"
					trigger="hover">
					<div class="simpleDetail">
						<img class="DetailIcon" v-lazy="'/static/images/heros/icon/'+hero.name+'.png'" :alt="hero.name"/>
						<p class='popover-p'>英雄名称： {{hero.name}}</p>
						<p class='popover-p'>总价： {{hero.price}}</p>
						<p class='popover-p'>英雄职业：{{hero.role}}</p>
						<p class='popover-p'>英雄定位：{{hero.type}}</p>
					</div>
					<a slot="reference" class="heroLink" :href="'#/hero/'+hero.name">
						<img class="iconimg" v-lazy="'/static/images/heros/icon/'+hero.name+'.png'" :alt="hero.name"/>
						<p class="iconitem-name">{{hero.name}}</p>
					</a>
				</el-popover>
			</li>
		</ul>

	</el-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'heroInfo',
  beforeMount() {
    this.$store.dispatch('GetAllHeroInfo').then(() => {
      this.displayHeroInfo = this.AllHeroInfo;
    });
  },
  data() {
    return {
      headerlist: ['职业', '类型', '价格'],
      headerlistMap: {
        职业: '全部',
        类型: '全部',
        价格: '全部'
      },
      Options: {
        职业: ['全部', '坦克', '战士', '刺客', '法师', '射手', '辅助'],
        类型: ['全部', '近战', '远程', '物理', '魔法'],
        价格: ['全部', '18888', '13888', '8888', '5888', '其它']
      },
      displayHeroInfo: []
    };
  },
  computed: {
    ...mapGetters({
      AllHeroInfo: 'all_hero_info'
    })
  },
  methods: {
    autoFilter: function() {
      this.displayHeroInfo = [];
      console.log(this.headerlistMap);
      for (let i = 0; i < this.AllHeroInfo.length; i++) {
        if (
          this.headerlistMap['职业'] !== '全部' &&
          this.AllHeroInfo[i].role.indexOf(this.headerlistMap['职业']) === -1
        ) {
          continue;
        }
        if (
          this.headerlistMap['类型'] !== '全部' &&
          this.AllHeroInfo[i].type.indexOf(this.headerlistMap['类型']) === -1
        ) {
          continue;
        }
        if (
          this.headerlistMap['价格'] === '其它' &&
          this.AllHeroInfo[i].price.indexOf('金币') !== -1
        ) {
          continue;
        } else if (
          this.headerlistMap['价格'] === '8888' &&
          this.AllHeroInfo[i].price.indexOf('18888') !== -1
        ) {
          continue;
        } else if (
          this.headerlistMap['价格'] !== '全部' && this.headerlistMap['价格'] !== '其它' &&
          this.AllHeroInfo[i].price.indexOf(this.headerlistMap['价格']) === -1
        ) {
          continue;
        }
        this.displayHeroInfo.push(this.AllHeroInfo[i]);
      }
    }
  }
};
</script>

<style scoped>
#hero-main {
  width: 100%;
}

p.label {
  display: inline-block;
  vertical-align: middle;
  min-width: 40%;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
}

.option-box {
  height: 50px;
  width: auto;
  padding: 0;
  margin: 1%;
}

.titleButton {
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  background-color: deepskyblue;
  width: 10%;
  height: 80%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  vertical-align: top;
  float: left;
}

.option-ul {
  display: inline-block;
  overflow: hidden;
  width: 85%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.option-li {
  font-size: 16px;
  width: 10%;
  float: left;
  margin: 0;
  margin-left: 3%;
}

.icon-ul {
  width: 100%;
  display: inline-block;
  margin-left: 0;
  padding: 0;
}

img.iconimg {
  width: 100%;
}

.iconitem {
  list-style: none;
  display: inline-block;
  width: 8%;
  margin: 1%;
}

a.heroLink {
  text-decoration: none;
}

p.iconitem-name {
  color: black;
  background-color: aliceblue;
  font-size: 14px;
}

div.simpleDetail {
  width: 100%;
}

.popover-p {
  color: darkorange;
}

img.DetailIcon {
  width: 50%;
  height: 50%;
  display: inline-block;
}

</style>
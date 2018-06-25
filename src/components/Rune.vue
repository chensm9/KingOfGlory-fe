<template>
	<div id="Rune-main">
    <div id="Rune-selection">
      <div id="select-box">
        <p class="select-title">铭文颜色</p>
        <div class="el-select-box">
          <el-select v-model="runecolor">
            <el-option
              v-for="item in runecolorlist"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <p class="select-title">铭文等级</p>
        <div class="el-select-box">
          <el-select v-model="runelevel">
            <el-option
              v-for="item in runelevellist"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <p class="select-title">铭文类型</p>
        <div class="el-select-box">
          <el-select v-model="runetype">
            <el-option
              v-for="item in runetypelist"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <el-button id="clearButton" type="primary">一键清空铭文</el-button>
      </div>

      <div id="content-box">
        <ul class="icon-ul">
          <li class="iconitem"
            v-bind:key="rune"
            v-for="rune in displayRuneInfo">
            <el-popover
              placement="right-start"
              width="250"
              trigger="hover">
              <div class="simpleDetail">
                <img class="DetailIcon" v-lazy="'/static/images/rune/'+rune.name+'.png'" :alt="rune.name"/>
                <div class='rune-title'>铭文名称：</div> <div class='rune-info'>{{ rune.name }}</div>
                <div class='rune-title'>铭文等级：</div> <div class='rune-info'>{{ rune.level }}</div>
                <div class='rune-title'>通用属性：</div> 
                <div class='rune-info' 
                  v-for="(item,key) in JSON.parse(rune.normalAttr)" :key="key">
                  {{ key+':'+item }}
                </div>
                <div class='rune-title'>冒险属性：</div> 
                <div class='rune-info' 
                  v-for="(item,key) in JSON.parse(rune.riskAttr)" :key="key">
                  {{ key+':'+item }}
                </div>
              </div>
              <a slot="reference" class="runeLink" href="/">
                <img class="iconimg" v-lazy="'/static/images/rune/'+rune.name+'.png'" :alt="rune.name"/>
                <p class="iconitem-name">{{rune.name}}</p>
              </a>
            </el-popover>
          </li>
        </ul>
      </div>

    </div>

	</div>
</template>

<script>
import Axios from 'axios';

export default {
	data() {
		return {
      AllRuneInfo: [],
      displayRuneInfo: [],
      runecolor: "全部",
      runelevel: "全部",
      runetype:  "全部",
      runecolorlist: ["全部", "红", "绿", "蓝"],
      runelevellist: ["全部", "一级", "二级", "三级", "四级", "五级"],
      runetypelist:  ["全部", "攻击", "生命", "防御", "功能", "吸血", "攻速", "暴击", "穿透"],
      iconlist: ['一闪.png', '吸收.png', '应激.png', '拯救.png', '洞察.png', '痛苦.png', '致命.png', '长生.png', '专注.png', '回声.png', '异变.png', '振奋.png', '活力.png', '白刃.png', '荆棘.png', '阳炎.png', '传承.png', '圣人.png', '强健.png', '收割.png', '渴血.png', '破甲.png', '虚空.png', '隐匿.png', '侵蚀.png', '均衡.png', '心眼.png', '敬畏.png', '滋生.png', '破魔.png', '衰败.png', '震击.png', '信念.png', '坚壁.png', '怜悯.png', '斗志.png', '潜能.png', '神速.png', '调和.png', '霸者.png', '兽痕.png', '复苏.png', '急救.png', '无双.png', '灵山.png', '祸源.png', '贪婪.png', '风怒.png', '冥想.png', '夺萃.png', '恐惧.png', '无畏.png', '狂热.png', '穿刺.png', '贯穿.png', '风暴.png', '凶兆.png', '奇袭.png', '惩戒.png', '暴戾.png', '狩猎.png', '突进.png', '践踏.png', '饮血.png', '刚毅.png', '宿命.png', '愈合.png', '梦魇.png', '猛攻.png', '繁荣.png', '转换.png', '鹰眼.png', '刹那.png', '崩坏.png', '感应.png', '正义.png', '献祭.png', '红月.png', '轮回.png', '勇气.png', '幻盾.png', '憎恶.png', '气数.png', '生长.png', '纷争.png', '野性.png', '吞噬.png', '庇护.png', '戒律.png', '治疗.png', '疾行.png', '绽放.png', '铁躯.png']
    }
	},
  computed: {
  },
  methods: {
  },
  beforeMount() {
    Axios.get('/api/rune')	
      .then((res) => { 				     
        this.AllRuneInfo = res.data;
        this.displayRuneInfo = res.data;
      }, (err) => {
        this.$message.error('请求错误！')
      });
  }
}
</script>

<style scoped>
div#Rune-main {
  width: 100%;
  padding: 0;
}

div#Rune-selection {
  width: 40%;
  float: left;
  margin:0;
}

div#select-box {
  padding: 0;
  margin: 0;
}

div.el-select-box {
  width: 25%;
  padding: 0;
  margin: 0;
  float: left;
  margin-bottom: 2%
}

p.select-title {
  width: 25%;
  padding: 0;
  margin-top: 1%;
  float: left;
}

button#clearButton {
  width: 30%;
  height: 50%;
  float: left;
  margin-left: 5%;
  font-size: 15px;
  /* vertical-align: center */
}

div#content-box {
  height: 500px;
  padding: 0;
}

.icon-ul {
  width: 100%;
  display: inline-block;
	margin-left: 0;
  padding: 0;
  height: 80%;
  overflow: auto;
}

img {
  width: 100%;
	height: 100%;
	border-radius: 50%;
}

.iconitem {
  list-style: none;
  display: inline-block;
	width: 15%;
	margin: 1%;
}

a.runeLink	{
	text-decoration : none
} 

p.iconitem-name {
	color: black;
  background-color:aliceblue;
  font-size: 13px;
}

div.simpleDetail {
	width: 100%;
  /* display: block; */
  float: left;

}

img.DetailIcon {
  width: 30%;
	height: 30%;
	display: block;
}

.rune-title {
  float: left;
  width: 30%;
  margin: 3%;
  padding: 2%;
  text-align: center;
  background-color: blue;
  color: white;
}

.rune-info {
  float: right;
  width: 50%;
  margin: 3%;
  padding: 2%;
  text-align: center;
  color: rgb(138, 12, 143);
}

</style>
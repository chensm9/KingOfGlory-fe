<template>
	<div id='Rune-main'>
    <div id='Rune-selection'>
      <div id="select-box">
        <p class="select-title">铭文颜色</p>
        <div class="el-select-box">
          <el-select v-model="runecolor" @change='handleChange'>
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
          <el-select v-model="runelevel" @change='handleChange'>
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
          <el-select v-model="runetype" @change='handleChange'>
            <el-option
              v-for="item in runetypelist"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <!-- <el-button id="clearButton" type="primary">一键清空铭文</el-button> -->
      </div>

      <div id="content-box">
        <ul class="icon-ul">
          <li class="iconitem"
            v-bind:key="rune"
            v-for="rune in displayRuneInfo">
            <el-popover
              placement="right-start"
              width="250"
              class="popover"
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
              <div slot="reference" class="runeLink">
                <img class="iconimg" v-lazy="'/static/images/rune/'+rune.name+'.png'" :alt="rune.name"/>
                <p class="iconitem-name">{{rune.name}}</p>
              </div>
            </el-popover>
          </li>
        </ul>
      </div>

    </div>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      displayRuneInfo: [],
      runecolor: '全部',
      runelevel: '全部',
      runetype: '全部',
      runecolorlist: ['全部', '红色', '绿色', '蓝色'],
      runelevellist: ['全部', '一级', '二级', '三级', '四级', '五级'],
      runetypelist: [
        '全部',
        '攻击',
        '生命',
        '防御',
        '功能',
        '吸血',
        '攻速',
        '暴击',
        '穿透'
      ]
    };
  },
  computed: {
    ...mapGetters({
      AllRuneInfo: 'all_rune'
    })
  },
  methods: {
    handleChange: function() {
      this.displayRuneInfo = [];
      for (let i = 0; i < this.AllRuneInfo.length; i++) {
        if (
          this.runecolor !== '全部' &&
          this.AllRuneInfo[i].color !== this.runecolor
        ) {
          continue;
        }
        if (
          this.runelevel !== '全部' &&
          this.AllRuneInfo[i].level !== this.runelevel
        ) {
          continue;
        }
        if (
          this.runetype !== '全部' &&
          this.AllRuneInfo[i].category.indexOf(this.runetype) === -1
        ) {
          continue;
        }
        this.displayRuneInfo.push(this.AllRuneInfo[i]);
      }
    }
  },
  beforeMount() {
    this.loading = this.$loading({
      lock: true,
      text: '正在从数据库获取数据中',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    this.$store.dispatch('GetAllRune').then(() => {
      this.displayRuneInfo = this.AllRuneInfo;
      this.loading.close();
    });
  }
};
</script>

<style scoped>
div#Rune-main {
  background-color:rgb(225, 223, 231);
  width: 96%;
  padding: 2%;
}

div#Rune-selection {
  width: 100%;
  margin: 0;
}

div#select-box {
  padding: 0;
  margin: 0;
}

div.el-select-box {
  width: 10%;
  padding: 0;
  margin: 0;
  float: left;
  margin-bottom: 1%;
}

p.select-title {
  width: 10%;
  padding: 0;
  margin-top: 1%;
  color: blueviolet;
  font-weight: bold;
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
  padding: 0;
}

.icon-ul {
  width: 100%;
  display: inline-block;
  margin-left: 0;
  padding: 0;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.iconitem {
  list-style: none;
  display: inline-block;
  width: 8%;
  margin: 1%;
}

.runeLink {
  text-decoration: none;
  display: inline-block;
}

p.iconitem-name {
  color: black;
  background-color: aliceblue;
  font-size: 13px;
}

div.simpleDetail {
  width: 100%;
  /* display: block; */
  float: left;
  background-color: blanchedalmond;
}

img.DetailIcon {
  width: 40%;
  height: 40%;
  margin-left: 30%;
  margin-bottom: 5%;
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
  font-weight: bold;
}
</style>
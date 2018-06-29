<template>
	<el-card class="box-card" shadow="always"
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
    <div slot="header" class="option-box" >
      <el-input class="input-box"
        placeholder="请输入装备名称"
        v-model="inputName"
        prefix-icon="el-icon-search"
        clearable>
      </el-input>
      <el-button class="input-button" @click="inputChange">确定搜索</el-button>
    </div>


		<ul class="icon-ul">
			<li class="iconitem"
				v-bind:key="equip"
				v-for="equip in displayEquipInfo">
				<el-popover
					placement="right-start"
					width="300"
					trigger="hover">
					<div class="simpleDetail">
						<img class="DetailIcon" v-lazy="'/static/images/equip/'+equip.name+'.png'" :alt="equip.name"/>
						<p class='popover-p'>名称：{{equip.name}}</p>
						<p class='popover-p'>价格：{{equip.price}}</p>
            <div class='popover-p2' v-for="(value, key) in JSON.parse(equip.baseAttr)" :key='key'>
              {{key+':'+value}}
            </div>
						<p class='popover-p2' v-for="item in JSON.parse(equip.equipSkill)" :key="item">{{item}}</p> 
					</div>
					<a slot="reference" class="equipLink" :href="'#/equip/'+equip.name">
						<img class="iconimg" v-lazy="'/static/images/equip/'+equip.name+'.png'" :alt="equip.name+'.png'"/>
						<p class="iconitem-name">{{equip.name}}</p>
					</a>
				</el-popover>
			</li>
		</ul>

	</el-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  beforeMount() {
    this.$store.dispatch('GetAllEquip').then(() => {
      this.displayEquipInfo = this.AllEquipInfo;
    });
  },
  data() {
    return {
      headerlist: ['类型', '层次', '攻击属性', '防御属性'],
      headerlistMap: {
        类型: '全部',
        层次: '全部',
        攻击属性: '全部',
        防御属性: '全部'
      },
      Options: {
        类型: ['全部', '攻击', '法术', '防御', '移动', '打野'],
        层次: ['全部', '小件', '中件', '大件'],
        攻击属性: [
          '全部',
          '物理攻击',
          '暴击',
          '攻击速度',
          '物理吸血',
          '法术攻击'
        ],
        防御属性: ['全部', '最大生命', '物理防御', '冷却缩减', '移速']
      },
      displayEquipInfo: [],
      inputName: ''
    };
  },
  computed: {
    ...mapGetters({
      AllEquipInfo: 'all_equip'
    })
  },
  methods: {
    autoFilter: function() {
      this.displayEquipInfo = [];
      for (let i = 0; i < this.AllEquipInfo.length; i++) {
        if (
          this.headerlistMap['类型'] !== '全部' &&
          this.AllEquipInfo[i].category.indexOf(this.headerlistMap['类型']) === -1
        ) {
          continue;
        }
        if (
          this.headerlistMap['层次'] !== '全部' &&
          this.AllEquipInfo[i].level.indexOf(this.headerlistMap['层次']) === -1
        ) {
          continue;
        }
        if (
          this.headerlistMap['攻击属性'] !== '全部' &&
          this.AllEquipInfo[i].attackAttr.indexOf(
            this.headerlistMap['攻击属性']
          ) === -1
        ) {
          continue;
        }
        if (
          this.headerlistMap['防御属性'] !== '全部' &&
          this.AllEquipInfo[i].defenseAttr.indexOf(
            this.headerlistMap['防御属性']
          ) === -1
        ) {
          continue;
        }
        this.displayEquipInfo.push(this.AllEquipInfo[i]);
      }
    },
    inputChange: function() {
      this.displayEquipInfo = [];
      for (let i = 0; i < this.AllEquipInfo.length; i++) {
        if (this.AllEquipInfo[i].name.indexOf(this.inputName) !== -1) {
          this.displayEquipInfo.push(this.AllEquipInfo[i]);
        }
      }
    }
  }
};
</script>

<style scoped>
#equip-main {
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

input {
  vertical-align: middle;
  width: 20%;
  height: auto;
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
  background-color: #ff33cc;
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
  list-style: none;
  width: 11%;
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

img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.iconitem {
  list-style: none;
  display: inline-block;
  width: 7%;
  margin: 1%;
}

a.equipLink {
  text-decoration: none;
}

p.iconitem-name {
  color: black;
  background-color: aliceblue;
  font-size: 13px;
}

div.simpleDetail {
  width: 100%;
}

.popover-p {
  color: darkorange;
  font-weight: bold;
}

.popover-p2 {
  color: purple;
}

img.DetailIcon {
  width: 30%;
  height: 30%;
  display: inline-block;
}
 
.input-box {
  width: 20%;
  float: left;
}

.input-button {
  background-color:salmon;
  color: white;
  float: left;
  margin-left: 3%;
}

</style>
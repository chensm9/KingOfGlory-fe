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

		<ul class="icon-ul">
			<li class="iconitem"
				v-bind:key="equip"
				v-for="equip in displayEquipInfo">
				<el-popover
					placement="right-start"
					width="350"
					trigger="hover">
					<div class="simpleDetail">
						<img class="DetailIcon" v-lazy="'/static/images/equip/'+equip.name+'.png'" :alt="equip.name"/>
						<p>{{ equip.name }}</p>
						<p>价格： {{equip.level}}</p>
						<p>属性： {{equip.baseAttr}}</p>
						<p>{{equip.equipSkill}}</p> 
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
import Axios from 'axios'
export default {
	beforeMount() {
    Axios.get('/api/equip') // 将信息发送给后端
      .then((res) => { // axios返回的数据都在res.data里
        this.AllEquipInfo = res.data;
        this.displayEquipInfo = res.data;
      }, (err) => {
        this.$message.error('请求错误！')
      })
  },
	data() {
		return {
			headerlist: ['类型', '层次', '攻击属性', '防御属性'],
			headerlistMap: {
				'类型': '全部', 
				'层次': '全部', 
				'攻击属性': '全部',
				'防御属性': '全部'
			},
			Options:{
				'类型': ['全部', '攻击', '法术', '防御', '移动', '打野'],
				'层次': ['全部', '小件', '中件', '大件'],
				'攻击属性': ['全部', '物理攻击', '暴击', '攻击速度', '物理吸血', '法术攻击'],
				'防御属性': ['全部', '最大生命', '物理防御', '冷却缩减', '移速']
			},
			AllEquipInfo: [],
			displayEquipInfo: []
		}
	},
  computed: {
  },
	methods: {
		autoFilter: function() {
			this.displayEquipInfo = [];
			console.log(this.headerlistMap)
			for (let i = 0; i < this.AllEquipInfo.length; i++) {
				if (this.headerlistMap['类型'] != '全部'
						&&this.AllEquipInfo[i].category.indexOf(this.headerlistMap['类型']) == -1)
					continue;
				if (this.headerlistMap['层次'] != '全部'
						&&this.AllEquipInfo[i].level.indexOf(this.headerlistMap['层次']) == -1)
					continue;
				if (this.headerlistMap['攻击属性'] != '全部'
						&&this.AllEquipInfo[i].attackAttr.indexOf(this.headerlistMap['攻击属性']) == -1)
					continue;
				if (this.headerlistMap['防御属性'] != '全部'
					&&this.AllEquipInfo[i].defenseAttr.indexOf(this.headerlistMap['防御属性']) == -1)
				continue;
				this.displayEquipInfo.push(this.AllEquipInfo[i]);
    	}
    }
  }
}
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
	background-color:#FF33CC;
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

a.equipLink	{
	text-decoration : none
} 

p.iconitem-name {
	color: black;
  background-color:aliceblue;
  font-size: 13px;
}

div.simpleDetail {
	width: 100%;
}

img.DetailIcon {
  width: 30%;
	height: 30%;
	display: inline-block;
}
</style>
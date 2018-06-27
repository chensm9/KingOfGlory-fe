<template>
  <div class="main">
    <el-card class = 'detail'>
      <div slot="header" class="title">
        <span>装备详细信息</span>
      </div>
      <div v-if="equip != null">
        <div class="main-box">
          <img class="equip-img" :src="'/static/images/equip/'+equipName+'.png'" :alt="equipName"/>
          <div class="equip-title">装备名称:</div>
          <div class="equip-name">{{equip.name}}</div>
          <div class="equip-title">装备价格:</div>
          <div class="equip-price">{{equip.price}}</div>
        </div>
        <div class="equip-title2">基本属性</div>
        <p class="baseAttr" v-if="equip.baseAttr != undefined"
          v-for="(item, key) in JSON.parse(equip.baseAttr)" :key="key"
            >{{ key + ': ' + item }}</p>
        <div class="equip-title2" v-if="equip.equipSkill != '[]'">装备技能</div>
        <p class="equip-skill" v-for="skill in JSON.parse(equip.equipSkill)" :key="skill"
            >{{skill}} </p>
      </div>
    </el-card>

    <el-card class='composeby'>
      <div slot="header" class="title">
        <span>合成所需物品</span>
      </div>
      <div>
        <a slot="reference" class="equipLink"
            v-for="item in JSON.parse(equip.composeBy)" :key="item"
            :href="'#/equip/'+item">
          <img class="iconimg" v-lazy="'/static/images/equip/'+item+'.png'" :alt="item"/>
          <p class="iconitem-name">{{item}}</p>
        </a>
      </div>
    </el-card>
    <el-card class='composeto'>
      <div slot="header" class="title">
        <span>可合成物品</span>
      </div>
      <div>
        <a slot="reference" class="equipLink" 
            v-for="item in JSON.parse(equip.composeTo)" :key="item"
            :href="'#/equip/'+item">
          <img class="iconimg" v-lazy="'/static/images/equip/'+item+'.png'" :alt="item"/>
          <p class="iconitem-name">{{item}}</p>
        </a>
      </div>
    </el-card>

    <el-card class = 'same-equip'>
      <div slot="header" class="title">
        <span>同类装备</span>
      </div>
      <div>
        <a slot="reference" class="same-equip-link" 
            v-for="item in same_equip" :key="item"
            :href="'#/equip/'+item.name">
          <img class="iconimg" v-lazy="'/static/images/equip/'+item.name+'.png'" :alt="item.name"/>
          <p class="iconitem-name">{{item.name}}</p>
        </a>
      </div>
    </el-card>
  </div>
</template>
    
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'EquipDetail',
  components: {},
  beforeMount() {
    var pathlist = this.$route.path.split('/');
    var equipName = pathlist[pathlist.length - 1];
    this.equipName = decodeURI(equipName);
    this.$store.dispatch('GetCurrentEquip', equipName);
  },
  data() {
    return {
      equipName: ''
    };
  },
  computed: {
    ...mapGetters({
      equip: 'current_equip',
      same_equip: 'same_equip'
    })
  },
  methods: {
    fetchData: function() {
      var pathlist = this.$route.path.split('/');
      var equipName = pathlist[pathlist.length - 1];
      this.equipName = decodeURI(equipName);
      this.$store.dispatch('GetCurrentEquip', equipName);
    }
  },
  created() {
    var self = this;
    self.fetchData();
  },
  watch: {
    $route: 'fetchData'
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  padding: 0;
  margin: 0;
}

.main-box {
  display: block;
}

.equip-img {
  width: 10%;
  border-radius: 50%;
  margin: 2%;
  margin-left: 45%;
  display: block;
}

.equip-title {
  width: 10%;
  padding: 1%;
  margin-top: 3%;
  display: inline-block;
}

.equip-name,
.equip-price {
  width: 10%;
  padding: 1%;
  color: darkturquoise;
  font-weight: bold;
  font-size: 18px;
  display: inline-block;
}

.equip-title2 {
  width: 10%;
  padding: 1%;
  margin-top: 2%;
  /* margin-left: 30%; */
  font-size: 20px;
  color: indigo;
  display: inline-block;
}

.baseAttr {
  color: darkgoldenrod;
  text-align: center;
}

p.equip-skill {
  display: block;
  color: darkgoldenrod;
  text-align: center;
}

.title {
  color: darkorange;
  font-size: 19px;
  font-weight: bold;
  padding: 2%;
  text-align: left;
}

a.equipLink {
  text-decoration: none;
  width: 9%;
  float: left;
  margin: 1%;
}

p.iconitem-name {
  color: black;
  background-color: aliceblue;
  font-size: 13px;
}

.iconimg {
  width: 80%;
  height: 80%;
  border-radius: 50%;
}

a.same-equip-link {
  text-decoration: none;
  width: 9%;
  float: left;
  margin: 1%;
}

.bottom-box {
  width: 100%;
  display: block;
}
</style>
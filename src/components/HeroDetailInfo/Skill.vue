<template>
  <el-container>
    <el-card class='all-skill-box'>
      <div slot="header" class="title">
        <span>技能介绍</span>
      </div>
      <el-radio-group v-model="curSkillName" @change="handleChange">
        <el-radio-button class="skill-button"
            v-for="skill in skillInfo"
            :label="skill.name"
            :key="skill.name">
          <img class="skill-icon" v-lazy="'/static/images/heros/skill/'
            + skill.belongTo+'/'+skill.name.replace('/','|')+'.png'" :alt="skill.name"/>
        </el-radio-button>
      </el-radio-group>
      <div>
        <div class="skill-title">{{ select_skill.name }}</div>
        <div class="skill-title">{{ select_skill.type }}</div>
      </div>
      <div class="skill-desc">{{ select_skill.effect }}</div>
    </el-card>

    <el-card class='right-box'>
      <div slot="header" class="title">
        <span>技能加点</span>
      </div>
      <div>
        <div class="sp-skill" v-if="firstSkill != ''">
          <img class="sp-skill-icon" v-lazy="'/static/images/heros/skill/'
            +select_skill.belongTo+'/'+firstSkill.replace('/','|')+'.png'" :alt="firstSkill"/>
          <div class="sp-skill-title">主升：{{firstSkill}}</div>
        </div>
        <div class="sp-skill" v-if="secondSkill != ''">
          <img class="sp-skill-icon" v-lazy="'/static/images/heros/skill/'
            +select_skill.belongTo+'/'+secondSkill.replace('/','|')+'.png'" :alt="secondSkill"/>
          <div class="sp-skill-title">副升：{{secondSkill}}</div>
        </div>
      </div>
    </el-card>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SkillInfo',
  beforeMount() {
    var pathlist = this.$route.path.split('/');
    var heroName = pathlist[pathlist.length - 1];
    this.$store.dispatch('GetCurrentSkill', heroName).then(() => {
      this.init();
    });
  },
  data() {
    return {
      select_skill: {},
      curSkillName: '',
      firstSkill: '', // 主加技能
      secondSkill: '' // 副加技能
    };
  },
  computed: {
    ...mapGetters({
      skillInfo: 'current_skill'
    })
  },
  methods: {
    handleChange: function() {
      for (var i = 0; i < this.skillInfo.length; i++) {
        if (this.skillInfo[i].name === this.curSkillName) {
          this.select_skill = this.skillInfo[i];
          break;
        }
      }
    },
    init: function() {
      this.curSkillName = this.skillInfo[0].name;
      this.select_skill = this.skillInfo[0];
      for (var i = 0; i < this.skillInfo.length; i++) {
        if (this.skillInfo[i].mainDeputy === '主升') {
          this.firstSkill = this.skillInfo[i].name;
        } else if (this.skillInfo[i].mainDeputy === '副升') {
          this.secondSkill = this.skillInfo[i].name;
        }
      }
    }
  }
};
</script>

<style scoped>
.all-skill-box {
  width: 65%;
  height: 100%;
  background-color: lavenderblush;
  padding: 1%;
}

.right-box {
  width: 35%;
  height: 100%;
  background-color: lavenderblush;
  padding: 1%;
}

.title {
  color: darkorange;
  font-size: 25px;
  font-weight: bold;
  padding: 2%;
  text-align: left;
}

.skill-button {
  width: 18%;
  margin: 1%;
  text-align: center;
}

.skill-icon {
  width: 100%;
  border-radius: 50%;
}

.skill-title {
  display: inline-block;
  width: 20%;
  margin: 3%;
  margin-bottom: 2%;
  padding: 1%;
  background-color: rgb(51, 22, 180);
  color: white;
  /* font-size: 13px; */
}

.skill-desc {
  display: block;
  padding: 1%;
  height: 50%;
  width: 100%;
  text-align: left;
  font-size: 14px;
  color: blue;
}

.sp-skill {
  width: 40%;
  float: left;
  margin: 5%;
  margin-top: 16%;
}

.sp-skill-icon {
  width: 80%;
  margin: 2%;
}

.sp-skill-title {
  font-size: 13px;
  background-color: rgb(51, 22, 180);
  color: white;
  padding: 3%;
  margin: 4%;
  margin-top: 20%;
  width: 90%;
  vertical-align: center;
}
</style>
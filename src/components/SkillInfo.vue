<template>
  <div>
    <el-radio-group v-model="curSumName" @change="handleChange">
      <el-radio-button class="skill-button"
          v-for="skill in skillInfo"
          :label="skill.name"
          :key="skill.name">
        <img class="skill-icon" :src="'/static/images/heros/skill/'
          + skill.belongTo+'/'+skill.name+'.png'" :alt="skill.name"/>
      </el-radio-button>
    </el-radio-group>
    <!-- <p :key="skill.name" v-for="skill in skillInfo">{{ skill.name }}</p> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SkillInfo',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters({
      skillInfo: 'current_skill',
		})
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>
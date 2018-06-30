<template>
  <div id='main'>
    <hero-header id='header'></hero-header>
    <skill id='skill'></skill>
    <sum-rune id='sum-rune'></sum-rune>
    <collocation id='collocation'></collocation>
  </div>
</template>
    
<script>
import Skill from './HeroDetailInfo/Skill';
import SumRune from './HeroDetailInfo/SumRune';
import HeroHeader from './HeroDetailInfo/HeroHeader';
import Collocation from './HeroDetailInfo/Collocation';
import { mapGetters } from 'vuex';

export default {
  name: 'HeroDetailInfo',
  components: {
    HeroHeader,
    Skill,
    SumRune,
    Collocation
  },
  beforeMount() {
    this.loading = this.$loading({
      lock: true,
      text: '正在从数据库获取数据中',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    var pathlist = this.$route.path.split('/');
    var heroName = pathlist[pathlist.length - 1];

    // 获取当前英雄、当前英雄皮肤、当前英雄铭文、召唤师技能和装备搭配
    this.$store.dispatch('GetCurrentHero', heroName).then(() => {
      this.$store.dispatch(
        'GetSummonerByName',
        this.current_hero.summonerSpell
      );
      this.$store.dispatch('GetCurrentRune', this.current_hero.runes);
      this.$store.dispatch('GetCurrentCollocation', this.current_hero.name);
      var h = document.documentElement.clientHeight;
      document.getElementById('main').style.height = h * 2.5 + 'px';
      this.loading.close();
    });
    this.$store.dispatch('GetCurrentSkin', heroName);
  },
  data() {
    return {
      loading: null
    };
  },
  computed: {
    ...mapGetters({
      current_hero: 'current_hero'
    })
  },
  methods: {}
};
</script>

<style scoped>
#header {
  height: 30%;
}

#skill {
  height: 25%;
}

#sum-rune {
  height: 25%;
}

#collocation {
  height: 35%;
}
</style>
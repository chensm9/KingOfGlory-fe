<template>
  <div id='container'>
    <el-pagination class="pagination"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[6, 12, 24, 36, 48]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount">
    </el-pagination>
    <div class='all-skin-box'>
			<li class="skin-box"
				v-for="skin in current_list"
        v-bind:key="skin.name">
          <img class="skinImg" v-lazy="'/static/images/heros/skin/'+skin.belongTo+'/'+skin.name+'.jpg'" :alt="skin.name"/>
          <p>{{skin.belongTo+' ~ '+skin.name}}</p>
          <p>{{skin.price+" "+skin.effect}}</p>
			</li>
		</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Skin',
  beforeMount() {
    this.$store.dispatch('GetAllSkin').then(() => {
      this.init();
    });
  },
  data() {
    return {
      totalCount: 0,
      current_list: [],
      pageSize: 6,
      currentPage: 1,
      // 搜索条件
      criteria: ''
    };
  },
  computed: {
    ...mapGetters({
      allSkin: 'all_skin'
    })
  },
  methods: {
    // 初始化
    init: function() {
      var h = document.documentElement.clientHeight;
      document.getElementById('container').style.height = h * 0.9 + 'px';
      this.totalCount = this.allSkin.length;
      for (let i = 0; i < this.pageSize; i++) {
        this.current_list.push(this.allSkin[i]);
      }
    },

    // 每页显示数据量变更
    handleSizeChange: function(val) {
      this.pageSize = val;
      this.loadData();
    },

    // 页码变更
    handleCurrentChange: function(val) {
      this.currentPage = val;
      this.loadData();
    },

    // 更新数据
    loadData: function() {
      this.current_list = [];
      let temp = this.allSkin.length - this.pageSize * (this.currentPage - 1);
      temp = temp > this.pageSize ? this.pageSize : temp;
      for (let i = 0; i < temp; i++) {
        this.current_list.push(
          this.allSkin[i + this.pageSize * (this.currentPage - 1)]
        );
      }
    }
  }
};
</script>

<style scoped>
#container {
  width: 100%;
  height: 1000px;
}

.all-skin-box {
  display: block;
  width: 100%;
  height: 95%;
  padding: 1%;
}

.skin-box {
  list-style: none;
  float: left;
  width: 31%;
  height: 40%;
  margin: 1%;
  margin-top: 3%;
}

.skinImg {
  width: 100%;
  height: 80%;
}

p {
  height: 2%;
  padding: 0;
  color: darkorange;
  font-weight: bold;
}

.pagination {
  display: block;
  margin-top: 2%;
}
</style>
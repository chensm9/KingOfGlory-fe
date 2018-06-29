<template>
  <div id='container'>
    <div>
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
      <el-input class="input-box"
          placeholder="搜索皮肤"
          v-model="inputName"
          prefix-icon="el-icon-search"
          clearable>
      </el-input>
      <el-button class="input-button" @click="inputChange">确定</el-button>
    </div>
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
    this.loading = this.$loading({
      lock: true,
      text: '正在从数据库获取数据中',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    this.$store.dispatch('GetAllSkin').then(() => {
      this.init();
      this.loading.close();
    });
  },
  data() {
    return {
      totalCount: 0,
      current_list: [],
      pageSize: 6,
      currentPage: 1,
      // 搜索条件
      inputName: '',
      select_skin: [],
      loading: null
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
      document.getElementById('container').style.height = h * 1 + 'px';
      this.totalCount = this.allSkin.length;
      this.select_skin = this.allSkin;
      for (let i = 0; i < this.pageSize; i++) {
        this.current_list.push(this.allSkin[i]);
      }
    },

    inputChange: function() {
      this.select_skin = [];
      for (let i = 0; i < this.allSkin.length; i++) {
        if (this.allSkin[i].name.indexOf(this.inputName) !== -1 ||
            this.allSkin[i].belongTo.indexOf(this.inputName) !== -1) {
          this.select_skin.push(this.allSkin[i]);
        }
      }
      this.totalCount = this.select_skin.length;
      this.currentPage = 1;
      this.loadData();
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
      let temp = this.select_skin.length - this.pageSize * (this.currentPage - 1);
      temp = temp > this.pageSize ? this.pageSize : temp;
      for (let i = 0; i < temp; i++) {
        this.current_list.push(
          this.select_skin[i + this.pageSize * (this.currentPage - 1)]
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
  width: 70%;
  float: left;
}

.input-box {
  width: 16%;
  display: inline-block;
  margin-top: 2%;
}

.input-button {
  width: 8%;
  margin-top: 2%;
  margin-left: 2%;
  background-color:rgb(88, 123, 156);
  color: white;
  font-weight: bold;
}
</style>
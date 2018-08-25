<template>
    <div class="charts-pannel">
        <ul>
            <li v-for="el in list" 
            :class="el.type" 
            @click="$store.commit('pushLayout', el.type)">
                <i class="el-icon-date"></i>
                {{el.name}}
            </li>
        </ul>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      list: [
        {
          type: "line",
          name: "折线图"
        },
        {
          type: "histogram",
          name: "柱状图"
        },
        {
          type: "bar",
          name: "条形图"
        },
        {
          type: "pie",
          name: "饼图"
        },
        {
          type: "ring",
          name: "环图"
        },
        {
          type: "waterfall",
          name: "瀑布图"
        },
        {
          type: "funnel",
          name: "漏洞图"
        },
        {
          type: "radar",
          name: "雷达图"
        },
        {
          type: "scatter",
          name: "散点图"
        }
      ]
    };
  },

  methods:{
      ...mapMutations['pushLayout']
  }
};
</script>
<style>
.charts-pannel{  position: absolute;
  width: 236px;
  left: 0;
  top: 0;}
  .charts-pannel li{width: 78.66px;float: left;text-align: center;cursor: pointer;font-size: 14px;padding: 20px 0;}
  .charts-pannel li:hover{background: #ddd;}
  .charts-pannel li i{display: block;font-size: 20px;}
</style>
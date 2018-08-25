<template>
  <div class="container">
      <charts-layout></charts-layout>
      <div class="tool">
        <data-set-pannel v-show="current===0"></data-set-pannel>
        <charts-pannel v-show="current===1"></charts-pannel>
        <property-pannel v-show="current===2"></property-pannel>
        <ul class="tool-tab">
          <li @click="current=0" :class="{on:current===0}">数据集</li>
          <li @click="current=1" :class="{on:current===1}">图表</li>
          <li @click="current=2" :class="{on:current===2}">属性</li>
        </ul>
      </div>
  </div>
</template>
<script>
import ChartsLayout from "./chartsLayout.vue";
import DataSetPannel from './datasetPannel.vue'
import ChartsPannel from './chartsPannel.vue'
import PropertyPannel from './propertyPannel.vue'
// import {mapState} from 'vuex'
export default {
  components:{
    ChartsLayout,
    DataSetPannel,
    ChartsPannel,
    PropertyPannel
  },

  data(){
    return {
     
    }
  },
  computed:{
    current:{
      get(){
        return this.$store.state.currentTabIndex
      },
      set(val){
        this.$store.commit('setCurrentTabIndex', val)
      }
    }
  }
};
</script>
<style>
.tool{right: 0;top: 0;bottom: 0;width: 300px;background: #eee;height: 100%;position: fixed;}
.tool-tab{position: absolute;background: #0C0E1D;width: 64px;height: 100%;right: 0;font-size: 12px;color: #999;font-size: 14px;}
.tool-tab li{height: 64px;line-height: 64px;text-align: center;cursor: pointer;}
.tool-tab li:hover{background: #242440;}
.tool-tab li.on{color: #999;background: #eee;}
</style>

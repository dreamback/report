<template>
    <div class="charts-layout" :style="$store.state.style.gridLayout">
        <grid-layout
            :layout="layout"
            :col-num="12"
            :row-height="200"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true">
                <grid-item v-for="(el, index) in layout"
                    :style="$store.state.style.gridItem"
                    @click.native="activeItem(el, index)"
                    @resized="resized(el.i)"
                    :key="index"
                    :x="el.x"
                    :y="el.y"
                    :w="el.w"
                    :h="el.h"
                    :i="el.i">
                    <div class="title">{{el.chart.title||'请设置标题'}}</div>
                    <ve-chart 
                    v-if="el.chart.select" 
                    :ref="'vchart_'+el.i"
                    :height="el.h*200+'px'"
                    :data="dataset[el.chart.select.id].data" 
                    :settings="el.chart.settings"></ve-chart>
                </grid-item>
        </grid-layout>
    </div>
</template>
<script>
const gridLayout = require('../utils/gridLayout.js').VueGridLayout
import {mapState} from 'vuex'
export default {
    components:{
        GridLayout:gridLayout.GridLayout,
        GridItem: gridLayout.GridItem
    },
    data(){
        return {}
    },

    computed:{
        ...mapState({
            layout: state => state.layout || [],
            dataset: state => state.dataset || {}
        })
    },

    methods:{
        activeItem(el, index){
            this.$store.commit('setCurrentTabIndex', 2)
            this.$store.commit('setCurrentLayoutIndex', index)
        },
        resized(id){
            setTimeout(_=>{
                this.$refs[`vchart_${id}`][0].echarts.resize()
            },100)
        }
    }
}
</script>
<style>
.charts-layout {
  position: absolute;
  left: 0;
  right: 300px;
  top: 0;
  height: 100%;
}
.vue-grid-item{background: #eee;}
</style>

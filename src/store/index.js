import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        style:{
            gridLayout:{
                backgroundImage:'url(about:blank)',
                backgroundColor:''
            },
            gridItem:{
                backgroundColor:'#eee'
            }
        },
        layout: [], //布局配置
        // [{ "x": 0, "y": 0, "w": 12, "h": 1, "i": "0" },
        // { "x": 0, "y": 1, "w": 6, "h": 1, "i": "1" },
        // { "x": 6, "y": 1, "w": 6, "h": 1, "i": "2" },
        // { "x": 0, "y": 2, "w": 12, "h": 1, "i": "3" },
        // { "x": 0, "y": 3, "w": 12, "h": 1, "i": "4" }],

        dataset: {}, //数据集
        currentTabIndex:0,
        currentLayoutIndex: -1
    },
    getters:{
        datasetOption(state){
            let res = []
            for(var key in state.dataset){
                res.push({
                    id: key,
                    label: state.dataset[key].label
                })
            }
            return res
        }

    },
    mutations: {
        setDataset(state, val) {
            state.dataset = val;
        },

        pushLayout(state, type) {
            const size = state.layout.length
            const last = state.layout[size - 1 || 0]
            const next = {
                x: 0,
                y: size ? last.y + 1 : 0,
                w: 12,
                h: 2,
                i: size + '_',
                chart:{
                    settings:{
                        type
                    }
                }
            }
            state.layout.push(next)
        },

        setLayoutChart(state, chart){
            // state.layout[state.currentLayoutIndex].chart[chart.key] = chart.value
            Vue.set(state.layout[state.currentLayoutIndex].chart, chart.key, chart.value)
        },

        setCurrentTabIndex(state, val){
            state.currentTabIndex = val
        },
        setCurrentLayoutIndex(state, val){
            state.currentLayoutIndex = val;
        },

        setStyle(state, style){
            state.style[style.target][style.name] = style.value;
        }
    }
})

export default store
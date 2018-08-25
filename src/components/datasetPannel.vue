<template>
    <div class="dataset-pannel">
        <el-form :model="form">
            <el-form-item label="数据集">
                <el-select
                    ref="selector"
                    v-model="datasetSeleted"
                    multiple
                    filterable
                    remote
                    reserve-keyword
                    value-key="id"
                    placeholder="请输入关键词"
                    :remote-method="remoteMethod"
                    :loading="loading">
                        <el-option
                        v-for="el in options"
                        :key="el.id"
                        :label="el.label"
                        :value="el.id">
                        </el-option>
                </el-select>
            </el-form-item>
            <el-form-item style="text-align:center;padding-top:10px">
                <el-button @click="fetchDataSet" type="primary">获取数据集</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{},
            datasetSeleted:'',
            loading:false,
            options:[]
        }
    },

    methods:{
        remoteMethod(){
            // $.axios
            this.options = [{
                id:'1001',
                label:'注册量'
            },{
                id:'1002',
                label:'投资额'
            },{
                id:'1003',
                label:'提现'
            },{
                id:'1004',
                label:'充值'
            },{
                id:'1005',
                label:'客服'
            }]
        },

        fetchDataSet(){
            var result = {}, len = this.datasetSeleted.length - 1;
            this.$store.commit('setDataset',{})
            this.datasetSeleted.forEach((id,index)=>{
                this.$axios.get('/static/json/datasource.json',{
                    params:{id}
                }).then(res=>{
                    let selected = this.$refs['selector'].selected[index]
                    result[id] = {
                        label: selected.label,
                        data: res
                    }
                    if(index>=len){
                        this.$store.commit('setDataset',result)
                    }
                    
                })
            })
        }
    }
}
</script>
<style>
.dataset-pannel {
  position: absolute;
  width: 236px;
  left: 0;
  top: 0;
}
.el-form{padding-left: 10px;padding-right: 10px;}
.el-form-item{margin-bottom: 0;}
</style>

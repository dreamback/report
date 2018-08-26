<template>
<div class="global-pannel">
        <el-form :model="form">
            <el-form-item label="背景图片">
                <el-upload
                    action="/static/json/fetchUpload.json"
                    :on-remove="handleRemove"
                    :show-file-list="false"
                    :on-success="handleSuccess"
                    :multiple="false"
                    :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="背景颜色">
                <el-color-picker
                    v-model="gridLayoutColor">
                </el-color-picker>
            </el-form-item>
            <el-form-item label="图表背景颜色">
                <el-color-picker
                    show-alpha
                    v-model="gridItemColor">
                </el-color-picker>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    data(){
        return {
            form:{},
            gridLayoutColor:'#fff',
            gridItemColor:'rgba(238,238,238,1)',
            fileList: []
        }
    },

    watch:{
        gridLayoutColor: function(val){
            this.setStyle({
                target:'gridLayout',
                name:'backgroundColor',
                value: val
            })
        },
        gridItemColor: function(val){
            this.setStyle({
                target:'gridItem',
                name:'backgroundColor',
                value: val
            })
        }
    },

    methods:{
        ...mapMutations(['setStyle']),
        handleRemove(){},
        handleSuccess(res, file){
            this.setStyle({
                target:'gridLayout',
                name:'backgroundImage',
                value: `url(${res.src})`
            })
        }
    }
}
</script>
<style>
.global-pannel {
  position: absolute;
  width: 236px;
  left: 0;
  top: 0;
}
</style>
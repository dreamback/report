<template>
    <div class="property-pannel">
        <el-form :model="form">
            <el-form-item label="数据源">
                <el-select ref="selector" v-model="datasetSelect" placeholder="请选择">
                    <el-option
                    v-for="el in datasetOption"
                    value-key="id"
                    :key="el.id"
                    :label="el.label"
                    :value="el.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标题">
                <el-input v-model="title" placeholder="标题"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      form: {},
      datasetSelect: "",
      title: ""
    };
  },
  computed: {
    ...mapGetters(["datasetOption"]),
    ...mapState(['currentLayoutIndex','layout'])
  },
  watch: {
    datasetSelect: function(val) {
      console.log(this.$refs["selector"].selectedLabel);
      this.$store.commit("setLayoutChart", {
        key: "select",
        value: {
          id: val,
          label: this.$store.state.dataset[val].label
        }
      });
    },

    title: function(val) {
      this.$store.commit("setLayoutChart", {
        key: "title",
        value: val
      });
    },

    currentLayoutIndex: function(val){
        // debugger
        const chart = this.layout[val].chart
        this.datasetSelect = chart.select?chart.select.id:''
        this.title = chart.title || ""
    }
  }
};
</script>
<style>
.property-pannel {
  position: absolute;
  width: 236px;
  left: 0;
  top: 0;
}
</style>
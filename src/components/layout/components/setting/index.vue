<template>
  <el-divider>主题</el-divider>
  <el-switch
      v-model="dataTheme"
      inline-prompt
      class="pure-datatheme"
      :active-icon="Sunny"
      :inactive-icon="Moon"
      @change="dataThemeChange"
    />
</template>

<script lang='ts' setup>
import { reactive, toRefs } from 'vue';
import { Sunny, Moon } from '@element-plus/icons-vue'

const state = reactive({
  dataTheme:false
})
const {dataTheme} = toRefs(state)

// 切换主题
function dataThemeChange(){

}
</script>

<style lang="scss" scoped>
:deep(.el-divider__text) {
  font-size: 16px;
  font-weight: 700;
}
.pure-datatheme{
  display: block;
  text-align: center;
}
</style>
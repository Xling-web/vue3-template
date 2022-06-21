<template>
  <svg class="icon-svg" aria-hidden="true">
    <use :xlink:href="IconName" />
  </svg>
</template>
<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      default: '',
      required: true
    }
  },
  computed: {
    // 用于接收传递的 svg 图标的名称
    IconName() {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>
<style lang="scss" scoped>
// 导入的样式可以自定义
.icon-svg {
  width: 250px;
  height: 294px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
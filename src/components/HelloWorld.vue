<template>
  <div ref="Helloworld" class="view" v-show="isVisible">我是子组件Hellow</div>
</template>

<script>
  import visibilityMixin from '../common/visibei'

  export default {
    mixins: [visibilityMixin],
    name: 'index',
    data() {
      return {
        name: 'hhh',
        positionX: 0,
        positionY: 0,
        i: [{ input: '' }]
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .view {
    background: blue;
  }
</style>

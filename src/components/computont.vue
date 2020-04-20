<template>
  <div class="page" v-show="isVisible" id="computont">
    <div @click="uio('hhh')"><button>点击关闭兄弟组件的方法</button></div>
    <div>我是子组件CCCC</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import visibilityMixin from "../common/visibei"
    export default {
      mixins:[ visibilityMixin],
      data() {
        return {
         name:"ccc"
        }
      },
      components: {

      },
      methods: {
      uio() {
        // let i =  this.findcomputed(name)  //在混入里面我定义了 一个方法根据data 中的name 查找数组的位置
        if (this.$parent.$refs.hh.isVisible) {
          this.$parent.$refs.hh.hide()
        } else {
         this.$parent.$refs.hh.show()
        }
        // this.$parent.$refs.hh.hide()
        console.log(this.$parent.$refs)
      }
    }
    }
</script>

<style scoped>
  .page {
    width: 200px;
    height: 660px;
    background-color: red;
  }
</style>

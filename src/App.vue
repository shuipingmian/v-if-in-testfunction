<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" ref="hh" />
    <div @click="uio()"><button>我是父组件关闭子组件的方法</button></div>
    <computonLt ref="cc" />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import computonLt from './components/computont.vue'
  export default {
    name: 'App',
    components: {
      HelloWorld,
      computonLt,
    },
    methods: {
      // 后期放在公共方法里面 根据name识别
      findFathercomputed(name) {
        console.log(this.$parent.$children)
        let arry1 = this.$parent.$children[0].$children
        let c = arry1.find((val) => {
          return val.name === name
        })
        return arry1.indexOf(c)
      },
      uio() {
        // 以下2种方法都可以
        // 方法1 调用公共函数
        // let i = this.findFathercomputed('ccc')
        // console.log(i)
        // if (this.$parent.$children[0].$children[i].isVisible) {
        //   this.$parent.$children[0].$children[i].hide()
        // } else {
        //   this.$parent.$children[0].$children[i].show()
        // }

        // 方法2   写一个refs
        // 父组件关闭子组件直接用this.$refs.cc方法
        console.log(this.$refs.cc)
        this.$refs.cc.hide()
        if (this.$refs.cc.isVisible) {
          this.$refs.cc.hide()
        } else {
          this.$refs.cc.show()
        }
      },
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

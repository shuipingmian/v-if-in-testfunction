// const EVENT_TOGGLE = 'toggle'

export default {
  data() {
    return {
      // If use the prop visible directly, the toggle will failed when user haven't set v-model as a reactive property.
      // So we use the data isVisible instead.
      isVisible: true
    }
  },
  methods: {
    // 用于识别兄弟组件的方法  传入 兄弟组件中在data定义的 name:"名字"
    findcomputed(name) {
      console.log(this.$parent.$children)
      let arry1 = this.$parent.$children
      let c = arry1.find(val => {
        return val.name === name
      })
      return arry1.indexOf(c)
    },
    findRefs(name) {
      let arry1 = this.$parent.$refs
      console.log(arry1, name)
      // let c = arry1.find(val => {
      //   return val === name
      // })
      // return arry1.indexOf(c)
    },
    show() {
      this.isVisible = true
    },
    hide() {
      this.isVisible = false
    }
  }
}

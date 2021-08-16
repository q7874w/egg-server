import Vue from 'vue'
let vm = new Vue({
  data() {
    return {
      title: '学生列表',
      info: {
        a: {
          b: 1
        }
      },
      students: [
        {
          id: 1,
          name: '小明',
          gander: '女',
          age: 12
        },
        {
          id: 2,
          name: '小红',
          gander: '女',
          age:13
        }
      ]
    }
  }
})
vm.info.a = {
  c: 12
}
// console.log();
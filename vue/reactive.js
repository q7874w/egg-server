import observe from "./observe";

function defineReactiveData(data, key, value) {
  // defineReactiveData(obj,'a','1')
  observe(value)
  Object.defineProperty(data, key, {
    get() {
      console.log('响应式数据：获取', value);
      return value
    },
    set(newValue) {
      console.log('响应式数据：设置', newValue);
      if (value === newValue) return;
      value = newValue
      observe(newValue)
    }
  })
}
// let obj = {}
// defineReactiveData(obj, 'a', '张三')
// obj.a = '张三'
// obj.a = '李四'
// console.log(obj.a)
export default defineReactiveData
import ARR_METHONS from './const'
import { observeArr } from './observeArr'

var originArrMethods = Array.prototype,
  arrMethods = Object.create(originArrMethods);

console.log(originArrMethods, '11111');
  console.log(arrMethods,22222);

  ARR_METHONS.map(function (m) {
    arrMethods[m] = function () {
      var args = Array.prototype.slice.call(arguments);
      var rt = arrMethods[m].apply(this, args);
      // 到这一步只是把数组原来的方法拿过来执行了一遍
      // 接下来就是给数组中改变的元素添加 数据劫持
      var newArr

      switch (m) {
        case 'push':
        case 'unshift':
          newArr = args
          break;
        case 'splice':
          newArr = args.slice(2)
          break;
        default:
          break;
      }

      newArr && observeArr(newArr)
      return rt
    }
  })
  
export {
  arrMethods
}

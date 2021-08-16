import observe from './observe'
export const observeArr = function (arr) {
  for (var i = 0; i < arr.length; i++){
    observe(arr[i]) 
  }
}
/**
 * 魔术师手中有一堆扑克牌，观众不知道它的顺序，接下来魔术师：

    从牌顶拿出一张牌， 放到桌子上
    再从牌顶拿一张牌， 放在手上牌的底部
    如此往复（不断重复以上两步），直到魔术师手上的牌全部都放到了桌子上。

    此时，桌子上的牌顺序为： (牌底) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌顶)。

    问：原来魔术师手上牌的顺序，用函数实现。
 */

 const result = [1,2,3,4,5,6,7,8,9,10,11,12,13]
 const getOrigin = (arr)=>{
    let origin = []
    for(let i = arr.length-1; i>=0; i--) {
      if(origin.length) {
        let item = origin.shift()
        origin.push(item)
      }
      origin.push(arr[i])
    }
    return origin;
 }
 let res = getOrigin(result);
 console.log(res)
 // [ 1, 12, 2, 8, 3, 11, 4, 9, 5, 13, 6, 10, 7 ]


const res = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] ;
const runBackward = () => {
    const base = [];
    for (let i = 0; i < res.length; i++) {
        if (base.length) {
            const item = base.splice(base.length - 1, 1)[0];
            base.unshift(item);
        }
        base.unshift(res[i])
    }
    return base;
}
console.log(runBackward())
// [ 1, 12, 2, 8, 3, 11, 4, 9, 5, 13, 6, 10, 7 ]


/**
 * 
 */
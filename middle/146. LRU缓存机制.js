/**
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 
 *
 * 获取数据 get(key) - 如果关键字 (key) 存在于缓存中，则获取关键字的值（总是正数），否则返回 -1。
 * 写入数据 put(key, value) - 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字/值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
    进阶:
    你是否可以在 O(1) 时间复杂度内完成这两种操作？
    示例:
    LRUCache cache = new LRUCache( 2) /* 缓存容量 
     // cache.put(1, 1);
    // cache.put(2, 2);
    // cache.get(1);       // 返回  1
    // cache.put(3, 3);    // 该操作会使得关键字 2 作废
    // cache.get(2);       // 返回 -1 (未找到)
    // cache.put(4, 4);    // 该操作会使得关键字 1 作废
    // cache.get(1);       // 返回 -1 (未找到)
    // cache.get(3);       // 返回  3
    // cache.get(4);       // 返回  4
 */

 /**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.keys = []
  this.cache = Object.create(null)
  this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(this.cache[key])  {
     remove(this.keys, key)
     this.keys.push(key)
     return this.cache[key]
  }
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(this.cache[key]) {
    this.cache[key] = value
    remove(this.keys, key)
    this.keys.push(key)
  } else {
    this.keys.push(key)
    this.cache[key] = value
    if(this.keys.length > this.capacity) {
      removeCache(this.cache, this.keys, this.keys[0])
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

 function remove(arr, key) {
   if(arr.length) {
     let index = arr.indexOf(key) 
     if(index > -1) {
       return arr.splice(index, 1)
     }
   }
 }
 function removeCache(cache, keys, key) {
   cache[key] = null
   remove(keys, key)
 }






 var LRUCache = function(capacity) {
  this.cache = new Map()
  this.capacity = capacity
}

LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
      // 存在即更新
      let temp = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, temp)
      return temp
  }
  return -1
}

LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
      // 存在即更新（删除后加入）
      this.cache.delete(key)
  } else if (this.cache.size >= this.capacity) {
      // 不存在即加入
      // 缓存超过最大值，则移除最近没有使用的
      this.cache.delete(this.cache.keys().next().value)
  }
  this.cache.set(key, value)
}
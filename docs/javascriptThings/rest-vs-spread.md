---
sidebar_label: "Rest vs Spread Operator"
tags: [Javascript]
---

# Rest vs Spread Operator

這裡來說明一下 ES 6 的兩個重要 features，這在前端框架中是需要熟練的技術，雖然語法都是 **...**

## Spread Operator (展開運算子)

**用途：Spread 操作符用於將一個陣列或物件的所有元素/屬性展開到另一個陣列或物件中。**

**使用場景：**

1. 合併陣列

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
```

2. 複製陣列 **_常用_**

```javascript
let arr = [1, 2, 3];
let arrCopy = [...arr]; // [1, 2, 3]
```

3. 展開物件屬性

```javascript
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

4. 函數參數

```javascript
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
sum(...numbers); // 6
```

## Rest Operator (其餘參數運算子)

**用途：**
Rest 操作符用於將多個獨立的參數組合成一個陣列，通常在函數參數列表中使用。

**使用場景：**

1. 函數的不定參數：

```javascript
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10
```

2. 解構賦值中提取剩餘元素：**_常用_**

```javascript
javascriptCopy code
let [a, ...rest] = [1, 2, 3, 4];
console.log(a); // 1
console.log(rest); // [2, 3, 4]
```

:::tip 差異比較

- **相同點：** 都使用 **...** 符號。
- **不同點：** Spread 用於展開陣列或物件，而 Rest 用於將多個參數組合成陣列。
- **使用場景：** Spread 常用於合併和複製陣列/物件，Rest 多用於處理函數的不定參數。

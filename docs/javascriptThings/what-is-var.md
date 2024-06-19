---
sidebar_label: "Var vs Let vs Const"
tags: [Javascript]
---

# Var vs Let vs Const

在 JavaScript 中，var、let 和 const 是用來宣告變數的關鍵字。它們在作用域、重新賦值以及提升（hoisting）行為上有顯著的不同。

## var
 - 作用域（Scope）
   - **var** 是函數作用域（function scope）。這意味著在同一個函數內，**var** 宣告的變數在整個函數內都是可見的。
   - **var** 也可以在全局作用域中宣告變數。

 - 提升（Hoisting）：
   - **var** 宣告的變數會被提升到其作用域的頂部，但變數的初始化不會被提升。這意味著變數可以在宣告之前被引用，但值為 undefined。

 - 重新賦值（Reassignment）：
   -  **var** 宣告的變數可以被重新賦值。



```js {2} title="var 函數作用域範例"
const printInfo = (name) => {
  var number = 20;
  console.log(`I am ${name}, I am ${number} years old.`);
};
printInfo("Zack"); //  I am Zack, I am 20 years old.
console.log(number); // error number is not defined
```

```js {1} title="var 全局作用域與提升範例"
console.log(number) //  undefined，照理說應該出錯，但是 var 被提升了
var number = 10;
```

```js {1,3,7} title="var 被重新賦值範例"
var number = 20;
const printInfo = (name) => {
  number = 30;
  console.log(`I am ${name}, I am ${number} years old.`);
};
printInfo("Zack"); //  I am Zack, I am 30 years old.
console.log(number); // 30，這很危險，變數竟然被某個函式改掉了！
```

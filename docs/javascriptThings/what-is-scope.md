---
sidebar_label: "What is Scope"
tags: [Javascript]
---

# What is Scope

在 JavaScript 中，作用域（Scope）是指變數和函數可訪問的範圍。理解作用域對寫出可靠與高效的程式碼是相當重要的。

## 全局作用域（Global Scope）

在全局作用域的底下的變數和函數在任何地方都可使用，也就是在最外層，任何寫的程式碼都是越來越往內部，所以無論包了多少層，都總是可以取用得到。

```js {1}
const number = 10; //  Global variable
const printInfo = (name) => {
  console.log(`I am ${name}, I am ${number} years old.`);
};
printInfo("Zack"); //  I am Zack, I am 10 years old.
```

:::danger 注意

    1. 全局變數污染：全局作用域中的變數在整個程式碼中都可訪問，容易引起變數命名衝突。為避免這種情況，應盡量減少使用全局變數。
    2. 全局對象：在瀏覽器環境中，全局變數和函數會成為 window 對象的屬性。在 Node.js 環境中，全局對象是 global。
    3. 模塊化：現代 JavaScript 中，使用模塊（modules）可以幫助減少全局變數，並且使程式碼更加結構化和易於維護。
    ```js
        // module.js
        export const number = 10;
        export const printInfo = (name) => {
        console.log(`I am ${name}, I am ${number} years old.`);
        };

        // main.js
        import { number, printInfo } from './module.js';
        printInfo("Zack"); // I am Zack, I am 10 years old.
    ```

:::

## 函數作用域（Function Scope）

在函數中定義的變數就只能在裡面使用，不能踏出去半步啊！

```js {7}
const printInfo = () => {
  var name = "Zack";
  let age = 33;
  const tall = "168cm";
  console.log(`I am ${name}, ${age} years old.`);
};
console.log(tall); //  tall is not defined
```

## 區塊作用域（Block Scope）

在使用 let or const 關鍵字建立變數時，他們的使用範圍就是整個包住他們的 {} 大括號裡面。
這主要是要解決當使用 var 關鍵字建立**變數所引發的問題**。

```js
{
  let blockScopedVar = "I am a block-scoped variable";
  console.log(blockScopedVar); // 可以访问 blockScopedVar
}
console.log(blockScopedVar); //  blockScopedVar is not defined
```

## 語彙作用域（Lexical Scope）

JavaScript 本身就是都遵守 Lexical Scope，這意味著變數的範圍在程式碼撰寫時就確定了。意思是當下的 {} 裡面找不到變數時會轉往上一層做搜尋，一直找到 Global 環境時還找不到就會丟出錯誤。

```js {2,4}
function outerFun() {
  const name = "Zack";
  function innerFun() {
    console.log(name);
  }
  innerFun();
}
outerFun();
```

這裡解釋一下我們做了哪些事

1. 定義一個 function outerFun
2. 定義一個 變數 name 在 outerFun 這個 scope
3. 定義另一個 function innerFun 在 outerFun 的 scope 裡面
4. innerFun 嘗試訪問一個變數 name
5. 呼叫使用 innerFun
6. 在全局作用域中呼叫 outerFun

當執行程式時，關鍵在於 `innerFun` 如何使用變數 `name`。由於當前的作用域中沒有變數 `name`，所以會向外層查找，直到找到變數 `name` 或者到達全局作用域。如果在全局作用域中仍然找不到該變數，則會拋出錯誤。

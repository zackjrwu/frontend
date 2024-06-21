---
sidebar_label: "Var vs Let vs Const"
tags: [Javascript]
---

# Var vs Let vs Const

在 JavaScript 中，var、let 和 const 是用來宣告變數的關鍵字。它們在[作用域](./what-is-scope.md)、重新賦值以及[提升](./what-is-hoisting.md)（hoisting）行為上有顯著的不同。

## var
 - 作用域（Scope）
   - **var** 是函式作用域（function scope）。這意味著在同一個函式內，**var** 宣告的變數在整個函式內都是可見的。
   - **var** 也可以在全局作用域中宣告變數。

 - 提升（Hoisting）：
   - **var** 宣告的變數會被提升到其作用域的頂部，但變數的初始化不會被提升。這意味著變數可以在宣告之前被引用，但值為 undefined。

 - 重新賦值（Reassignment）：
   -  **var** 宣告的變數可以被重新賦值。

 - 重複宣告（Redeclaration）： 
   -  **var** 允許在同一作用域內重複宣告變數。這意味著可以在同一個函式或區塊內多次宣告同一個變數，而不會拋出錯誤，且後面的宣告會覆蓋前面的宣告。



```js {2} title="var 函式作用域範例"
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
console.log(number); // 30，這很危險，變數被函式改掉了！
```

```js {3} title="var 函式作用域與被重新賦值範例"
var number = 20;
if (true) {
  var number = 30; // 修改了全局變數
  console.log(`Inside if block: number = ${number}`); // Inside if block: number = 30
}
console.log(`Outside if block: number = ${number}`); // Outside if block: number = 30
```

```js {1} title="var 重複宣告範例"
const printInfo = (name) => {
  var number = 30;
  console.log(`I am ${name}, I am ${number} years old.`);
  var number = 40;
  console.log(`I am ${name}, I am ${number} years old.`);
};
printInfo("Zack"); //  I am Zack, I am 30 years old.
//  I am Zack, I am 40 years old.
```

## let
 - 作用域（Scope）
   - **let** 是區塊作用域（block scope）。這意味著 let 宣告的變數只在其所在的區塊（block，例如 {} 內）中可見。

 - 提升（Hoisting）：
   - **let**  變數也會被提升，但在變數宣告之前不能被引用。嘗試在宣告之前引用會導致 ReferenceError。這段期間稱為「暫時性死區」（Temporal Dead Zone, TDZ）。

 - 重新賦值（Reassignment）：
   -  **let** 宣告的變數可以被重新賦值。

 - 重複宣告（Redeclaration）：
   -  **let** 不允許在同一作用域內重複宣告變數。如果嘗試在同一作用域內重複宣告變數，會拋出 SyntaxError。

```js {1,4} title="let 作用域範例"
if (true) {
  let x = 10;
  console.log(x); // 輸出 10
}
console.log(x); // ReferenceError: x is not defined
```

```js {3} title="let 提升和暫時性死區（TDZ）範例"
const printAge = () => {
  console.log(`I am ${number} years old.`); //  ReferenceError: age is not defined
  let number = 30;
};
printAge();
```

```js {3} title="let 重新賦值範例"
let x = 30;
x = 40; // 合法，重新賦值
console.log(x); // 40
```

```js {2} title="let 重複宣告範例"
let a = 50;
let a = 60; // SyntaxError: Identifier 'a' has already been declared
```

## const
 - 作用域（Scope）
   - **const** 同 **let**

 - 提升（Hoisting）：
   - **const** 同 **let**

 - 重新賦值（Reassignment）：
   - **const** 不能被重新賦值。一旦變數被賦值，就不能再改變其值。但對於複合資料類型（如陣列或物件），其內容仍然可以被修改。

 - 重複宣告（Redeclaration）：
   - **const** 同 **let**

```js {3} title="const 重新賦值範例"
const x = 30;
x = 40; // TypeError: Assignment to constant variable.
console.log(x); // 不會執行，因為上一行就拋出錯誤
```

```js {2,6} title="const 重新賦值（復合型資料）範例"
const arr = [1, 2, 3];
arr.push(4); // 合法，可以修改陣列內容
console.log(arr); // 輸出 [1, 2, 3, 4]

const obj = { key: 'value' };
obj.key = 'new value'; // 合法，可以修改物件屬性
console.log(obj); // 輸出 { key: 'new value' }
```

## 結論
優先使用 **const** 來宣告變數，可以有效提高代碼的安全性和可讀性，並有助於防止意外的重新賦值。只有在需要變數值變化時才使用 **let** 。這種做法符合現代 JavaScript 編程的最佳實踐，有助於編寫更穩定和易於維護的代碼。至於 **var** 基本上不要使用了，假如有機會維護舊時代的程式碼再了解其原理。
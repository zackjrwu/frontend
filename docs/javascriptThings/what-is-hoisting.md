---
sidebar_label: "What is Hoisting"
tags: [Javascript]
---

# What is Hoisting

這個主題我想就另一個叫角度來探討，為什麼要有這個機制？
JavaScript 的 hoisting（提升）機制是為了讓語言更易於使用，尤其是對那些沒有深厚計算機基礎的人來說。hoisting 使得變數和函式的宣告看起來像是在它們被使用之前已經被定義過了，這樣可以減少因為變數和函式宣告位置不當而導致的錯誤。

## 提升機制的主要設計初衷包括：
1. 簡化語言使用：使用 hoisting 機制，開發者不需要過於擔心變數和函式的宣告順序，這在某些情況下可以讓代碼更加簡潔和易讀。
2. 降低錯誤風險：初學者可能不太了解變數和函式宣告的[作用域](./what-is-scope.md)和生命周期。hoisting 使得變數和函式的宣告在整個作用域內有效，從而減少了一些常見的錯誤。
3. 提升代碼靈活性：hoisting 允許開發者在函式調用之前就寫出函式調用代碼，使得編寫測試和使用函式的地方更加靈活。

然而，雖然 hoisting 有助於降低學習曲線，它也可能導致一些令人困惑的行為，特別是當開發者進一步深入了解 JavaScript 時。因此，理解 hoisting 的工作原理對於撰寫健壯的 JavaScript 代碼是非常重要的。

## 提升的行為

### 變數宣告提升：
  - 使用 **var** 宣告的變數會被提升，但不會提升賦值部分。被提升的變數會被初始化為 **undefined**。
  - 使用 **let** 和 **const** 宣告的變數也會被提升，但在宣告之前使用它們會導致 **ReferenceError**，因為它們在宣告之前處於“暫時性死區（Temporal Dead Zone, TDZ）”。

```js {1,6}
console.log(foo); // undefined
var foo = 'Hello, World!';
console.log(foo); // 'Hello, World!'

// 上面程式碼也等於：
var foo;
console.log(foo); // undefined
foo = 'Hello, World!';
console.log(foo); // 'Hello, World!';
```

```js {1,5}
console.log(bar); // ReferenceError: Cannot access 'bar' before initialization
let bar = 'Hello, World!';

// 同樣適用於 const
console.log(baz); // ReferenceError: Cannot access 'baz' before initialization
const baz = 'Hello, World!';
```

### 函式宣告提升：
  - 函式宣告會被提升，且整個函式體都會被提升到作用域的頂部。這意味著你可以在函式宣告之前調用該函式。

```js {3-5,8-10}
console.log(add(2, 3)); // 5

function add(a, b) {
  return a + b;
}

// 上面程式碼也等於：
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

### 函式表達式和箭頭函式：
  - 函式表達式和箭頭函式的變數宣告會被提升，但它們的賦值不會被提升。因此，在宣告之前調用這些函式會導致 **TypeError**，因為它們在提升時被初始化為 **undefined**。

```js
console.log(subtract(5, 2)); // TypeError: subtract is not a function
var subtract = function(a, b) {
  return a - b;
};

// 箭頭函式
console.log(multiply(2, 3)); // TypeError: multiply is not a function
var multiply = (a, b) => a * b;

// 上面程式碼也等於：
var subtract;
console.log(subtract(5, 2)); // TypeError: subtract is not a function
subtract = function(a, b) {
  return a - b;
};

var multiply;
console.log(multiply(2, 3)); // TypeError: multiply is not a function
multiply = (a, b) => a * b;
```

## 結論

理解提升的行為可以幫助你更好地理解 JavaScript 的執行過程，避免常見的錯誤。以下是提升的一些關鍵點：

- 使用 var 宣告的變數會被提升，並初始化為 undefined。
- 使用 let 和 const 宣告的變數會被提升，但在宣告之前訪問它們會導致 ReferenceError。
- 函式宣告會被提升到當前作用域的頂部。
- 函式表達式和箭頭函式的變數宣告會被提升，但賦值不會被提升。
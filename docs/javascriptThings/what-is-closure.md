---
sidebar_label: "What is Closure"
tags: [Javascript]
---

# What is Closure

Closure（閉包）是 JavaScript 中非常重要的一個概念，它讓函式可以**記住**它創建時的環境。簡單來說，Closure 是函式和其所能訪問的變數範圍的組合。不過與其說是記住，不如說是利用 javascript 的 Lexical Scope 特性來達成的效果。

Closure（閉包）就是一個函式，它記住了它被創建時的環境。這意味著，即使這個函式在其他地方被調用，它仍然可以訪問和操作它創建時所在的[作用域](./what-is-scope.md)中的變數。

可以把閉包想像成一個盒子，這個盒子裡面裝著一個函式和它需要的所有變數。即使這個盒子被移動到不同的地方（函式被返回並在其他地方調用），盒子裡面的東西（變數）仍然是完好的，函式可以隨時取用。

## 基礎觀念

### 詞法作用域（Lexical Scope）

在 JavaScript 中，函式的作用域在函式定義時就確定了，這稱為詞法作用域。這意味著函式內部的變數和外部變數是基於函式定義的位置來決定的，而不是函式被調用的位置。

### Closure 的定義

當函式在內部定義並返回另一個函式時，內部函式會“記住”它的詞法作用域，這就是閉包。閉包允許內部函式訪問外部函式的變數，即使外部函式已經執行完畢。

#### 基礎範例

```javascript
function outerFunction() {
  let outerVariable = "I am outside!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // 輸出：I am outside!
```

1. 定義一個 function outerFunction
2. 宣告一個變數 outerVariable
3. 在 outerFunction 裡面再定義一個 function innerFunction
4. innerFunction 做的事情是 log 出在 outerFunction 定義的變數
5. 把 innerFunction 傳出

:::tip 觀念釐清

- **尋找：** 這裡的 innerFunction 可以取到 outerVariable 變數是因為 Lexical Scope 的幫助。當在目前的環境找不到會往外層找。
- **解釋：** 可以想像成你定義好一個函式後他就一直存在記憶體某個地方，你在這個函式宣告了什麼變數都會一直停在裡面，而這個函式就相對於你在這函式未來創建的所有子函式是他們的全域空間。 這就可以解釋為什麼 innerFunction 可以拿到 outerVariable 變數了。
  :::

當執行時

1. 把剛剛定義好的 outerFunction 存給變數 myClosure **注意這裡其實是執行 innerFunction**
2. myClosure() 真正執行剛剛定義的 outerFunction
3. log 出 I am outside!

:::tip 觀念釐清

- **為什麼可以 log 出來：** 因為函式就是物件 outerFunction 會佔據一個記憶體位置，所以裡面定義的東西會一直存在也是理所當然的！
  :::

#### 再一個範例

```javascript
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
console.log(counter1()); // 輸出：1
console.log(counter1()); // 輸出：2

const counter2 = makeCounter();
console.log(counter2()); // 輸出：1
console.log(counter2()); // 輸出：2
```

1. makeCounter 返回一個匿名函式，這個匿名函式每次被調用時會遞增並返回 count。
2. 每次調用 makeCounter 都會創建一個新的 count 變數，從而產生獨立的閉包。
3. counter1 和 counter2 是不同的閉包，它們各自有自己的 count 變數。

### 使用閉包的常見情境

- 模擬私有變數：閉包可以用來創建模擬私有變數的方法，這些變數只能通過閉包函式訪問。

  ```js {8-10,22-23} showLineNumbers
  function createPerson(name) {
    let age = 0; // 私有變數

    return {
      getName: function () {
        return name;
      },
      getAge: function () {
        return age;
      },
      growOlder: function () {
        age++;
      },
    };
  }

  const person = createPerson("John");
  console.log(person.getName()); // 輸出：John
  console.log(person.getAge()); // 輸出：0
  person.growOlder();
  console.log(person.getAge()); // 輸出：1（這裡有一個方法）
  console.log(person.age); //  失敗，因為沒有開放可以用變數名稱直接訪問裡面的 age
  ```

- 工廠函式：閉包常用於工廠函式（factory functions），生成帶有不同狀態的對象。
- 回調函式：閉包廣泛應用於回調函式中，使得回調函式能夠記住並訪問其創建時的變數環境。

  ```javascript
  function createDelayedLogger(message, delay) {
    return function () {
      setTimeout(function () {
        console.log(message);
      }, delay);
    };
  }

  const logHello = createDelayedLogger("Hello, World!", 2000);
  logHello(); // 2 秒後輸出：Hello, World!
  ```

  :::danger 注意

  - 避免意外使用外層變數：
    當你在閉包中引用了一個沒有在內部定義的變數，JavaScript 引擎會沿著作用域鏈向上查找這個變數，直到全域作用域。
    這可能導致無意中使用了外部作用域中的變數，從而引發意料之外的行為。

  - 清晰地管理作用域：
    在設計閉包時，應該明確區分哪些變數是局部變數，哪些變數是從外部作用域繼承的。
    這有助於避免變數名衝突和意外行為。

  閉包會保留對外部函式作用域變數的引用，只要這些閉包仍然存在並可以被調用，這些變數就不會被垃圾回收器回收。
  當所有對閉包的引用都被移除時，垃圾回收器將回收內部和外部函式作用域中不再被引用的變數。
  :::

  ```

  ```

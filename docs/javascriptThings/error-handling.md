---
sidebar_label: "Error Handling"
tags: [Javascript]
---

# Error Handling

當 javascript 的程式區塊在執行有機會發生錯誤時 可以用 **try...catch** 來防範

**這裡的防範是指假如有錯誤發生會造成接下來的程式碼不執行且崩潰**

在使用 try...catch 防範錯誤時，catch 部分的處理方式取決於你的需求和具體情況。以下是幾種常見的處理方式：

## 基本使用

1.  只 log 錯誤信息：

        如果這個錯誤不影響後續邏輯，只需要記錄錯誤以便於調試和排查。

        這種方式適用於不會影響應用程式整體運行的小錯誤。

        ```javascript
        const x = 10;
        try {
          //  會出錯的地方，因為沒有 y 變數
          const result = x * y;
          //  捕捉這個 try 的錯誤
        } catch (err) {
          console.error(err.message); //  y is not defined
        } finally { //  不管什麼錯誤都會正常執行
          console.log('我輕鬆自在的執行 😎')
        }

        console.log('上面不關我的事~繼續執行 😙');

2.  重新拋出錯誤：

        如果這個錯誤需要被上層邏輯處理，可以在 catch 中重新拋出錯誤。

        這樣做可以保留錯誤信息並讓上層邏輯決定如何處理。

        ```javascript
        const x = 10;
        try {
          // 會出錯的地方，因為沒有 y 變數
          const result = x * y;
        } catch (err) {
          //  y is not defined
           console.error(err.message);
           throw new Error(err.message);

    }
    console.log('我崩潰了 我這裡什麼都做不了 🥲');

## 解決拋出錯誤

```javascript
const i = 100;

try {
  try {
    const result = i * j; // 這行代碼會引發 ReferenceError
  } catch (err) {
    console.log(err.message); // 捕捉到錯誤並記錄錯誤信息
    throw new Error("Something went wrong! ⛔️"); // 拋出一個新的錯誤
  } finally {
    console.log("我輕鬆自在的執行 😎");
  }
} catch (err) {
  console.log("Caught in outer try:", err.message); // 在更上層捕捉到新的錯誤
}

console.log("上面不關我的事~繼續執行 😙"); // 這會被執行
```

## 高級用法

如果希望重新拋出錯誤並且可以靈活地決定是否讓程式繼續運行，可以使用一個自定義的錯誤處理函數。

```javascript
function handleError(err) {
  console.log(err.message);
  // 根據需要決定是否重新拋出錯誤
  // throw new Error('Something went wrong!');
}

const i = 100;
try {
  const result = i * j;
} catch (err) {
  handleError(err);
} finally {
  console.log("我輕鬆自在的執行 😎");
}

console.log("上面不關我的事~繼續執行 😙");
```

## **注意事項**

:::danger

重新拋出錯誤時，必須有另一個 try...catch 區塊來捕捉這個錯誤，以保證程式可以繼續運行。如果沒有捕捉到這個錯誤，程式將會中斷，並且後續的代碼將不會被執行。因此，當你拋出一個錯誤時，需要確保這個錯誤能夠被適當地捕捉和處理。

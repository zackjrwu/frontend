---
sidebar_position: 1
tags: [Javascript]
---

# What is Javascript ?

## 前端程式語言

JavaScript 是一種高級、解釋性、弱型別的腳本語言，廣泛應用於 Web 開發中。作為前端程式語言的核心之一，JavaScript 能夠動態地更新 HTML 和 CSS，從而實現豐富的互動效果和動態內容。最初由 Netscape 在 1995 年開發，JavaScript 現已成為所有現代網頁瀏覽器的標準配備。這種語言既可以在客戶端執行，也可以在伺服器端（例如 Node.js）使用。JavaScript 的語法簡單易學，但功能強大，支持物件導向、函數式和事件驅動的編程風格。隨著各種框架和庫（如 React、Angular、Vue）的出現，JavaScript 在開發複雜單頁應用程式（SPA）和移動應用程式中也扮演著越來越重要的角色。總之，JavaScript 是前端開發者必備的一項技能，也是現代 Web 技術棧的基石。

## 歷史

JavaScript 由 Netscape 的 Brendan Eich 於 1995 年創建，最初名為 Mocha，後來改名為 LiveScript，最終定名為 JavaScript，以便與當時流行的 Java 語言聯繫起來。它首次出現在 Netscape Navigator 2.0 瀏覽器中，旨在為網頁添加互動性。1996 年，JavaScript 被提交給 ECMA 國際組織，並在 1997 年形成了首個標準規範 ECMAScript 1.0。隨後的幾年中，隨著瀏覽器戰爭的結束和標準的不斷發展，JavaScript 漸漸成為 Web 開發的核心技術之一。2009 年，Node.js 的誕生將 JavaScript 帶入了後端開發領域，進一步擴展了其應用範圍。

## 未來

JavaScript 的未來前景廣闊，隨著技術的不斷進步，這種語言將在更多領域發揮重要作用。隨著 WebAssembly 的成熟，JavaScript 將與其他語言一起合作，提升 Web 應用的性能和功能。此外，隨著物聯網（IoT）和邊緣計算的興起，JavaScript 在設備端和嵌入式系統中的應用也將增多。AI 和機器學習的普及，使得 JavaScript 在瀏覽器內部進行高效數據處理和實時分析成為可能。再者，JavaScript 生態系統中的框架和工具，如 React、Vue 和 Angular，將繼續發展，簡化開發過程，提高生產力。總之，JavaScript 將繼續適應和引領技術變革，保持其在軟體開發中的重要地位。

## 如何在網頁上使用 JavaScript

JavaScript 是一種強大的語言，廣泛應用於 Web 開發中。以下是一個簡單的教學文，介紹如何在網頁上使用 JavaScript。

### 1. 基本語法

JavaScript 通常嵌入在 HTML 文件中。你可以將 JavaScript 程式碼放在 `<script>` 標籤內，並放置在 HTML 文件的 `<head>` 或 `<body>` 部分。

### 2. 在 HTML 中添加 JavaScript

**範例 1：內聯 JavaScript**
在 HTML 文件中直接編寫 JavaScript 程式碼：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript 範例</title>
    <script>
      function showMessage() {
        alert("Hello, JavaScript!");
      }
    </script>
  </head>
  <body>
    <h1>我的第一個 JavaScript 頁面</h1>
    <button onclick="showMessage()">點擊我</button>
  </body>
</html>
```

在這個範例中，showMessage 函數定義在 `<script>` 標籤內，並通過按鈕的 onclick 事件觸發。

**範例 2：外部 JavaScript 文件**
將 JavaScript 程式碼放在外部文件中，然後在 HTML 中引用它：

1. 創建一個名為 script.js 的文件，並添加以下內容：

```javascript
function showMessage() {
  alert("Hello, JavaScript!");
}
```

2. 在 HTML 文件中引用這個外部文件：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript 範例</title>
    <script src="script.js"></script>
  </head>
  <body>
    <h1>我的第一個 JavaScript 頁面</h1>
    <button onclick="showMessage()">點擊我</button>
  </body>
</html>
```

使用外部文件可以讓程式碼更易於維護和重用。

**範例 3：操作 DOM（文件物件模型）**
JavaScript 可以用來動態改變網頁內容。以下是一個範例，展示如何使用 JavaScript 改變網頁元素的內容。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM 操作範例</title>
    <script>
      function changeText() {
        document.getElementById("myText").innerHTML = "內容已更新！";
      }
    </script>
  </head>
  <body>
    <h1 id="myText">這是一段文字</h1>
    <button onclick="changeText()">改變文字</button>
  </body>
</html>
```

在這個範例中，changeText 函數使用 document.getElementById 方法來訪問 HTML 元素，並更新其內容。

**範例 4：事件處理**
JavaScript 可以用來處理各種事件，如點擊、鼠標移動等。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>事件處理範例</title>
    <script>
      function changeColor() {
        document.getElementById("myBox").style.backgroundColor = "yellow";
      }
    </script>
  </head>
  <body>
    <div
      id="myBox"
      style="width:100px; height:100px; background-color:blue;"
      onclick="changeColor()"
    ></div>
  </body>
</html>
```

在這個範例中，點擊藍色方框會觸發 changeColor 函數，改變其背景顏色。

## 總結

以上介紹了在網頁上使用 JavaScript 的基本方法，包括內聯和外部 JavaScript、操作 DOM 和事件處理。通過這些基本知識，你可以開始在網頁上添加互動效果，提升用戶體驗。隨著你的學習深入，你會發現 JavaScript 的更多強大功能和應用。

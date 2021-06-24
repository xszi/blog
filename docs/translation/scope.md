# 可视化的JavaScript —— （三）作用域（链）

【三】[JavaScript Visualized: Scope (Chain)](https://dev.to/lydiahallie/javascript-visualized-scope-chain-13pd)


是时候来介绍下作用域（链）了。假设您已经了解执行上下文的基础，不管怎样，我会很快就执行上下文发表一篇文章😃

首先让我们看下面的代码：
```js
const name = "Lydia"
const age = 21
const city = "San Francisco"


function getPersonInfo() {
  const name = "Sarah"
  const age = 22

  return `${name} is ${age} and lives in ${city}`
}

console.log(getPersonInfo())
```
我们调用`getPersonInfo`函数，该函数返回一个包含值`name`，`age`和`city`的字符串`：
`Sarah is 22 and lives in San Francisco`。但是，该`getPersonInfo`函数不包含名为city🤨的变量。它怎么知道的`city`值？

首先，为不同的上下文设置存储空间。我们有默认的全局上下文（`window`在浏览器中，`global`在`Node`），以及一个为`getPersonInfo`调用准备的局部上下文，每个上下文都有一个作用域链。

对于该`getPersonInfo`函数，作用域链看起来像这样:

![89b9buizhevs0jf6djyn](https://user-images.githubusercontent.com/23453305/118239471-683ba700-b4cc-11eb-86ea-9518fb2b6d50.png)


基本上说，作用域链是对对象的“引用链”，这些对象包含对在该执行上下文中可引用的值（和其他作用域）的引用。（⛓：“嘿，这些都是您可以在此上下文中引用的所有值”。）作用域链是在创建执行上下文时创建的，这意味着它是在运行时创建的！

但是，在本文中，我一般不会讨论活动对象或执行上下文，我们只关注**作用域**！在以下示例中，执行上下文中的 键/值对 表示作用域链对变量的引用。

![iala2et7bg9bgdj4c2lg](https://user-images.githubusercontent.com/23453305/118239504-72f63c00-b4cc-11eb-93b2-d05e67fda14c.png)

全局执行上下文的作用域链引用了3个变量：`name`带有值 `Lydia`，`age`带有值`21`，`city`带有值 `San Francisco`。在局部上下文中，我们引用了2个变量：`name`使用值 `Sarah` 和 `age` 使用值 22。

当我们尝试访问`getPersonInfo`函数中的变量时，引擎首先检查局部作用域链。

![xn17f0t54acz8tiq7122](https://user-images.githubusercontent.com/23453305/118241253-85717500-b4ce-11eb-9048-90ddf27c4288.gif)

局部作用域链具有对`name`和`age`的引用！`name`值为`Sarah`，`age`值为`22`。但是现在，当它尝试访问`city`时会发生什么？

为了找到city的值，引擎会“沿作用域链”查找。这意味着引擎不会轻易放弃：它会努力查看是否可以在局部作用域引用的外部作用域（在当前情况下为全局对象）中找到变量`city`的值。

![z9iclg23rmbpts7meoq6](https://user-images.githubusercontent.com/23453305/118242073-7ccd6e80-b4cf-11eb-9e5f-2c4c0e7ab5fd.gif)

在全局上下文中，`city`变量的值声明了`San Francisco`，因此引用了该变量`city`。现在我们有了变量的值，该函数`getPersonInfo`可以返回字符串`Sarah is 22 and lives in San Francisco`🎉。

**您可以使用外部作用域，但不能访问更内部作用域**。可以形象地看，类似一种瀑布：

![image](https://user-images.githubusercontent.com/23453305/118242626-201e8380-b4d0-11eb-8c37-61b0ad4296df.png)

可以更深：

![image](https://user-images.githubusercontent.com/23453305/118242778-43493300-b4d0-11eb-9d72-a4f4a0da3282.png)

让我们以这段代码为例：

![image](https://user-images.githubusercontent.com/23453305/118242863-5825c680-b4d0-11eb-9109-7ade54150298.png)

几乎是一样的，但有一个很大的不同：我们仅在`getPersonInfo`函数内声明`city`，现在不是在全局作用域内。我们没有调用该getPersonInfo函数，因此也没有创建局部上下文。然而，我们试图访问全局作用域内的`name`，`age`和`city`。

![f3wvlo4c3gqf3mve1g0n](https://user-images.githubusercontent.com/23453305/118244813-8c9a8200-b4d2-11eb-8096-016e66baa175.gif)

它抛出一个`ReferenceError`！它在全局作用域中找不到一个叫做city的变量的引用，并没有外部作用域可寻找，也不能去查找内部作用域链。

这样，您可以使用作用域来“保护”变量并重新使用变量。

除了全局和局部作用域外，还有一个块作用域。用`let`，`const`关键字声明的变量的作用域，在最接近的大括号范围内（**{}**）。

```js
const age = 21

function checkAge() {
  if (age < 21) {
    const message = "You cannot drink!"
    return message
  } else {
    const message = "You can drink!"
    return message
  }
} 
```

作用域可视化为：

![image](https://user-images.githubusercontent.com/23453305/118246361-7097e000-b4d4-11eb-9fd4-71865b2f7ec4.png)

这里有一个全局作用域，一个函数作用域和两个块作用域。由于`message`变量的作用域用大括号括起来，因此我们能够对变量进行两次声明。

**快速回顾：**

* 可以将**作用域链**视为可以在当前上下文中访问的值的引用链。
* 作用域可以重用在作用域链外部定义的变量名称，因为它只能访问作用域链外部变量，而不能访问作用域内部变量。

【完】

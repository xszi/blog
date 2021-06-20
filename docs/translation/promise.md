# 可视化的JavaScript —— （七）Promises 和 Async/Await【6.12】

【七】[JavaScript Visualized: Promises & Async/Await](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)

是否曾经因为代码没有按照您预期的方式运行，而不得不对**JS** 代码进行处理 。函数似乎是在随机、不可预测的时间执行的，或者执行被延迟了。您可能正在使用 **ES6** 引入的一个很酷的新功能：**Promises**！

我多年前的好奇心得到了答复，我的不眠之夜再次让我有时间制作一些动画。是时候讨论 **Promise** 了：你**为什么**要使用它们，它们**如何**在“幕后”工作，以及我们如何以最**现代的**方式实现它们？


|       全文分为四个章节：      |
| ------------------------------ |
| 🥳 简介                         |
| ⚡️ Promise 语法                 |
| ♻️ 事件循环：微任务和（宏）任务 |
| 🚀 异步/等待                    |



### 介绍

在编写 JavaScript 时，我们经常要处理依赖其他任务的任务！假设我们想要获取一个图像，压缩它，应用过滤器，然后保存它📸

我们需要做的第一件事就是*获取*我们想要编辑的图像。一个`getImage`函数可以解决这个问题！只有成功加载该图像后，我们才能将该值传递给`resizeImage`函数。成功调整图像大小后，我们希望在`applyFilter`函数中对图像应用过滤器。压缩图像并添加过滤器后，我们要保存图像并让用户知道一切正常！🥳

最后，我们会得到这样的结果：

![img](https://res.cloudinary.com/practicaldev/image/fetch/s---Kv6sJn7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ixceqsql5hpdq8txx43s.png)

嗯……注意到这里有什么吗？虽然它……*很好*，但不是很好。我们最终得到了许多依赖于前一个回调函数的嵌套回调函数。这通常被称为[*回调地狱*](http://callbackhell.com/)，因为我们最终会得到大量嵌套的回调函数，这使得代码很难阅读！

幸运的是，我们现在有了一个叫做**promises **的东西来帮助我们！让我们来看看 **Promise** 是什么，以及它们如何在这样的情况下帮助我们！😃



###  Promise 语法

ES6 引入了**Promise**。在许多教程中，您将阅读以下内容：

> “Promise是一个值的占位符，可以在未来的某个时间解决或拒绝”

是的...这个解释从来没有让我更清楚。事实上，它只是让我觉得 **Promise** 是一种奇怪的、模糊的、不可预测的魔法。因此，让我们看看都有哪些**Promise** 。

我们可以创建一个**Promise** ，使用一个`Promise`接收回调的构造函数。好的，让我们试试吧！

![替换文字](https://res.cloudinary.com/practicaldev/image/fetch/s--phTVdCKA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/79zi452hphe7ecylhozy.gif)

等等，刚刚返回了什么？

一个`Promise`是一个包含**状态**( `[[PromiseStatus]]`) 和**值**( `[[PromiseValue]]`) 的对象。在上面的例子中，你可以看到，值`[[PromiseStatus]]`的值是`"pending"`，`[[PromiseValue]]`的值是`undefined`。

别担心 - 你永远不必与这个对象交互，你甚至不能访问`[[PromiseStatus]]`和`[[PromiseValue]]`属性！但是，在使用 **Promise** 时，这些属性的值很重要。

`PromiseStatus`的值，**状态**，可以是三个值之一：

- ✅ `fulfilled`：承诺已`resolved`。一切顺利，**Promise** 内没有出现错误🥳
- ❌ `rejected`：**Promise** 已`rejected`。出事了..
- ⏳ `pending`：**promise** 既没有解决也没有拒绝（还），**promise** 还是`pending`.

这一切听起来都很棒，但是什么时候 **promise** 状态是`"pending"`，`"fulfilled"`或`"rejected"`？为什么这种状态很重要？

在上面的例子中，我们只是将简单的回调函数`() => {}`传递给`Promise`构造函数。然而，这个回调函数实际上接收两个参数。第一个参数的值，通常称为`resolve` 或者 `res`，是当 `Promise ` **resolve**时要调用的方法。第二个参数的值，通常称为`reject`或者 `rej`，是当 `Promise ` **reject**时要调用的值方法，此时出现了问题。

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--9A_mOYMP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/duen4peq0bdr55cka5ya.png)

让我们试着看看当我们调用`resolve `或`reject`方法时会被记录下来！在我的示例中，我调用了`resolve`方法`res`和`reject`方法 `rej`。

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--qKIq-sYt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/z0b9v0h7aiq073l5tl2l.gif)

我们终于知道如何摆脱`"pending"`状态和`undefined`值了！如果我们调用了`resolve`方法，**promise**的**状态**是`"fulfilled"`，如果我们调用了`rejecte`方法，**promise**的状态是`"rejected`"。

**promise**的值，`[[PromiseValue]]`，是我们作为参数传递给`resolved`或`rejected`方法的。

>有趣的事实，我让 Jake Archibald 校对了这篇文章，他实际上指出 Chrome 中存在一个错误，当前显示状态为`"resolved"`而不是`"fulfilled"`。感谢[Mathias Bynens，](https://twitter.com/mathias)它现在已在 Canary 中修复！🥳🕺🏼

![unknown tweet media content](https://res.cloudinary.com/practicaldev/image/fetch/s--kZ3BKUHA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://pbs.twimg.com/media/EVJqgKLUwAEocsG.png)

好的，现在我们对如何控制那个模糊的`Promise`对象有了更好的了解。但是它有什么用呢？

在介绍部分中，我展示了一个示例，其中我们获取图像、压缩它、应用文件管理器并保存它！最终，这最终成为一个嵌套的回调混乱。

幸运的是，**Promise** 可以帮助我们解决这个问题！首先，让我们重写整个代码块，让每个函数返回一个`Promise`。

如果图像已加载并且一切正常，我们用加载的图像解决**Promise** ！否则，如果加载文件时某处出现错误，我们**拒绝**发生错误的**Promise** 。

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--r9xngcNz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/iebp0rzfnfqsrmmjplme.png)

让我们看看当我们在终端中运行它时会发生什么！

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--uERkfSWf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/wsu5nn26dp4elcwh764m.gif)

正如我们预期的那样，一个带有解析数据值的**Promise** 被返回。

但是……现在怎么办？我们不关心整个 **Promise** 对象，我们只关心数据的值！幸运的是，有一些内置方法可以获取 **promise** 的值。对于 promise，我们可以附加 3 个方法：

- `.then()`：在**promise** 解决后被调用。
- `.catch()`：在**promise** 被拒绝*被调用。
- `.finally()`：*总是*被调用，无论**promise** 已解决还是被拒绝。

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--19tIvFJQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/mu1aqqnyfjsfon5hwrtw.png)

该`.then`方法接收传递该`resolve`方法的值。

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--DZld0c-0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/11vxhn9cun7stpjbdi80.gif)

该`.catch`方法接收传递`rejected`方法的值

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--e9SZHcPk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/v5y24jz4u89flazvdyn4.gif)

最后，我们有了由 **Promise** 解析的值，而没有整个 **Promise** 对象！我们现在可以用这个值做任何我们想做的事情。

当您知道**Promise** 将始终解决或始终拒绝时，您可以编写`Promise.resolve`或`Promise.reject`，使用您想要拒绝或解决**Promise** 的值！

![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--61Gva3Ze--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/90hxwjfadzslvdbkr4l8.png)

你会经常在下面的例子中看到这种语法😄

在`getImage`示例中，我们最终不得不嵌套多个回调以运行它们。幸运的是，`.then`处理程序可以帮助我们解决这个问题！🥳

`.then`本身的结果是一个**Promise** 值。这意味着我们可以根据需要链接任意数量的`.then`：前一个`then`回调的结果将作为参数传递给下一个`then`回调！

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--X8h-NDc2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/i6busbetmoya9vny2eku.png)

在`getImage`示例的情况下，我们可以链接多个`then`回调，以便将处理后的图像传递给下一个函数！我们得到了一个干净的`then`链，而不是以许多嵌套的回调结束。

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--e1nVrqe1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/u9l3lxwxlxgv2edv79xh.png)

这种语法看起来比嵌套回调更好。

### 微任务和（宏）任务

现在我们对如何创建**Promise** 以及如何从**Promise** 中提取值有了更好的了解。让我们向脚本添加更多代码，然后再次运行它：

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--uNG7sXon--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ey4ubnv5yjgi6hbh97xq.gif)

等等，我们看发生了什么？

首先，`Start!`登录。我们可以看到在第一行记录：`console.log('Start!')`！但是，记录的第二个值是`End!`，而*不是*已解决的**Promise** 的值！只有在`End!`被记录之后，**Promise** 的值才会被记录。这里发生了什么？

我们终于看到了 **Promise** 的真正力量！🚀 虽然 JavaScript 是单线程的，但我们可以使用`Promise`添加异步行为。

我们以前没见过吗？🤔 在[JavaScript 事件循环中](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)，我们不能也使用浏览器原生的方法`setTimeout`来创建某种异步行为吗？

是的！然而，在事件循环中，实际上有两种类型的队列：（**宏）任务队列**（或简称为**任务队列**）和 **微任务队列**。**（宏）任务队列**  用于**（宏）任务**，**微任务**队列 用于 **微任务**。

那么什么是**（宏）任务**，什么是**微**任务？虽然有一些文章比我在这里介绍的要多，但最常见的如下表所示！

|      /      |                          举例                           |
| ---------- | ------------------------------------------------------- |
| （宏）任务   | `setTimeout`, `setInterval`,`setImmediate`              |
| 微任务      | `process.nextTick`, `Promise callback`,`queueMicrotask` |

我们在微任务列表中看到`Promise`了！😃 当 一个`Promise`解析并调用它的`then()`, `catch()`或 `finally()` 方法时，该方法中的回调会被添加到**微任务队列中**！这意味着`then()`, `catch()`或`finally()`方法中的回调不会立即执行，实质上是向我们的 JavaScript 代码添加了一些异步行为！

所以，什么时候`then()`，`catch()`或者`finally()`回调执行？事件循环为任务赋予不同的优先级：

1. 当前在**调用堆栈**中的所有函数都被执行。当它们返回一个值时，它们会从堆栈中弹出。
2. 当调用栈为空时，*所有*排队的**微任务**都被一个一个的弹出到调用栈中，并被执行！（微任务本身也可以返回新的微任务，有效地创建了一个无限的微任务循环😬）
3. 如果调用堆栈和微任务队列都为空，则事件循环检查（宏）任务队列中是否还有任务。如果有，任务会被弹出到调用堆栈上，执行，然后弹出！

让我们看一个简单的例子，简单地使用：

- `Task1`：立即添加到调用堆栈的函数，例如通过在我们的代码中立即调用它。
- `Task2`, `Task3`, `Task4`: 微任务，例如`Promise then`回调，或添加了`queueMicrotask`.
- `Task5`, `Task6`: 一个（宏）任务，例如一个`setTimeout`或`setImmediate`回调

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--05Fi8vBq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/42eatw03fcha0e1qcrf0.gif)

首先，`Task1`返回一个值并从调用堆栈中弹出。然后，引擎检查在微任务队列中排队的任务。一旦所有任务都被放入调用堆栈并最终弹出，引擎就会检查（宏）任务队列中的任务，这些任务被弹出到调用堆栈中，并在它们返回值时弹出。

让我们用一些真正的代码来使用它！

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--fnbqqf1d--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/g61wwyi8wchk2hpzeq4u.png)

在这段代码中，我们有宏任务`setTimeout`和微任务承诺`then()`回调。一旦引擎到达`setTimeout`功能。让我们一步一步地运行这段代码，看看记录了什么！

> 快速参考 - 在以下示例中，我将展示像`console.log`,`setTimeout`和`Promise.resolve`被添加到调用堆栈中的方法。它们是内部方法，实际上不会出现在堆栈跟踪中 - 所以如果您正在使用调试器并且在任何地方都看不到它们，请不要担心！它只是为了解释这个概念更容易而无需添加一堆样板代码🙂



在第一行，引擎遇到`console.log()`方法。它被添加到调用堆栈中，之后它将值记录`Start!`到控制台。该方法从调用堆栈中弹出，引擎继续。

![img](https://res.cloudinary.com/practicaldev/image/fetch/s---Bt6DKsn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/6cbjuexvy6z9ltk0bi18.gif)

引擎遇到该`setTimeout`方法，该方法被弹出到调用堆栈中。该`setTimeout`方法是浏览器本机的：它的回调函数 ( `() => console.log('In timeout')`) 将被添加到 Web API，直到计时器完成。尽管我们`0`为计时器提供了值，但回调仍然首先被推送到 Web API，然后它被添加到**（宏）任务队列中**：`setTimeout`是一个宏任务！

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--6NSYq-nO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/yqoemb6f32lvovge8yrp.gif)

引擎遇到`Promise.resolve()`方法。该`Promise.resolve()`方法被添加到调用堆栈中，之后使用 value 解析`Promise!`。它的`then`回调函数被添加到**微任务队列中**。

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--us8FF30N--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/6wxjxduh62fqt531e2rc.gif)

引擎遇到`console.log()`方法。它会立即添加到调用堆栈中，然后将值记录`End!`到控制台，从调用堆栈中弹出，然后引擎继续运行。

引擎现在看到调用堆栈是空的。由于调用栈是空的，它会检查微任务**队列中**是否有排队的任务！是的，`Promise then`回调正在等待轮到它！它被弹出到调用堆栈中，之后它会记录`Promise`的解析值：`Promise`在这种情况下是字符串。

![](https://res.cloudinary.com/practicaldev/image/fetch/s--5iH5BNWm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/lczn4fca41is4vpicr6w.gif)



引擎看到调用堆栈是空的，因此它将再次检查微任务队列以查看任务是否已排队。不，微任务队列全是空的。

是时候检查**（宏）任务队列了**：`setTimeout`回调仍在那里等待！该`setTimeout`回调被弹出到调用堆栈。回调函数返回`console.log`记录字符串的方法`"In timeout!"`。该`setTimeout`回调弹出调用堆栈。

最后，一切都完成了！🥳 再来看我们之前看到的输出便不是那么出人意料了。



### 异步等待

ES7 引入了一种在 **JavaScript** 中添加异步行为的新方法，并使得使用 **Promise** 更容易！通过引入`async`和`await`关键字，我们可以创建隐式返回**Promise** 的**异步**函数。但是..我们怎么能做到这一点？😮

此前，我们看到，我们可以明确地创建使用`Promise`的对象，无论是通过输入`new Promise(() => {})`，`Promise.resolve`或`Promise.reject`。

我们现在可以创建*隐式*返回对象`Promise`的异步函数，而不是显式使用对象！这意味着我们不再需要自己编写任何`Promise`对象。

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--5ED_HyNC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/72lqrcvy9lc8ehbpitd0.png)

尽管**async**函数隐式返回 **promise** 的事实非常棒，但`async`使用`await`关键字时可以看到函数的真正威力！使用`await`关键字，我们可以在等待ed 值返回已解决的承诺时*暂停*异步函数`await`。如果我们想获得这个已解析的 **promise** 的值，就像我们之前对`then()`回调所做的那样，我们可以将变量分配给`await`的 **promise** 值！

那么，我们可以*挂起*一个异步函数吗？好吧，很好，但是……这到底是什么意思？

让我们看看当我们运行以下代码块时会发生什么：

![替换文字](https://res.cloudinary.com/practicaldev/image/fetch/s--aOWmZxnV--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e5duygomitj9o455107a.gif)

这里发生了什么？

![替换文字](https://res.cloudinary.com/practicaldev/image/fetch/s--bfscMU3t--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/d27d7xxiekczftjyic4b.gif)

首先，引擎遇到一个`console.log`. 它被弹出到调用堆栈中，然后`Before function!`被记录。

![替换文字](https://res.cloudinary.com/practicaldev/image/fetch/s--wN7yFTnt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9wqej2269vmntfcuxs9t.gif)

然后，我们调用 async 函数`myFunc()`，然后`myFunc`运行函数体。在函数体的第一行，我们调用另一个`console.log`，这次是记录字符串 `In function!`。`console.log`将被添加到调用堆栈，记录该值，并得到弹出。

![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--lX9JfreE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/lch6lutxnl88j0durpyh.gif)

函数体继续执行，让我们进入第二行。最后，我们看到一个`await`关键字！🎉

发生的第一件事是等待的值被执行：`one`在这种情况下是函数。它被弹出到调用堆栈上，并最终返回一个已解决的**promise** 。一旦**promise** 解决并返回一个值`one`，引擎就会遇到`await`关键字。

遇到`await`关键字时，`async`函数会*暂停*。✋🏼 函数体的执行**被暂停**，其余的异步函数在*微*任务中运行，而不是在常规任务中运行！

![替换文字](https://res.cloudinary.com/practicaldev/image/fetch/s--UC78HoCO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/b6l3psgewvtrtmrr60tg.gif)

现在异步函数`myFunc`在遇到`await`关键字时被挂起，引擎跳出异步函数并继续在调用异步函数的执行上下文中执行代码：在这种情况下为**全局执行上下文**！🏃🏽‍♀️

![替换文字](https://res.cloudinary.com/practicaldev/image/fetch/s--V8u36kEG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/hlhrtuspjyrstifubdhs.gif)

最后，在全局执行上下文中没有更多的任务要运行了！事件循环检查是否有还有微任务排队：确实有！`async myFunc`函数`one`解析后的值在排队。`myFunc`被弹回调用堆栈，并在之前停止的地方继续运行。

变量`res`最终得到了它的值，即`one`返回的已解析**promise**的值！在这种情况下，`console.log`记录`res`的字符串值`One!`。`One!`记录到控制台后并从调用堆栈中弹出！😊

最后，一切都完成了！您是否注意到`async`函数与 **promise**的 `then`有何不同？该`await`关键字*暂停*的`async`功能，而**promise**会一直存在于我们已经使用过的`then`来准备执行！

【完】


(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{385:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"关于node-js的20个面试题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于node-js的20个面试题"}},[t._v("#")]),t._v(" 关于Node.js的20个面试题")]),t._v(" "),e("p",[e("strong",[t._v("文章出处")]),t._v("："),e("a",{attrs:{href:"https://www.codingdefined.com/2017/04/top-20-interview-questions-on-nodejs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Top 20 Interview Questions on Node.js"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("在这篇文章中，我们将讨论有关Node.js的二十大面试问题。如果您是一名"),e("strong",[t._v("MEAN")]),t._v("（MongoDB、Express、AngularJS 和 Node.js的首字母缩写）堆栈开发人员，并且希望了解有关Node.js的一些最佳面试问题，您来到这既是最佳选择。Node.js的面试问题仅是为了让您了解在面试过程中可能遇到的问题的特点。")]),t._v(" "),e("h4",{attrs:{id:"q1-什么是node-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q1-什么是node-js"}},[t._v("#")]),t._v(" Q1: 什么是Node.js？")]),t._v(" "),e("p",[t._v("Node.js是用于构建快速，可扩展的网络应用程序的平台。与其他服务器端语言相比，它的优势在于它使用事件驱动的非阻塞I / O模型，从而使其轻巧高效。")]),t._v(" "),e("h4",{attrs:{id:"q2-您能解释一下node-js的工作原理吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q2-您能解释一下node-js的工作原理吗"}},[t._v("#")]),t._v(" Q2：您能解释一下Node.js的工作原理吗？")]),t._v(" "),e("p",[t._v("它使用Google V8 Javascript引擎执行代码。它包含用于文件，套接字（socket）和HTTP通信的内置异步"),e("strong",[t._v("I / O")]),t._v("库。Node.js封装了"),e("strong",[t._v("libuv")]),t._v("以处理异步事件。")]),t._v(" "),e("h4",{attrs:{id:"q3-node-js真的是单线程的吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q3-node-js真的是单线程的吗"}},[t._v("#")]),t._v(" Q3：Node.js真的是单线程的吗？")]),t._v(" "),e("p",[t._v("Node.js在单线程上运行，但是使用非阻塞I / O调用使其可以支持多线程并发连接。这意味着Node不会并行处理请求，而且实际上后端要花费大量时间来处理并行运行。")]),t._v(" "),e("h4",{attrs:{id:"q4-您能解释一下node-js中的异步方法吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q4-您能解释一下node-js中的异步方法吗"}},[t._v("#")]),t._v(" Q4：您能解释一下Node.js中的异步方法吗？")]),t._v(" "),e("p",[t._v("Node.js使用事件循环和回调函数异步运行。事件循环是一种可处理所有外部事件的机制，并且会将外部事件转换为回调函数。它在适当的时间调用所有事件处理程序。因此，这意味着在执行单个请求时，它会在后端执行很多操作，因此当前请求或即将到来的请求不会花费很多时间。")]),t._v(" "),e("p",[e("strong",[t._v("查看更多")]),t._v("："),e("a",{attrs:{href:"https://www.codingdefined.com/2014/06/nodejs-asynchronous-approach.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Globals in Nodejs"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"q5-中的异步方法。您能解释一下node-js中的globals吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q5-中的异步方法。您能解释一下node-js中的globals吗"}},[t._v("#")]),t._v(" Q5：中的异步方法。您能解释一下Node.js中的"),e("strong",[t._v("Globals")]),t._v("吗？")]),t._v(" "),e("p",[t._v("全局对象，进程和缓冲区统称为"),e("strong",[t._v("Globals")]),t._v("。")]),t._v(" "),e("p",[t._v("Global：它是一个全局名称空间对象\nProcess：它也是一个全局对象，但它提供了将同步功能转换为异步回调的基本功能。\nBuffer：原始数据存储在Buffer类的实例中。")]),t._v(" "),e("h4",{attrs:{id:"q6-node-js中下划线的用途是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q6-node-js中下划线的用途是什么"}},[t._v("#")]),t._v(" Q6：Node.js中下划线的用途是什么？")]),t._v(" "),e("p",[t._v('要访问最后一个表达式，我们必须使用"_"字符')]),t._v(" "),e("p",[e("strong",[t._v("查看更多")]),t._v("："),e("a",{attrs:{href:"https://www.codingdefined.com/2014/06/use-of-underscore-in-nodejs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Use of Underscore (_) in Nodejs "),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"q7-您可以用代码解释下在node-js中创建http服务器吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q7-您可以用代码解释下在node-js中创建http服务器吗"}},[t._v("#")]),t._v(" Q7：您可以用代码解释下在Node.js中创建Http服务器吗？")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("requestListener")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeHead")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello You\\n'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" server "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requestListener"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The port where you want to start with.")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("h4",{attrs:{id:"q8-如何在node-js中加载html"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q8-如何在node-js中加载html"}},[t._v("#")]),t._v(" Q8：如何在Node.js中加载HTML？")]),t._v(" "),e("p",[t._v("要在Node.js中加载HTML，我们必须将"),e("code",[t._v("Content-type")]),t._v("从"),e("code",[t._v("text / plain")]),t._v("更改为"),e("code",[t._v("text / html")]),t._v("。")]),t._v(" "),e("p",[e("strong",[t._v("查看更多")]),t._v("："),e("a",{attrs:{href:"https://www.codingdefined.com/2014/06/loading-html-in-nodejs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Loading HTML in NodeJS"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"q9-您能解释一下node-js与ajax之间的区别吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q9-您能解释一下node-js与ajax之间的区别吗"}},[t._v("#")]),t._v(" Q9：您能解释一下Node.js与Ajax之间的区别吗？")]),t._v(" "),e("p",[e("strong",[t._v("Node.js")]),t._v("和"),e("strong",[t._v("Ajax")]),t._v("之间的区别在于Ajax是客户端技术，而Nodejs是服务器端技术。Ajax用于更新页面内容而不刷新页面，而Nodejs用于开发服务器软件。Nodejs由服务器执行，而Ajax由浏览器执行。")]),t._v(" "),e("h4",{attrs:{id:"q10-您能解释一下node-js中readfile与createreadstream之间的区别吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q10-您能解释一下node-js中readfile与createreadstream之间的区别吗"}},[t._v("#")]),t._v(" Q10：您能解释一下Node.js中"),e("strong",[t._v("readFile")]),t._v("与"),e("strong",[t._v("createReadStream")]),t._v("之间的区别吗？")]),t._v(" "),e("p",[e("strong",[t._v("readFile")]),t._v(" —— 在将文件提供给用户之前，它将完全读取文件到内存中。\n"),e("strong",[t._v("createReadStream")]),t._v(" —— 它将按事先指定的大小读取文件。")]),t._v(" "),e("p",[e("strong",[t._v("查看更多")]),t._v("："),e("a",{attrs:{href:"https://www.codingdefined.com/2014/07/readfile-vs-createreadstream-in-nodejs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("readFile Vs createReadStream in Nodejs"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"q11-node-js上下文中的回调是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q11-node-js上下文中的回调是什么"}},[t._v("#")]),t._v(" Q11：Node.js上下文中的"),e("strong",[t._v("回调")]),t._v("是什么？")]),t._v(" "),e("p",[e("strong",[t._v("回调")]),t._v("等效于在一个在给定任务完成时调用函数。Node.js大量使用了回调，所有API的编写方式都支持回调的方式。使用回调的优点是它使Node.js具有高度可伸缩性，即无需等待任何功能完成即可处理大量请求。")]),t._v(" "),e("h4",{attrs:{id:"q12-什么是回调地狱-如何避免"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q12-什么是回调地狱-如何避免"}},[t._v("#")]),t._v(" Q12：什么是回调地狱？如何避免？")]),t._v(" "),e("p",[t._v("回调地狱意味着大量嵌套的回调，使代码难以阅读且难以维护。为了避免发生回调，应该使用模块化，这意味着将回调分为独立的函数。避免回调地狱的另一种方法是使用 Promises，它允许错误冒泡和链式调用。")]),t._v(" "),e("h4",{attrs:{id:"q13-什么是事件循环和事件触发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q13-什么是事件循环和事件触发"}},[t._v("#")]),t._v(" Q13：什么是事件循环和事件触发？")]),t._v(" "),e("p",[t._v("Node.js在事件和回调的帮助下支持并发，即使它是单线程应用程序也是如此。Node线程保持事件循环，每当有任务完成时，该线程都会触发相应的事件。")]),t._v(" "),e("p",[t._v("每当完成任何任务或发生任何错误，添加任何新的侦听器或删除任何侦听器时，"),e("strong",[t._v("EventEmitter")]),t._v("都会触发一个事件。它提供诸如on和emit之类的属性，其中on用于绑定功能，emit用于触发事件。")]),t._v(" "),e("h4",{attrs:{id:"q14-node-js中存在几种类型的流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q14-node-js中存在几种类型的流"}},[t._v("#")]),t._v(" Q14：Node.js中存在几种类型的流？")]),t._v(" "),e("p",[t._v("Node.js中存在四种流，它们是 Readable，  Writable，  Duplex 和 Transform。Readable用于读操作，Writable用于写操作，Duplex 用于读和写操作，而Transform是双工流的一种类型，其基于输入计算输出。")]),t._v(" "),e("h4",{attrs:{id:"q15-为什么使用buffer-缓冲区-而不是二进制字符串来处理二进制数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q15-为什么使用buffer-缓冲区-而不是二进制字符串来处理二进制数据"}},[t._v("#")]),t._v(" Q15：为什么使用"),e("strong",[t._v("Buffer")]),t._v("（缓冲区）而不是二进制字符串来处理二进制数据？")]),t._v(" "),e("p",[t._v("纯JavaScript不能很好地处理直接的二进制数据。由于Node.js服务器必须处理TCP流以读取和写入数据，因此二进制字符串使用起来会很麻烦，因为它非常慢并且容易损坏。这就是为什么始终建议使用缓冲区而不是二进制字符串来处理二进制数据的原因。")]),t._v(" "),e("h4",{attrs:{id:"q16-如何正常关闭node-js服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q16-如何正常关闭node-js服务器"}},[t._v("#")]),t._v(" Q16：如何正常关闭Node.js服务器？")]),t._v(" "),e("p",[t._v("我们可以使用称为SIGTERM或SIGINT的用于程序终止的通用信号来正常关闭Node.js服务器。我们需要调用SIGTERM或SIGINT，它们将终止程序并清理程序使用的资源。")]),t._v(" "),e("h4",{attrs:{id:"q17-什么是node-js中的错误优先回调"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q17-什么是node-js中的错误优先回调"}},[t._v("#")]),t._v(" Q17：什么是Node.js中的错误优先回调？")]),t._v(" "),e("p",[t._v("“错误优先”回调是Node.js回调的标准协议，它有一个简单的规则，即回调函数的第一个参数应为错误对象。如果错误参数不为null，则操作不成功，发生了错误；如果错误参数为null，则操作成功。")]),t._v(" "),e("h4",{attrs:{id:"q18-process-nexttick-和-setimmediate-之间有什么差异"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q18-process-nexttick-和-setimmediate-之间有什么差异"}},[t._v("#")]),t._v(" Q18："),e("code",[t._v("process.nextTick()")]),t._v(" 和 "),e("code",[t._v("setImmediate()")]),t._v(" 之间有什么差异？")]),t._v(" "),e("p",[e("code",[t._v("process.nextTick()")]),t._v("将执行动作推迟传递到事件循环的下一次，或者说一旦正在进行的事件循环执行完成就执行回调函数，而"),e("code",[t._v("setImmediate()")]),t._v("是在事件循环的下一个周期执行回调，并返回事件循环以执行任何"),e("strong",[t._v("I / O")]),t._v("操作。")]),t._v(" "),e("blockquote",[e("p",[t._v("The difference between process.nextTick() and setImmediate() is that process.nextTick() defers the execution of an action till the next pass around the event loop or it simply calls the callback function once the ongoing execution of the event loop is finished whereas setImmediate() executes a callback on the next cycle of the event loop and it gives back to the event loop for executing any I/O operations.")])]),t._v(" "),e("h4",{attrs:{id:"q19-如何在node-js中监视文件的修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q19-如何在node-js中监视文件的修改"}},[t._v("#")]),t._v(" Q19：如何在Node.js中监视文件的修改？")]),t._v(" "),e("p",[t._v("我们可以利用 "),e("code",[t._v("File System watch()")]),t._v(" 函数来监视文件的更改。")]),t._v(" "),e("h4",{attrs:{id:"q20-如何解决node-js中的-内存不足处理异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q20-如何解决node-js中的-内存不足处理异常"}},[t._v("#")]),t._v(" Q20：如何解决Node.js中的“内存不足处理异常”？")]),t._v(" "),e("p",[t._v("为了解决Node.js中的内存不足处理异常，我们需要增加"),e("code",[t._v("max-old-space-size")]),t._v("。默认情况下，"),e("code",[t._v("max-old-space-size")]),t._v("的最大大小为512 mb，您可以通过命令行 "),e("code",[t._v("node --max-old-space-size = 1024 file.js")]),t._v(" 来增加。")]),t._v(" "),e("p",[t._v("【完】")])])}),[],!1,null,null,null);s.default=n.exports}}]);
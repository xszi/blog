(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{377:function(o,e,t){"use strict";t.r(e);var s=t(42),a=Object(s.a)({},(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h1",{attrs:{id:"使用-chrome-devtools-高效调试-javascript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-chrome-devtools-高效调试-javascript"}},[o._v("#")]),o._v(" 使用 Chrome DevTools 高效调试 JavaScript")]),o._v(" "),t("p",[t("strong",[o._v("文章出处：")]),o._v(" "),t("a",{attrs:{href:"https://lo-victoria.com/debugging-javascript-efficiently-with-chrome-devtools",target:"_blank",rel:"noopener noreferrer"}},[o._v("Debugging JavaScript Efficiently with Chrome DevTools"),t("OutboundLink")],1)]),o._v(" "),t("p",[o._v("你还在输入"),t("code",[o._v("console.log()")]),o._v("来调试你的项目吗？在本文中，让我们学习如何使用 Chrome DevTools 高效地调试JavaScript。")]),o._v(" "),t("h2",{attrs:{id:"什么是-chrome-开发者工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-chrome-开发者工具"}},[o._v("#")]),o._v(" 什么是 Chrome 开发者工具？")]),o._v(" "),t("p",[o._v("谷歌 Chrome 浏览器提供了一个内置的开发者工具（又名 DevTools），帮助开发者直接在浏览器上编辑他们的代码，添加断点来检测问题并更快地调试他们的代码。")]),o._v(" "),t("h3",{attrs:{id:"devtools-面板介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#devtools-面板介绍"}},[o._v("#")]),o._v(" DevTools 面板介绍")]),o._v(" "),t("p",[o._v("DevTools UI 共有 8 个面板。本文将主要介绍 Sources 面板，因为这是我们调试的地方。")]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1616477191722/b0YeepqBL.png?auto=compress",alt:"图像.png"}})]),o._v(" "),t("p",[o._v("这是每个面板负责的内容的快速概述。")]),o._v(" "),t("ol",[t("li",[o._v("Elements：检查和编辑 DOM 节点和样式属性")]),o._v(" "),t("li",[o._v("Console：查看和运行 JavaScript 代码")]),o._v(" "),t("li",[o._v("Sources：调试 JavaScript、添加断点等。")]),o._v(" "),t("li",[o._v("Network：查看和调试与网络相关的活动")]),o._v(" "),t("li",[o._v("Performance：分析速度和优化")]),o._v(" "),t("li",[o._v("Memory：跟踪内存使用情况并修复相关问题")]),o._v(" "),t("li",[o._v("Application：检查localStorage、sessionStorage、cookies、IndexDB等。")]),o._v(" "),t("li",[o._v("Security：调试证书等安全问题")]),o._v(" "),t("li",[o._v("Lighthouse：审核应用程序质量、性能、可访问性、SEO 等。")])]),o._v(" "),t("h3",{attrs:{id:"使用-devtools-键盘快捷键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-devtools-键盘快捷键"}},[o._v("#")]),o._v(" 使用 DevTools（键盘快捷键）")]),o._v(" "),t("p",[o._v("要打开 DevTools Elements 面板，请按"),t("code",[o._v("Command + Option + C")]),o._v("Mac 和"),t("code",[o._v("CTRL + SHIFT + C")]),o._v("任何其他操作系统。")]),o._v(" "),t("p",[o._v("要打开 DevTools Console 面板，请按"),t("code",[o._v("Command + Option + J")]),o._v("Mac 和"),t("code",[o._v("CTRL + SHIFT + J")]),o._v("任何其他操作系统。")]),o._v(" "),t("h2",{attrs:{id:"如何使用-devtools-调试-javascript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-devtools-调试-javascript"}},[o._v("#")]),o._v(" 如何使用 DevTools 调试 JavaScript")]),o._v(" "),t("p",[o._v("现在我们对 DevTools 有了一个快速的概述，让我们讨论一些有用的调试策略来更有效地调试您的代码，以及如何使用 DevTools 实现这一目标。")]),o._v(" "),t("h3",{attrs:{id:"_1-添加断点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加断点"}},[o._v("#")]),o._v(" 1. 添加断点")]),o._v(" "),t("p",[o._v("断点很有用，因为它们可以暂停您的代码，因此您可以逐行检查并在准备好后选择继续。这对于大型代码库或难以查明错误来源时尤其有用。")]),o._v(" "),t("h4",{attrs:{id:"添加断点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加断点"}},[o._v("#")]),o._v(" 添加断点")]),o._v(" "),t("p",[o._v("在这个例子中，让我们添加一个代码行断点。")]),o._v(" "),t("ol",[t("li",[t("p",[o._v("要添加断点，请打开 DevTools Sources Panel。")])]),o._v(" "),t("li",[t("p",[o._v("点击左侧导航面板，选择要添加断点的 .js 文件。.js 文件的代码将出现在中间面板中。")])])]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1616488504562/hhxbyNsul.png?auto=compress",alt:"捕获.PNG"}})]),o._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[o._v("右键单击要添加断点的行，然后选择“添加断点”。")])]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1616489474357/hWeIILJwj.png?auto=compress",alt:"图像.png"}})]),o._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[o._v("现在，当我运行该函数时，它将在执行 POST 请求之前暂停。我可以看到"),t("code",[o._v("data")]),o._v("正在post 的内容。")])]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1616489703683/daDoMukjV.png?auto=compress",alt:"图像.png"}})]),o._v(" "),t("p",[o._v("暂停然后检查代码是一种高效的调试方式，而不是"),t("code",[o._v("console.log(data)")]),o._v("重新加载页面。")]),o._v(" "),t("p",[o._v("一切正常后，单击页面上的恢复按钮以取消暂停。")]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1616489902697/cEzaC8n5r.png?auto=compress",alt:"图像.png"}})]),o._v(" "),t("p",[o._v("您可以使用 DevTools 添加多种类型的断点。下图是所有可用断点类型的摘要。")]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1616485987682/0yJcG4QMu.png?auto=compress",alt:"图像.png"}})]),o._v(" "),t("p",[o._v("有关如何添加每种类型的断点的更多详细信息，请查看"),t("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints",target:"_blank",rel:"noopener noreferrer"}},[o._v("文档"),t("OutboundLink")],1),o._v("。")]),o._v(" "),t("h3",{attrs:{id:"_2-查看-更改本地、闭包和全局属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看-更改本地、闭包和全局属性"}},[o._v("#")]),o._v(" 2. 查看/更改本地、闭包和全局属性")]),o._v(" "),t("p",[o._v("当应用程序暂停时，您可以查看和编辑本地、闭包和全局属性。例如，您有一个错误，它没有为变量返回正确的值，因此您想在函数的某个点检查它的值。")]),o._v(" "),t("p",[o._v("添加断点后，您只需转到右侧面板即可。展开“scope”窗格并查看变量值。如您所见，此面板提供了许多可用于修复错误的信息。")]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1616490450627/imwmQpM4k.png?auto=compress",alt:"image.png"}})]),o._v(" "),t("p",[o._v("如果要使用其他值测试该函数，可以双击变量进行编辑。")]),o._v(" "),t("h3",{attrs:{id:"_3-创建、保存和运行代码片段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建、保存和运行代码片段"}},[o._v("#")]),o._v(" 3. 创建、保存和运行代码片段")]),o._v(" "),t("p",[o._v("另一个有效的策略是使用"),t("strong",[o._v("snippets")]),o._v("(片段)。"),t("strong",[o._v("snippets")]),o._v("允许您在应用程序的任何部分轻松执行和重用脚本。您可以通过单击左侧面板上的"),t("strong",[o._v("snippets")]),o._v("菜单来添加代码段。")]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1616491990762/xK0UDbZ_5.png?auto=compress",alt:"图像.png"}})]),o._v(" "),t("p",[o._v("在 Snippets 面板上，单击**+ New Snippets**并在中间面板中编写代码，如下图所示。")]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1616492150166/pSzP9xC7K.png?auto=compress",alt:"图像.png"}})]),o._v(" "),t("p",[o._v("然后"),t("code",[o._v("Command + S")]),o._v(" (Mac) 或"),t("code",[o._v("CTRL + S")]),o._v("(任何其他操作系统上)保存您的代码片段。")]),o._v(" "),t("p",[o._v("要运行您的代码段，您可以执行以下任一操作：")]),o._v(" "),t("ol",[t("li",[o._v("右键单击代码片段，然后单击“run”")])]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1616499087193/8YhJWZ3lp.png?auto=compress",alt:"图像.png"}})]),o._v(" "),t("p",[o._v("2)"),t("code",[o._v("Command + Enter")]),o._v("在 Mac 或"),t("code",[o._v("CTRL + Enter")]),o._v("任何其他操作系统上按。")]),o._v(" "),t("h3",{attrs:{id:"_4-查看调用堆栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看调用堆栈"}},[o._v("#")]),o._v(" 4. 查看调用堆栈")]),o._v(" "),t("p",[o._v("DevTools 还允许您查看调用堆栈。当您有很多异步函数，并且您希望在调试错误时跟踪调用堆栈的更改，这很有用。")]),o._v(" "),t("p",[o._v("要查看调用堆栈，请打开 DevTools Sources 面板，然后在右侧面板上展开 Call Stack 面板以查看调用堆栈中的所有当前函数。")]),o._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1616502478418/48LjA8Ubh.png?auto=compress",alt:"图像.png"}})]),o._v(" "),t("h3",{attrs:{id:"_5-blackboxing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-blackboxing"}},[o._v("#")]),o._v(" 5. Blackboxing")]),o._v(" "),t("p",[o._v("在调试时，您可能希望从运行中排除一些脚本。也许是您认为与错误无关的某些第三方库或脚本。")]),o._v(" "),t("p",[o._v("无需在代码中逐行注释它们，您可以在 DevTools 上将它们黑箱化。")]),o._v(" "),t("p",[o._v("为此，请在“Sources ”选项卡的左侧面板上单击要忽略的脚本文件。然后，右键单击中间面板并单击**“Add script to ignore list”**。")]),o._v(" "),t("p",[o._v("现在此脚本将不会运行，因此您可以更好地专注于检查有问题的代码并缩小导致错误发生的范围。")]),o._v(" "),t("h2",{attrs:{id:"结论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[o._v("#")]),o._v(" 结论")]),o._v(" "),t("p",[o._v("您可以使用 Chrome DevTools 做更多事情。我鼓励您访问下面参考资料部分中的链接，自己探索更多。")]),o._v(" "),t("p",[o._v("一旦掌握了窍门，您将能高效调试 "),t("strong",[o._v("Javascript")]),o._v("，您无休止的"),t("code",[o._v("console.log()")]),o._v("日子将成为历史。")]),o._v(" "),t("p",[o._v("谢谢阅读。我希望它是一个有用的阅读。如果是，请喜欢并分享这篇文章，并随时在下面的评论中提问。")]),o._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[o._v("#")]),o._v(" 参考")]),o._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=H0XScE08hy8&list=PLNYkxOF6rcIC74v_mCLUXbjj7Ng7oTAPE&index=1",target:"_blank",rel:"noopener noreferrer"}},[o._v("youtube.com/watch?v=H0XScE08hy8&list=PL.."),t("OutboundLink")],1)]),o._v(" "),t("li",[t("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/javascript",target:"_blank",rel:"noopener noreferrer"}},[o._v("developer.google.com/web/tools/chrome-devt.."),t("OutboundLink")],1)]),o._v(" "),t("li",[t("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/javascript/reference",target:"_blank",rel:"noopener noreferrer"}},[o._v("developer.google.com/web/tools/chrome-devt.."),t("OutboundLink")],1)])]),o._v(" "),t("p",[o._v("【完】")])])}),[],!1,null,null,null);e.default=a.exports}}]);
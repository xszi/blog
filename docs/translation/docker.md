# 通过租用办公空间例子来解释Docker容器

**文章出处：** [Docker Containers Explained by Renting Office Space](https://blog.codeanalogies.com/2019/11/04/docker-containers-explained-by-renting-office-space/)

### 概述

在过去的15年中，部署和管理Web应用程序变得越来越容易。

首先，诸如**Amazon Web Services**之类的服务使您可以通过虚拟机轻松租用服务器的一部分。您不需要购买整个服务器，然后在机房中运行它。

现在，您可以使用诸如**Docker**之类的服务，这些服务使用容器技术使管理动态Web应用程序变得更加便宜和容易。

但是，新手Web开发人员经常将两种基础技术（虚拟机和容器）混淆。尽管它们都能使部署Web应用程序变得容易得多，但是它们还是有一些显著差异。

实际上，这有点像租用自己的办公室空间和租用联合办公空间（使用像**WeWork**这样的公司）之间的区别。因此，本教程将使用办公空间示例来说明它们之间的不同之处。

为了理解本教程，您必须先了解**AWS**和**虚拟机**的概念。如果需要，请查阅我的单独的[AWS指南](https://blog.codeanalogies.com/2018/07/31/amazon-web-services-aws-explained-by-operating-a-brewery/)。


### 办公室例子

现在，假设您是一家小型软件公司的所有者（5名员工），并且您正在寻找办公空间。

#### 办公空间和服务器的历史

让我们将时间倒退20年到2000年。如果您作为小型软件初创公司的所有者来寻找办公空间，那么您的选择可能会非常有限且成本高昂。您可以：

* 在露天购物中心购买小型办公室（或类似的东西）
* 签署一笔大笔前期付款的多年期租约

在线上购买产品会遇到类似的困难。您需要购买整个服务器，将其存储在某处，并确保其24/7全天候在线。效率很低。

但是，在过去的20年中，您租用办公空间的选择发生了变化！随着科技创业公司的普及，您可以租用期约一年的办公室，甚至期约一个月的办公室。

而且，随着共享办公空间在2010年代变得越来越流行，您可以马上在许多公司共享的空间中租用一张桌子或一间封闭的房间！

![image](https://user-images.githubusercontent.com/23453305/113957044-1eb6c700-9851-11eb-8e7b-03ff83b5d7dd.png)

同时，这也在办公楼本身与运营该大楼所需的团队之间建立了一种不同的关系。

当您一次性购买整个办公室时，您还需要管理零食，清洁，家具等所需的所有服务。如果物理空间像硬件，则办公室服务就像软件，办公室经理是操作系统（OS），因为他们确定办公室的工作方式。

![image](https://user-images.githubusercontent.com/23453305/113957447-d2b85200-9851-11eb-823f-f9863cff05ee.png)

但是，由于我们希望办公空间更易于访问，这大大增加了办公服务的复杂性。换句话说，需要更多的操作系统一起工作。

例如，假设您的公司准备租用较大的办公空间。现在，必须有一个总办公室协调员来管理所有楼层，并且您必须有自己的办公室协调员来管理您所在楼层的服务！

好吧，说实话，这是一家小公司，这意味着CEO可能是他们所在办公室的办公室协调员。

![image](https://user-images.githubusercontent.com/23453305/113958462-bae1cd80-9853-11eb-86e2-60d87736ef64.png)

现在，每位首席执行官只需要弄清楚办公室的操作系统就行 —— 零食准备，何时清洁以及所需的家具。这至少比购买房地产要好得多。

### 虚拟机和容器之间的区别

让我们将其绑定到虚拟机和容器。

与我们的第二种情况非常相似，虚拟机在服务器上现有操作系统的基础上添加了自己的操作系统。

而且，他们必须使用称为**管理程序**的中间件层，以允许每个虚拟机共享硬件容量。

看起来像这样：

![image](https://user-images.githubusercontent.com/23453305/113959403-64758e80-9855-11eb-8844-80148693e234.png)

因此，必须将三个级别的软件与应用程序中的文件一起使用：

* 主机操作系统
* 管理程序
* 访客操作系统

这里肯定有一些优势，例如，每个虚拟机都可以运行自己的操作系统，从而增加了灵活性。但是，它也增加了一系列资源密集的软件层。

让我们回到办公空间示例中学习如何使用容器。想象一下现在是2015年，像WeWork这样的联合办公空间已经变得很流行。

在这些共享办公空间中，您只需要开始为每个办公桌支付一个月至一个月的租金即可。物业经理负责零食，清洁，家具和其他物品。

换句话说，您可以从空间的现有操作系统中受益！

看起来像这样：

![image](https://user-images.githubusercontent.com/23453305/113960485-2a0cf100-9857-11eb-9b2e-8cb608b2dcc1.png)

很棒！现在，每个首席执行官都可以专注于经营自己的公司。

实际上，这是容器和虚拟机之间的主要区别。如您在上图中所见，容器共享主机操作系统。这意味着他们不需要运行自己的操作系统，也不需要与虚拟机监控程序一起在多个操作系统之间分配硬件资源。

这意味着容器往往比虚拟机具有更高的可伸缩性，您可以轻松地在标准化环境中部署新容器，而故障点更少。由于您无需为运行所有额外的软件而付费，因此它也更具成本效益。

### 容器的优点/缺点

请记住，**AWS**上有数百台服务器在全球运行完全相同的操作系统。这意味着您可以用很少的开销或自定义设置通过全球的Web应用程序轻松管理容器。

容器的主要缺点之一是安全漏洞。每个容器都具有对服务器的根访问权限，因此，从服务器上的一个容器开始的问题也可能影响其他容器。

让我们回到本文的原始点，**Docker**允许开发人员创建和管理容器。

因此，以我们的类比来说，**Docker**服务不是构建设施本身，而是硬件（服务器）和**Amazon Web Services**。并不是每个公司都租用空间，就像容器一样。

在这种情况下，Docker就像联合办公空间管理公司一样，它们使您能够以新的方式租用办公空间（或服务器空间）！

【完】
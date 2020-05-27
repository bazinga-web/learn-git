### git rebase

Rebase 实际上就是取出一系列的提交记录，“复制”它们，然后在另外一个地方逐个的放下去。

Rebase 的优势就是可以创造更线性的提交历史，这听上去有些难以理解。如果只允许使用 Rebase 的话，代码库的提交历史将会变得异常清晰。

![](https://raw.githubusercontent.com/bazinga-web/images/master/20200527/154414.png)



与`merge`区别

- merge会有分叉
- 多出一条合并记录



### 相对位置

- 使用 ^ 向上移动 1 个提交记录

- 使用 ~<num> 向上移动多个提交记录，如 ~3

![](https://raw.githubusercontent.com/bazinga-web/images/master/20200527/154206.png)





### git reset 和 git revert

![](https://raw.githubusercontent.com/bazinga-web/images/master/20200527/153722.png)



![](https://raw.githubusercontent.com/bazinga-web/images/master/20200527/153824.png)





### git commit --amend

此命令可修改本地已提交过的commit

1. 更改文件后 git add 
2. git commit --amend 打开nano修改提交记录



### 自由修改提交树

#### git cherry-pick

```shell
git cherry-pick <提交号>...
```

![image-20200527153921932](D:%5Cmarkdown%5Cimages%5Cimage-20200527153921932.png)



#### git rebase -i

```
-i === --interactive
Git 会打开一个 UI 界面并列出将要被复制到目标分支的备选提交记录，它还会显示每个提交记录的哈希值和提交说明，提交说明有助于你理解这个提交进行了哪些更改
```



### 远程追踪分支



```shell
git checkout -b totallyNotMaster o/master
创建一个名为 totallyNotMaster 的分支，它跟踪远程分支 o/master。


git branch -u o/master foo
foo 就会跟踪 o/master 了。如果当前就在 foo 分支上, 还可以省略 foo：
git branch -u o/master

```



### git pull

`git fetch` 和 `git merge`  合并使用效果相同



### git push 参数

```shell
git push <remote> <place>

<place>参数指定了提交记录的来源和去向

git push origin <source>:<destination>
```

eg：`git push origin master`

​		

切到本地仓库中的“master”分支，获取所有的提交，再到远程仓库“origin”中找到“master”分支，将远程仓库中没有的提交记录都添加上去



eg: `git push origin foo^:master`

![](https://raw.githubusercontent.com/bazinga-web/images/master/20200527/152018.png)



eg: `git push origin master:newBranch`

目的分支不存在时根据名称创建

![](https://raw.githubusercontent.com/bazinga-web/images/master/20200527/152301.png)



### git fetch 参数

与 `git push`相反





### 留空的source

```shell
git push origin :side //它会删除远程仓库中的分支！
git fetch origin :bugFix // 本地创建一个新分支
```







### 参考

> https://learngitbranching.js.org/?locale=zh_CN git游戏


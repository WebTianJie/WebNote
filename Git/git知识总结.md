### 一:版本控制,团队协作 git的两大目的
	1:本地版本控制系统 宕机之后代码全无
	2:集中化的版本控制系统 服务器放置代码,上传代码一般为最新代码
	3:分布式的版本控制系统,每一个仓库都可以作为代码仓库,都包含了全部的代码
    4:git和githup,git是一个规则和协议,gitup是git的一个实现,
### 二:git的工作区和文件状态
	1:生成本地秘钥  ssh-keygen -t rsa 默认安装目录:C:/Users/Administrator/.ssh/
	2:打开id_rsa.pub文件,复制里面的密匙文件,不要修改,不要删除,只能复制里面的内容
	3:登录你的gitup账号,点击头像,settings->SSH and GPG keys->News SSH key,title是你自己自定义的,Key里面放置你复制的Key文件
	4:设置你提交代码时候使用的提交用户名 git config --global user.name 天劫天罪 //天劫天罪就是设置的提交代码时候用的名字
	5:设置你的的邮箱  git config --global user.email 993695313@qq.com
	6:在我的头像,设置YourProject,创建你的代码存储沧湖 点击SSH(默认的是HTTPs),复制后面的代码地址
### 三:产gitup常用操作指令
	工作目录:就是你下载到的本地的文件目录
	暂存区:
	Git仓库:放在githup上面的代码仓库,意思等同于远程服务器上面放置代码的文件夹
####	1:
	下载gituo仓库里面的代码: git clone git@github.com:WebTianJie/DuYiGitUpDemo.git
####	2:
	添加本地文件到暂存区: git add index.html index.html是要添加到暂存区的文件,多个文件空格隔开 git add . 全部添加到暂存区
####	3:
	提交到文件到本地仓库:git commit -m 'init html' init html是提交的描述
####	4:
	推送到远程githup代码仓库:git push origin master 
####	5:
	git log 查看提交日志,git reflog历史操作记录,git status 查看状态,每个工作区的状态和文件状态
####	7:
	查看项目的信息:git remote -v
####	8:
	git reset --hard HEAD 查看每个版本的的指针信息
####	9:
	  git reset  --hard  HEAD~1 '指针信息id' 工作区: 回退到指定的版本信息 不覆盖工作区的文件,此时三个工作区一直
		git reset  --minxed:暂存区:默认的回退方式,除了工作区其它的区都回退
		git reset  --soft:暂存区:(本地代码仓库)回退到上一个版本提交之前
		git reset  HEAD^ 详情回滚一个版本,;两个尖角号标识回滚两个版本  git reset  HEAD~10 向前回滚10个版本
####	10:
	git  diff 比较最近两个最新版本的差记忆 暂存区和工作区
	   git  diff --cached 比较暂存区与本地代码仓库中最近一次commit的内容差异
	   git  diff HEAD 比较工作区和本地版本仓库中最新一次commit差异
	   git  diff commitid commit 比较两个commit之间的差异
####	11:
	分支
	   git branch :查看分支
	   git branch 'dev' :创建dev分支
	   git checkout 'edv':切换dev到dev分支
	   git checkout -b dev:创建创建新分支并切换 切换后需要提交
	   git push origin dev:dev:向dev仓库里推送代码
	   git merge dev :dev分支合并到master分支上面,合并后需要提交
	   git push -d origin dev:删除分支
	   git pull origin master:拉取主分支的代码,相当于与主分支的代码的同步
	   添加协作者:
	   项目的最右侧:settings->Collaborators->Add collaborator,可以通过邮箱或者分配的登录账号添加协作者
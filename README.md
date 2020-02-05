# 试用版

## 下面操作都是在终端下操作

> 首先安装`Homebrew`
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
>
> 查看`git`是否安装 `git -version`, 如果存在继续下一步，不存在使用`brew install git`安装，可能需要`root`权限，这个时候使用`sudo brew install git`,安装完成使用`git -version`查看是否成功
>
> 查看`node`是否安装，`node -v`, 存在下一步，不存在使用`brew install nodejs`或者`sudo brew install nodejs`，
安装完成使用`node -v`查看是否成功
>
> 生成`ssh-key`，使用命令行`ssh-keygen`,直接按回车键下一步即可（保留）
>
> 查看上一步生成的公钥,使用该命令`cat ~/.ssh/id_rsa.pub`

## 下面操作都是在浏览器中进行

> 打开`GitHub`，申请账号
>
> 登录，进入`settings`
>
> 右侧侧边栏`SSH and GPG keys`, 打开并点击`New SSH key`
>
> 填入上一步终端拿到的公钥（把终端里的复制过来就行），保存即可

## 关于如何运行
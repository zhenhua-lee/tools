#!/bin/bash
myname="lzh"
echo "变量输出，需要添加\$符 $myname"
echo "变量输出，也可使用\${variable} ${myname}"

echo -e '\n'

myage=0
echo "第一次赋值 ${myage}"
myage=12
echo "变量可以重新赋值 ${myage}"

echo -e "\n"

echo "内置变量: \$0-文件名 $0" 
echo "内置变量: \$n-第几个参数 $2"
echo "内置变量: \$#-参数的个数 $#"
echo "内置变量: \$*-所有参数 $*"
echo "内置变量: \$@-所有参数，跟$*略有不同 $@"
echo "内置变量: \$?-上个命令的推出状态 $?"
echo "内置变量: \$\$-当前shell进程的ID $$"

echo -e "\n"

USER=$(who am i)
echo "用\`实现命名替换 $USER"
USER2=`ls -l $0`
echo "用\$()实现命名替换 $USER2"

echo -e "\n"

echo "变量替换"
aa=22
echo "${aa:+world} ${aa}"

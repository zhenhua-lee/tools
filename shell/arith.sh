#!/bin/bash
var1=`expr 3 + 4`
var2=`expr 4 + 2`
echo "var1=${var1}"
echo "var2=${var2}"
echo -e "\n"

arr=(1,2,3,4)
echo "数组输出: ${arr[1]}"
echo -e "\n"

if [ -d '/Users/lzh/Documents/france/github/tools/shell' ]
	then 
	echo "存在文件"
else
	echo "不存在"
fi

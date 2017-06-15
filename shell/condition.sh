#!/bin/bash
# n=-1
# if [ n < 0 ]; then
# 	echo "n 小于 0"
# elif [ n -lt 10 ]; then
# 	echo "n 小于 10"
# else
# 	echo "n 大于 10"
# fi

# echo "your number is"
# read number
# case $number in
# 	1) echo "you select one" ;;
# 	2) echo "you select two";;
# 	*) echo "default"
# esac

# for loop in `ls $HOME`
# do
# 	echo "output is ${loop}"
# done

num=0
while [ $num -lt 5 ]
do
	num=`expr $num + 1`
	echo "输出为：$num"
done

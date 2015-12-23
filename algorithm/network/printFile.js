/*
 * 按照一定结构打印文件目录
 * 因为不知道files的深度，所以需要使用递归进行遍历
 * aa
 *    aa-1
 *     aa-2
 *       aa-2-1
 * bb
 *    bb-1
 */

 function printFile(files, level) {
  level = level || 0;
  Object.keys(files).forEach(function (key) {
    console.log(createWhiteSpace(level) + key + ':\t');
    if (typeof files[key] === 'object') {
      printFile(files[key], level + 1);
    } else {
      console.log(createWhiteSpace(level + 1) + files[key] + '\n');
    }
  })
 }

 function createWhiteSpace(n) {
  var re = ''
  while(n) {
    re += '\t';
    n--;
  }
  return re;
 }

var files = {
  aa: {
    aa1: 'aa1 aa1 aa1',
    aa2: {
      aa21: 'aa21 aa21 aa21',
      aa22: 'aa22 aa22 aa22',
    },
    aa3: 'aa3 aa3 aa3',
  },
  bb: 'bb bb bb ',
  cc: {
    cc1: 'cc1 cc1 cc1'
  }
}

printFile(files)




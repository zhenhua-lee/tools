const fs = require('fs');
const path = require('path');
const spider = require('./base');

const str = '楼栋,房间,面积,实际面积,得房率,均价,总价';

function start(no, count, filename, fileCount) {
	let result = [];
	for(var i=1; i < count+1; i++) {
		spider(no, i, result);
	}

	setTimeout(() => {
		result = result.filter(item => item[5])
		result.sort(function(a, b) {
			return a[1] - b[1];
		});
		result = result.map(item => {
			// item[1] += '室';
			item[4] += '%';
			item[6] = Math.ceil(item[6] / 10000, 6) + '万';
			// return item.join(',')
			return item;
		})
		console.log('------ ', result)
		for(let k=1; k <= fileCount; k++) { 
			const re = result.filter((item, index) => {
				return (item[1] % 10) === k
			});
			const re2 = re.map(item => item.join(','));
			re2.unshift(str);	
			const ws = fs.createWriteStream(`${filename}-${k}.csv`);
			ws.end(re2.join('\n'));
		}
		// console.log(result)
	}, 15000);
}

start(12446903, 9, './1幢', 4);
start(12447019, 6, './14幢', 3);
start(12447098, 9, './18幢', 4);
start(12447424, 8, './19幢', 4);
start(12447212, 7, './21幢', 3);
start(12447310, 9, './22幢', 4);

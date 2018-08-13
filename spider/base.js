const http = require('http');
const url = require('url');
const cheerio = require('cheerio');
const _ = require('lodash');

const qs = require('querystring');
const concat = require('concat-stream')

process.on('uncaughtException', err => {
	console.log(err);
})

const query = {
	isopen: null,
	presellid: 12446902,
	buildingid: 12446903,
	area: null,
	allprice: null,	
	housestate: null,
	housetype: null,
	page: 1,
};
const basePath = '/newhouse/property_330184_205726779_price.htm';
const urlOpt = {
	protocol: 'http:',
	hostname: 'www.tmsf.com',
	method: 'get',
	headers: {
		'Cookie': 'ROUTEID=.lb8; JSESSIONID=F67F8051AF0474A5BC94DC1523BAFF3B.lb8; Hm_lvt_bbb8b9db5fbc7576fd868d7931c80ee1=1509361761; Hm_lpvt_bbb8b9db5fbc7576fd868d7931c80ee1=1509462942',
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
		// 'Accept-Encoding': 'gzip, deflate',
		'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive',
		'Cookie': 'ROUTEID=.lb8; JSESSIONID=F67F8051AF0474A5BC94DC1523BAFF3B.lb8; Hm_lvt_bbb8b9db5fbc7576fd868d7931c80ee1=1509361761; Hm_lpvt_bbb8b9db5fbc7576fd868d7931c80ee1=1509463002',
		'Host': 'www.tmsf.com',
		'Pragma': 'no-cache',
		'Referer': 'http://www.tmsf.com/newhouse/presell_330184_205726779_12446902.htm',
		'Upgrade-Insecure-Requests': 1,
		'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
	}
};

const string2number = {
	numberzero: 0,
	numberone: 1,
	numbertwo: 2,
	numberthree: 3,
	numberfour: 4,
	numberfive: 5,
	numbersix: 6,
	numberseven: 7,
	numbereight: 8,
	numbernine: 9,
	numberdor: '.',
};

function fn(td, $) {
	const list = [];
	td.find('span').each(function () {				
		const cn = $(this).attr("class");
		list.push(string2number[cn]);
	});
	return list.join('');
}


module.exports = function start(no, i, result) { 
	query.buildingid = no;
	query.page = i;
	urlOpt.path = `${basePath}?${qs.stringify(query)}`;
	// console.log(urlOpt)
	const req = http.request(urlOpt, res => {
		res.pipe(concat(data => { 
			const str = data.toString('utf8');
			const $ = cheerio.load(str);
			const trs = $('.ft14 > .ft14 tr'); 
			// const result = []; 
			trs.each(function(index) { 
				const tds = $(this).find('td'); 
				const obj = [];
				obj.push(tds.eq(0).find('a').html().replace('&#x5E62;', '幢'));
				obj.push(tds.eq(1).find('a div').html().replace('&#x5BA4;', ''));

				obj.push(fn(tds.eq(2), $));
				obj.push(fn(tds.eq(3), $));
				obj.push(fn(tds.eq(4), $));
				obj.push(fn(tds.eq(5), $));
				obj.push(fn(tds.eq(7), $));

				result.push(obj);
			})
			// ws.write(result.join('\n'));
			// [].push.apply(arr, result);
		}))
	});

	req.end();
}

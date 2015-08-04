var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox');

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .forBrowser('chrome')
    .setChromeOptions(/* ... */)
    .setFirefoxOptions(/* ... */)
    .build();

driver.get('http://bj.meituan.com/');
driver.findElement(By.name('w')).sendKeys('美食')
driver.findElement(By.css('.s-submit')).click();

// driver.wait(until.titleContains('美团网'), 3000);

// var alinks = driver.findElement(By.css('.J-scrollloader'))
// .findElements(By.tagName('a'));

// driver.sleep(3000)

// driver.isElementPresent(By.tagName('a'))
//     .then(function (present) {
//         if(present) {
//             console.dir(present);
//         }
//     })

// var message = [];
// driver.call(message.push, message, 'a');
// driver.call(message.push, message, 'b');
// driver.call(message.push, message, 'c');
// driver.call(function() {
//   console.log('message is abc? ' + (message.join('') == 'abc'));
// });

// var start = new Date().getTime();
// driver.executeAsyncScript(
//     'console.log("---")').
//     then(function() {
//       console.log(
//           'Elapsed time: ' + (new Date().getTime() - start) + ' ms');
//     });

driver.wait(driver.findElements(By.css('.deal-tile')), 10000, 'it is ok')

driver.findElements(By.css('.deal-tile')).then(function (val) {
    val.forEach(function(item) {
        item.click();
    })
}, function (err) {
    console.log('error fist')
})

// driver.findElement(By.name('q')).sendKeys('webdriver');
// driver.findElement(By.name('btnG')).click();
// driver.wait(until.titleIs('webdriver - Google Search'), 1000);
// driver.quit();



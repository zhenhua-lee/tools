var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox');

// var driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .setChromeOptions(/* ... */)
//     .setFirefoxOptions(/* ... */)
//     .build();

var driver = new webdriver.Builder().withCapabilities({
    browserName : 'chrome',
    'chromeOptions': {
        args: ['test-type']
    }
}).build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();
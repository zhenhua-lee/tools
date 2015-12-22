var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox');

var expect = require('chai').expect;

describe('test driver', function () {
    it('here', function () {
        var driver = new webdriver.Builder()
            .forBrowser('firefox')
            .forBrowser('chrome')
            .setChromeOptions(/* ... */)
            .setFirefoxOptions(/* ... */)
            .build();

        driver.manage()
        .timeouts()
        .implicitlyWait(10000);

        driver.manage()
        .timeouts()
        .pageLoadTimeout(5000);

        driver.get('http://bj.meituan.com/');
        driver.findElement(By.name('w')).sendKeys('美食')
        driver.findElement(By.css('.s-submit')).click();

        driver.wait(driver.findElements(By.css('.deal-tile')), 10000, 'it is ok')

        driver.findElements(By.css('.deal-tile')).then(function (val) {
            val.forEach(function(item) {
                item.click();
            })
        }, function (err) {
            console.log('error fist')
        })

    })
})


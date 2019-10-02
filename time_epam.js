const {Builder, By, Key, until} = require('selenium-webdriver');

function logTitle() {
    browser.getTitle().then(function (title) {
        console.log('Current Page Title: ' + title);
    });
}


browser.get('https://stackoverflow.com/');
browser.findElement(webdriver.By.name('q')).sendKeys('webdriverjs');
browser.findElement(webdriver.By.xpath("//button[@type='submit']")).click();
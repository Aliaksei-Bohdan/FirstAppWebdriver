/*const {Builder, By, Key, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnK')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 10000);

// driver.findElement(By.name('btnK')).click();

// driver.quit();*/
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function GoogleSearch() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver');
    // await driver.sleep(1000);
    await driver.wait(until.elementIsSelected(By.css('.gNO89b')),5000);
    //await driver.findElement(By.css('.gNO89b')).click();
    //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.sleep(1000);
    await driver.quit();
  }
})();
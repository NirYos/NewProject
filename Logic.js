BaseLogic = require('./BaseLogic')
const puppeteer = require('puppeteer');

module.exports = class Logic extends BaseLogic {
async pptr() {
  const launchParams = {
    headless : false
  };
  const browser = await puppeteer.launch(launchParams);
  const page = await browser.newPage();
  await page.goto('https://ynet.co.il');
//we use 'await' to get rid of the promise, and get the value inside of the promise.
  


  //1. not good: (await page.$(...)).click()
  //2. good: await(await page.$(...)).click())
  //3. here:
  // let tempo = await page.$('img[title*="בעלי חיים"]');
  // await tempo.click();

  // what does 'this' do:
  // 'this' allows us to call functions that we have in the class
  await this.waitForSelectorAndClick(page, 'img[title*="בעלי חיים"]')
  // if we want to click, to move to another page, then we have two options
  // 1. we can use something called wait for navigation
  // 2. verify that some element exists in the next page

  const ttt = await page.$x('//*[@id="hdr_main_links"]/ul[2]/li[9]/a');
  const ttt2 = await ttt[0].getProperty('innerHTML');
  var ttt3 = await ttt2.jsonValue();
  return ttt3;

  await browser.close();
} 







}
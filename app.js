const puppeteer = require('puppeteer');

launchParams = {
  headless : false
};

(async function main() {
  await pptr();
  // waits until pptr function call is completed
})();


async function pptr() {
  const browser = await puppeteer.launch(launchParams);
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
} 


console.log('a');

setInterval(() => undefined, Number.POSITIVE_INFINITY);
// more about classses: https://javascript.info/class


module.exports = class BaseLogic {
  
async clickAndWaitForNavigation(page, 
  selector,
  clickOptions, 
  waitOptions){
await page.waitForSelector(selector);
await page.waitFor(200);
return Promise.all([
page.waitForNavigation(waitOptions),
page.click(selector, clickOptions),
]).then((value) => {
return value[0];
});
}



async waitForSelectorAndClick(page, selector, clickOptions, waitOptions) {

await page.waitForSelector(selector, waitOptions);
await page.click(selector, clickOptions);
await page.waitFor(200);
return selector;
}

async waitForSelectorAndClickXpath(page, selector, clickOptions) {

const iAgreeCheckbox = (await this.page.$x(selector))[0];
await iAgreeCheckbox.click(clickOptions);
await page.waitFor(200);
return selector;
}
}
 import {test,expect, Locator} from '@playwright/test';
/*
Locators - Identifies the element on the page 
Dom- Document object model
Dom is an API interface provided by browser

1) Page.getByAltText() to locate an element, usually image, by its text alternative.by using alt tag
2)page.getByText() to locate by text content



*/
test("verify image having the alttxt",async ({page})=>{
//1.page.getByText()-identifies images (and similar elements ) based on the alt attribute.
// use this locators when your element supports alt txt such as img area elements.
await page.goto("https://www.flipkart.com");
const logo:Locator =page.getByAltText("Minutes")
await expect(logo).toBeVisible();
await logo.click();

});

test("Verify the element by text in it ",async ({page})=>{

await page.goto("https://www.flipkart.com");
const text:Locator=page.getByText("Cart")
await expect(text)
await text.click();
});
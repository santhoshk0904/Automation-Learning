
import { test, expect, Page } from "@playwright/test";

test("Verify the title", async ({ page }) => {
    await page.goto("https://demo1.topall.live/");
    const title: string = await page.title();
    console.log("Page Title:", title);
    await expect(page).toHaveTitle("Demo1 :: TopAll");
    await page.getByRole('textbox', { name: /email/i }).fill('8888888888');
    await page.getByRole('textbox', { name: /password/i }).fill('8888888888@demo');
    await page.click('button[type="submit"]');
    await page.locator(
      'a.MuiListItemButton-root:has-text("User Details")'
    ).click();
await page.waitForTimeout(5000);
await page.getByRole('button', { name: 'Download Excel' }).click();
await page.waitForTimeout(2000);

});

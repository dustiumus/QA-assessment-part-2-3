import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
});  
test('Put an X in top left corner', async () =>{
    let topLeft = await driver.findElement(By.id('cell-0'));
    await topLeft.click();
});

test('Put an X in the middle', async () => {
    let middle = await driver.findElement(By.id('cell-4'));
    await middle.click();
});

test('Put an X in bottom right for Kill', async () => {
    let righty = await driver.findElement(By.id('cell-8'));
    await righty.click();
    await driver.sleep(4000);
});

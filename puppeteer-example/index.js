const puppeteer = require('puppeteer');
const os = require('os');
exports.issue_puppeteer = (req, res) => {
    capturePage(res)
};

function capturePage(res) {
    (async () => {
        const browser = await puppeteer.launch({
            args: ["--no-sandbox"],
        });
        const page = await browser.newPage();
        await page.goto('http://whatsmyuseragent.org/');
        const tmpDir = os.tmpdir()
        await page.screenshot({ path: `${tmpDir}/example.png`, fullPage: true });
        await browser.close();
        res.send(`Hello World!`);
    })();
}

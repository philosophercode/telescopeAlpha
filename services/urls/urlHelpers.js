require('isomorphic-fetch');
const CDP = require('chrome-remote-interface');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
// const prompt = require('prompt');
const wf = require('word-freq');
require('dotenv').config()

const cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'isaacs', 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

const Screenshotted = {}
// req.body.url


function screenshotter(req, res, next) {
    
    const urlReq = req.body.url_path;
    const categoryReq = req.body.category_id;


/**
 * https://developers.google.com/web/updates/2017/04/headless-chrome
 * Launches a debugging instance of Chrome.
 * @param {boolean=} headless True (default) launches Chrome in headless mode.
 *     False launches a full version of Chrome.
 * @return {Promise<ChromeLauncher>}
 */
    async function launchChrome() {
        return await chromeLauncher.launch({
            // port: 9222, // Uncomment to force a specific port of your choice.
            chromeFlags: [
                    '--window-size=1080,1080',
                    '--disable-gpu',
                    '--headless'
            ]
        });
    }
// prompt.start();

// prompt.get(['url'], function (err, result) {
//
// Log the results.
//
    const urlPath = `https://${urlReq}`;
    console.log('URL input received:');
    console.log(urlPath);
    let timer = Date.now()
    console.log(timer + " ms");
    launchChrome().then(async chrome => {

        (async function() {

            const chrome = await launchChrome();
            const protocol = await CDP({port: chrome.port});

            // Extract the DevTools protocol domains we need and enable them.
            // See API docs: https://chromedevtools.github.io/devtools-protocol/
            const {Page, Runtime} = protocol;
            await Promise.all([Page.enable(), Runtime.enable()]);

            Page.navigate({url: urlPath});

            // Wait for window.onload before doing stuff.
            Page.loadEventFired(async () => {
                const title = "document.querySelector('title').textContent";
                // Evaluate the JS expression in the page.
                const result = await Runtime.evaluate({expression: title});

                console.log('Title of page: ' + result.result.value);

                const bodyText = "document.querySelector('body').textContent";
                // Evaluate the JS expression in the page.
                const result2 = await Runtime.evaluate({expression: bodyText});
                const str = result2.result.value
                console.log('Body of page: ' + result2.result.value);


                const frequency = wf.freq(str);
                console.log(frequency);

                const scrTimer = Date.now()

                const screenshot = await Page.captureScreenshot('png');
                const buffer = new Buffer(screenshot.data, 'base64');
                
                // console.log(screenshot);
                // console.log(buffer);
               
                fs.writeFile(`${result.result.value}.png`, buffer, 'base64', function(err) {
                    if (err) {
                    console.error(err);
                } else {
                    console.log(`screenshot finished ${(Date.now()-scrTimer) / 1000} sec`);
                    console.log(`${result.result.value} || Screenshot saved`);
                    console.log(urlPath);
                    console.log( (Date.now()-timer) / 1000 + " sec");

                    cloudinary.v2.uploader.upload(
                        `./${result.result.value}.png`, function(error, result) {
                            console.log(result);
                            Screenshotted.url_path = urlPath;
                            Screenshotted.window_title = result.original_filename;
                            Screenshotted.screenshot_path = result.secure_url;
                            Screenshotted.webpage_data = frequency;
                            Screenshotted.category = categoryReq;
                            console.log(Screenshotted);
                            res.locals.url_path = Screenshotted.url_path;
                            res.locals.window_title = Screenshotted.window_title;
                            res.locals.screenshot_path = Screenshotted.screenshot_path;
                            res.locals.webpage_data = Screenshotted.webpage_data;
                            res.locals.category_id = Screenshotted.category;
                            console.log(res.locals);
                        }
                    );
                }
                protocol.close();
                });

                protocol.close();
                chrome.kill(); // Kill Chrome.
            });
            

        })();
        chrome.kill();
    });
    // return Screenshotted;
    next ();
// });
}

// module.exports = {
//   screenshotter: screenshotter,
//   Screenshotted: Screenshotted,
// }


// export { Screenshotted };

module.exports = {
  screenshotter: screenshotter,
}


import Scrapeless from 'scrapeless-sdk-node';

const apiKey = 'AC0D22E2D7A64C87C5683D3F6D2CD1AC';
const actor = 'captcha.recaptcha';
const scrapeless = new Scrapeless({ apiKey });

const solveCaptcha = async () => {
  const inputData = {
    version: "v3",
    pageURL: "https://recaptcha-demo.appspot.com/",
    siteKey: "6Le80pApAAAAANg24CMbhL_U2PASCW_JUnq5jPys",
    pageAction: "scraping",
    invisible: false,
  };

  try {
    const result = await scrapeless.solverCaptcha({
      actor,
      input: inputData,
      proxy: {},
    }, 10000);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

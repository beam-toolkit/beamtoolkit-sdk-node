import Scrapeless from 'scrapeless-sdk-node';

const apiKey = 'YOUR-API-KEY';
const actor = 'captcha.recaptcha.enterprise';
const scrapeless = new Scrapeless({ apiKey });

const solveCaptcha = async () => {
  const inputData = {
    version: "v3",
    pageURL: "https://www.google.com",
    siteKey: "6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-",
    pageAction: "scraping",
    invisible: false,
  };

  try {
    const result = await scrapeless.captcha({
      actor,
      input: inputData,
      proxy: {},
    });

    console.log(result);

    await getCaptchaResult(result.taskId);
  } catch (error) {
    console.error(error);
  }
}

const getCaptchaResult = async (taskId: string) => {
  try {
    const result = scrapeless.getCaptchaResult(taskId);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

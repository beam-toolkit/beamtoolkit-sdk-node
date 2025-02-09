import Scrapeless from 'scrapeless-sdk-node';

const apiKey = 'YOUR-API-KEY';

const webUnlocker = async () => {
  const actor = 'unlocker.akamaiweb';
  const inputData = {
    abck: 'xxxx',
    bmsz: 'xxxx',
    url: "https://www.scrapeless.com",
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
  };

  const scrapeless = new Scrapeless({ apiKey });

  try {
    const result = await scrapeless.unlocker({
      actor,
      input: inputData,
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

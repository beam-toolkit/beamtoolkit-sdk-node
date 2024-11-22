import Scrapeless from 'scrapeless-sdk-node';

const apiKey = 'YOUR-API-KEY';

const webUnlocker = async () => {
  const actor = 'unlocker.webunlocker';
  const inputData = {
    url: "https://www.scrapeless.com",
    proxy_country: "ANY",
    method: "GET",
    redirect: false,
  };

  const scrapeless = new Scrapeless({ apiKey });

  try {
    const result = scrapeless.unlocker({
      actor,
      input: inputData,
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

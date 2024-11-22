import Scrapeless from 'scrapeless-sdk-node';

const apiKey = 'YOUR-API-KEY';
const actor = 'scraper.shopee';
const scrapeless = new Scrapeless({ apiKey });

const shopeeLive = async () => {
  const type = 'shopee.live';
  const url = 'https://live.shopee.co.th/api/v1/session/13285347';

  try {
    const result = await scrapeless.scraper({
      actor,
      input: {
        type,
        url,
      }
    });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
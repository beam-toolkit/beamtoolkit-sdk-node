import Scrapeless from 'scrapeless-sdk-node';

const apiKey = 'YOUR-API-KEY';
const actor = 'scraper.shopee';
const scrapeless = new Scrapeless({ apiKey });

const shopeeSearch = async () => {
  const type = 'shopee.search';
  const url = 'https://shopee.tw/2312312.10228173.24803858474';

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
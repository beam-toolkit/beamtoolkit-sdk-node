import Scrapeless from 'scrapeless-sdk-node';

const apiKey = 'YOUR-API-KEY';
const actor = 'scraper.shopee';
const scrapeless = new Scrapeless({ apiKey });

const shopeeProduct = async () => {
  const type = 'shopee.product';
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
    console.error(error);
  }
}
import Scrapeless from 'scrapeless-sdk-node';

const apiKey = 'YOUR-API-KEY';
const actor = 'scraper.consopt';
const scrapeless = new Scrapeless({ apiKey });

const brConsopt = async () => {
  try {
    const result = await scrapeless.scraper({
      actor,
      input: {
        taxId: '25032537000164',
      },
      proxy: {
        country: 'US'
      }
    });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
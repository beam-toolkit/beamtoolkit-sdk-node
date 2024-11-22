import Scrapeless from 'scrapeless-sdk-node';

const apiKey = 'YOUR-API-KEY';
const actor = 'scraper.solucoes';
const scrapeless = new Scrapeless({ apiKey });

const brSolucoes = async () => {
  try {
    const result = await scrapeless.scraper({
      actor,
      input: {
        taxId: '37.335.118/0001-80',
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
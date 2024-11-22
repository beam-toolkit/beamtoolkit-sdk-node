import Scrapeless from 'scrapeless-sdk-node';

const apiKey = 'YOUR-API-KEY';
const actor = 'scraper.iberia';
const scrapeless = new Scrapeless({ apiKey });

const iberia = async () => {
  try {
    const result = await scrapeless.scraper({
      actor,
      input: {
        proxy: '72.46.64.6:65173:ssxiqsom:VA8ji024fz',
        username: '00000116280546',
        password: 'i72sV7CWbDZ+7',
        body: '{\'slices\':[{\'origin\':\'NYC\',\'destination\':\'SHA\',\'date\':\'2024-11-03\'}],\'passengers\':[{\'passengerType\':\'ADULT\',\'count\':1}],\'marketCode\':\'US\',\'preferredCabin\':\'\'}'
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
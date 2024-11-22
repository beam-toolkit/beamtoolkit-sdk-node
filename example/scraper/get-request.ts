import Scrapeless from 'scrapeless-sdk-node';

const apiKey = 'YOUR-API-KEY';
const actor = 'scraper.iberia';
const scrapeless = new Scrapeless({ apiKey });

const getScraperResult = async (taskId: string) => {
  try {
    const result = await scrapeless.getScraperResult(taskId);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

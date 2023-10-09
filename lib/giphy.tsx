import { GiphyFetch, TrendingOptions } from "@giphy/js-fetch-api";
export type { GifsResult, TrendingOptions } from "@giphy/js-fetch-api";

if (!process.env.GIPHY_KEY) {
  throw new Error("`GIPHY_KEY` env variable is missing.");
}

const gf = new GiphyFetch(process.env.GIPHY_KEY);


export async function getTrendingData(options: TrendingOptions) {
  const response = await gf.trending(options);
  return response.data;
}

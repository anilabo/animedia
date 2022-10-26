import { seasonNum } from "hooks/useSeason";

const params = [
  "title",
  "title_en",
  "title_short1",
  "title_short2",
  "twitter_account",
  "twitter_hash_tag",
];

export const animeQuery = params.join("_or_") + "_cont";

export const isPresent = (word: string) => {
  return word && word != "blank";
};

export const appendAnimeQuery = (
  year: string,
  season: string,
  keyword: string
) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_ANILABO_URL}/animes`);
  const params = url.searchParams;

  if (keyword) {
    params.append(`q[${animeQuery}]`, `${keyword}`);
  }
  if (isPresent(`${year}`)) {
    params.append("q[year_eq]", `${year}`);
  }
  if (isPresent(`${season}`)) {
    params.append("q[season_eq]", `${seasonNum(`${season}`)}`);
  }

  return url;
};

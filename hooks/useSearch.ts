const params = [
  "title",
  "title_en",
  "title_short1",
  "title_short2",
  "twitter_account",
  "twitter_hash_tag",
];

export const animeQuery = params.join("_or_") + "_cont";

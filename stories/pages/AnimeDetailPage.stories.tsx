import AnimeDetail from "../../pages/animes/[hash_id]";

export default {}

const dummyAnime: Anime = {
  id: 1,
  public_uid: "cb5512c5d4e03dd759d7",
  title: "SPY×FAMILY",
  title_en: "SPY×FAMILY",
  title_short1: "スパイファミリー",
  public_url: "https://spy-family.net/",
  twitter_account: "spyfamily_anime",
  twitter_hash_tag: "スパイファミリー",
  sequel: 0,
  thumbnail_url: "",
  year: 2022,
  season: "spring",
  companies: [],
  series: []
}

export const AnimeDetailPage = () => <AnimeDetail anime={dummyAnime} />
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import { useState } from "react";
import AnimeThumbnailCard from "components/Anime/ThumbnailCard";
import AnimeSubscribes from "components/Anime/Subscribes";
import AnimeMyCommentsLink from "components/Anime/MyCommentsLink";
import AnimeInformation from "components/Anime/Information";
import { isNotFoundCode } from "hooks/useNotFound";
import AnimeSeries from "components/Anime/Series";
import AnimeWatchedComments from "components/Anime/WatchedComments";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { hash_id } = context.query;

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_ANILABO_URL}/animes/${hash_id}`);
    const anime = await res.data;
    return {
      props: { anime },
    };
  } catch (error) {
    return {
      props: {},
      notFound: isNotFoundCode(error),
    };
  }
};

type InitialProps = { anime: Anime };

const AnimeDetailPage: NextPage<InitialProps> = ({ anime }) => {
  const [companyNames] = useState<string>(
    anime.companies[0]
      ? `（${anime.companies.map((company) => company.name).join(", ")}）`
      : ""
  );
  const [watchedUsers, setWatchedUsers] = useState<User[]>(anime.watched_users)

  return (
    <>
      <div className="max-w-6xl m-2 md:mx-auto mb-10">
        <div className="flex flex-col p-2">
          <h1 className="text-xl font-semibold">
            {anime.title}
            {companyNames}
          </h1>
          <h2 className="text-xs text-gray-600">{anime.title_en}</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/3 flex flex-col gap-4">
            <div className="border rounded">
              <AnimeThumbnailCard anime={anime} />
            </div>
            <div className="border rounded">
              <AnimeSubscribes anime={anime} setWatchedUsers={setWatchedUsers} />
              <AnimeMyCommentsLink anime={anime} />
              <AnimeInformation anime={anime} />
            </div>
            {anime.series[0] && (
              <div className="border rounded">
                <AnimeSeries anime={anime} />
              </div>
            )}
          </div>
          <div className="md:w-2/3">
            <AnimeWatchedComments anime={anime} watchedUsers={watchedUsers} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeDetailPage;
